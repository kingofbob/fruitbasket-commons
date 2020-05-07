const utils = require('../utils');

module.exports = {

    promotion(basketArr = [], promoCode = null) {
        let newBasketArr = Object.assign([], basketArr);
        const promos = utils.getAllPromos(basketArr, promoCode);

        promos.forEach((eachPromo) => {
            if (utils.isRulesValid(eachPromo.promotionRules, newBasketArr)) {
                //check promo type 
                switch (eachPromo.type) {
                    case "more_than":
                        newBasketArr = module.exports.moreThan(eachPromo, newBasketArr);
                        break;
                    case "regroup":
                        newBasketArr = module.exports.regroup(eachPromo, newBasketArr);
                        break;
                }
            }
        });

    
        return module.exports.populateTotalPricing(newBasketArr);

    },
    moreThan(promo, basket = []) {
        promo.promotionRules.forEach((eachRule) => {
            const productIndex = basket.findIndex((eachItem) => (eachItem.product ? eachItem.product.id : null) == eachRule.productId);

            if (productIndex < 0) return;

            let promoBasketItem = Object.assign({}, basket[productIndex]);
            promoBasketItem.promotion = promo;
            basket[productIndex] = promoBasketItem;
        });

        return basket;
    },
    regroup(promo, basket = []) {
        promo = Object.assign({}, promo);
        const smallestQuotient = module.exports.rulesSmallestQuotient(promo.promotionRules, basket);
        let singlePrice = 0;
        const newPromorules = promo.promotionRules.map((eachRule) => {
            const productIndex = basket.findIndex((eachItem) => (eachItem.product ? eachItem.product.id : null) == eachRule.productId);
            if (productIndex < 0) return;

            let promoBasketItem = Object.assign({}, basket[productIndex]);

            const promoQuantity = smallestQuotient * eachRule.quantity;
            promoBasketItem.quantity -= promoQuantity;

            singlePrice += (eachRule.quantity * promoBasketItem.product.price);
            if (promoBasketItem.quantity <= 0) {
                basket.splice(productIndex, 1);
            } else {
                basket[productIndex] = promoBasketItem;
            }

            return {...eachRule, product: promoBasketItem.product};
        })
       
        promo.promotionRules = newPromorules;

        //create new basket with promo
        basket.unshift({
            promotionPrice: singlePrice,
            promotion: promo,
            quantity: smallestQuotient,
        })
        return basket;
    },
    rulesSmallestQuotient(promotionRules = [], basket = []) {
        const allQuotient = promotionRules.map((eachRule) => {
            const productIndex = basket.findIndex((eachItem) => (eachItem.product ? eachItem.product.id : null) == eachRule.productId);
            if (productIndex < 0) return 0;
            let promoBasketItem = Object.assign({}, basket[productIndex]);

            var quotient = Math.floor(promoBasketItem.quantity / eachRule.quantity);
            // var remainder = promoBasketItem.quantity % eachRule.quantity;

            return quotient;
        });

        return Math.min.apply(Math, allQuotient);
    },
    populateTotalPricing(basketArr = []) {
        return basketArr.map((eachItem) => {
            let totalPrice = eachItem.quantity * (eachItem.product ? eachItem.product.price : eachItem.promotionPrice);
            let originalPrice = null;
            if (eachItem.promotion) {
                originalPrice = totalPrice;
                totalPrice *= 1 - eachItem.promotion.discount / 100;
            }

            return {...eachItem, originalPrice, totalPrice};
        })
    }

}
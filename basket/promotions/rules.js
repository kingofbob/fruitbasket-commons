const promoUtils = require('./utils');

module.exports = {
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
        const smallestQuotient = promoUtils.rulesSmallestQuotient(promo.promotionRules, basket);
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
}
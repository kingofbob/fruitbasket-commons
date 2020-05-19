module.exports = {
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

    getAllPromos(basketArr = [], promoCode = null) {
        let promos = [];
        basketArr.forEach((eachItem) => {
            promos = [...promos, ...eachItem.product.promotion];
        })
        //need to move regroup to top

        var moveToFront = "regroup";
        return _.uniqBy(promos, 'id')
            .filter((eachPromo) => {
                if (eachPromo.couponCode == null || eachPromo.couponCode == promoCode)
                    return true;

                return false;
            })
            .sort(function (x, y) {
                return x.type == moveToFront ? -1 : y.type == moveToFront ? 1 : 0;
            });
    },

    isRulesValid(promotionRules = [], basketArr = []) {
        for (let t = 0; t < promotionRules.length; t++) {
            const eachRule = promotionRules[t];
            const basketItem = basketArr.find((eachBasket) => _.get(eachBasket, 'product.id') == eachRule.productId);

            if (!basketItem || !eval(basketItem.quantity + eachRule.condition + eachRule.quantity)) {
                return false;
            }
        }

        return true;
    },
}
const _ = require('lodash');

module.exports = {
    countItems(basketArr = []) {
        let count = 0;
        basketArr.forEach((eachItem) => {
            count += eachItem.quantity;
        })

        return count;
    },
    countProducts(basketArr = []) {
        return basketArr.length;
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
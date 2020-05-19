const rules = require('./rules');
const calcualtions = require('../calculations');
const promoUtils = require('./utils');

module.exports = {
    basketListing(basketArr = [], promoCode = null) {
        let newBasketArr = Object.assign([], basketArr);
        const promos = promoUtils.getAllPromos(basketArr, promoCode);

        promos.forEach((eachPromo) => {
            if (promoUtils.isRulesValid(eachPromo.promotionRules, newBasketArr)) {
                //check promo type 
                switch (eachPromo.type) {
                    case "more_than":
                        newBasketArr = rules.moreThan(eachPromo, newBasketArr);
                        break;
                    case "regroup":
                        newBasketArr = rules.regroup(eachPromo, newBasketArr);
                        break;
                }
            }
        });

    
        return calcualtions.populateTotalPricing(newBasketArr);

    },
}


module.exports = {

    //used to populate listing
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
    },

    getTotalPrice(basketArr = []){
        return basketArr.reduce((total, basket) => total + (Math.round((basket.totalPrice + Number.EPSILON) * 100) / 100), 0);
    },
    
    getOriginalPrice(basketArr = []){
        return basketArr.reduce((total, basket) => total + (Math.round(((basket.originalPrice || basket.totalPrice) + Number.EPSILON) * 100) / 100), 0);
    }
}
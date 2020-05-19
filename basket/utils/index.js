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

}
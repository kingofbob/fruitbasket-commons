const _ = require('lodash');
const calculation = require('../calculations');

module.exports = {
    generateInvoice(basketArr = [], userId = null ){
        const invoiceItems = basketArr.map((eachItem) => {
            return {
              quantity: eachItem.quantity,
              price: _.get(eachItem, 'product.price') || _.get(eachItem, 'promotionPrice'),
              productName: _.get(eachItem, 'product.name') || _.get(eachItem, 'promotion.name'),
              promotionName: _.get(eachItem, 'product.name') ? _.get(eachItem, 'promotion.name') : undefined,
              promotionDiscount: _.get(eachItem, 'promotion.discount'),
              originalPrice: _.get(eachItem, 'originalPrice'),
              totalPrice: _.get(eachItem, 'totalPrice'),
            }
          });
    
          const invoice = {
            subTotal: calculation.getTotalPrice(basketArr),
            userId: userId,
            invoiceItems
          }

          return invoice;
    }
}
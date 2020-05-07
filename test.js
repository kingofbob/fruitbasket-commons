
const basketArr = [
    {
      product: {
        id: '6A7EAAD6-FA1C-4086-A056-F8FAAA8FEEB4',
        name: 'Bananas',
        image: 'https://www.meijer.com/content/dam/meijer/product/0000/00/0940/11/0000000940115_a1c1_1200.png',
        price: '2.42',
        deleted: false,
        createdAt: '2020-04-21T23:47:30.000Z',
        updatedAt: '2020-04-21T23:47:31.000Z',
        promotion: [
          {
            id: 'CE08631C-DD7A-4F92-A414-1B52F5E8D8DC',
            name: '30% Off Apples',
            discount: 30,
            type: 'more_than',
            quantity: 1000,
            couponCode: null,
            expiryDate: '2020-05-27T13:39:38.000Z',
            deleted: false,
            createdAt: '2020-04-27T13:39:43.000Z',
            updatedAt: '2020-04-27T13:39:44.000Z',
            promotionRules: [
              {
                id: '10E165AA-F334-4670-845E-30F6B707BBC0',
                condition: '>=',
                quantity: 7,
                createdAt: '2020-04-27T13:40:45.000Z',
                updatedAt: '2020-04-27T13:40:46.000Z',
                productId: '5A1E9183-6679-4D39-8F6F-5D8CBDFF492F',
                promotionId: 'CE08631C-DD7A-4F92-A414-1B52F5E8D8DC'
              },
              {
                id: '1127B4CC-7604-4DFF-A391-178A1864C7FF',
                condition: '>=',
                quantity: 2,
                createdAt: '2020-04-30T13:20:57.000Z',
                updatedAt: '2020-04-30T13:20:58.000Z',
                productId: '6A7EAAD6-FA1C-4086-A056-F8FAAA8FEEB4',
                promotionId: 'CE08631C-DD7A-4F92-A414-1B52F5E8D8DC'
              }
            ]
          },
          {
            id: '84AB3F49-8369-4D6D-99A3-CE5E845724C8',
            name: '20 Off Apples & Bananas Combo',
            discount: 20,
            type: 'regroup',
            quantity: 1000,
            couponCode: null,
            expiryDate: '2020-11-30T15:29:16.000Z',
            deleted: false,
            createdAt: '2020-04-30T15:29:34.000Z',
            updatedAt: '2020-04-30T15:29:35.000Z',
            promotionRules: [
              {
                id: '24A3889E-1497-4A91-87F4-0586C4A1BF57',
                condition: '>=',
                quantity: 3,
                createdAt: '2020-04-30T15:29:54.000Z',
                updatedAt: '2020-04-30T15:29:55.000Z',
                productId: '5A1E9183-6679-4D39-8F6F-5D8CBDFF492F',
                promotionId: '84AB3F49-8369-4D6D-99A3-CE5E845724C8'
              },
              {
                id: '5FFB61A2-6BD5-41CA-8720-F64593FE8165',
                condition: '>=',
                quantity: 4,
                createdAt: '2020-04-30T15:29:54.000Z',
                updatedAt: '2020-04-30T15:29:55.000Z',
                productId: '6A7EAAD6-FA1C-4086-A056-F8FAAA8FEEB4',
                promotionId: '84AB3F49-8369-4D6D-99A3-CE5E845724C8'
              }
            ]
          }
        ]
      },
      quantity: 62
    },
    {
      product: {
        id: '5A1E9183-6679-4D39-8F6F-5D8CBDFF492F',
        name: 'Apples',
        image: 'https://www.meijer.com/content/dam/meijer/product/0003/33/8300/96/0003338300960_1_A1C1_1200.png',
        price: '5.49',
        deleted: false,
        createdAt: '2020-04-21T23:47:01.000Z',
        updatedAt: '2020-04-21T23:47:02.000Z',
        promotion: [
          {
            id: 'CE08631C-DD7A-4F92-A414-1B52F5E8D8DC',
            name: '30% Off Apples',
            discount: 30,
            type: 'more_than',
            quantity: 1000,
            couponCode: null,
            expiryDate: '2020-05-27T13:39:38.000Z',
            deleted: false,
            createdAt: '2020-04-27T13:39:43.000Z',
            updatedAt: '2020-04-27T13:39:44.000Z',
            promotionRules: [
              {
                id: '10E165AA-F334-4670-845E-30F6B707BBC0',
                condition: '>=',
                quantity: 7,
                createdAt: '2020-04-27T13:40:45.000Z',
                updatedAt: '2020-04-27T13:40:46.000Z',
                productId: '5A1E9183-6679-4D39-8F6F-5D8CBDFF492F',
                promotionId: 'CE08631C-DD7A-4F92-A414-1B52F5E8D8DC'
              },
              {
                id: '1127B4CC-7604-4DFF-A391-178A1864C7FF',
                condition: '>=',
                quantity: 2,
                createdAt: '2020-04-30T13:20:57.000Z',
                updatedAt: '2020-04-30T13:20:58.000Z',
                productId: '6A7EAAD6-FA1C-4086-A056-F8FAAA8FEEB4',
                promotionId: 'CE08631C-DD7A-4F92-A414-1B52F5E8D8DC'
              }
            ]
          },
          {
            id: '84AB3F49-8369-4D6D-99A3-CE5E845724C8',
            name: '20 Off Apples & Bananas Combo',
            discount: 20,
            type: 'regroup',
            quantity: 1000,
            couponCode: null,
            expiryDate: '2020-11-30T15:29:16.000Z',
            deleted: false,
            createdAt: '2020-04-30T15:29:34.000Z',
            updatedAt: '2020-04-30T15:29:35.000Z',
            promotionRules: [
              {
                id: '24A3889E-1497-4A91-87F4-0586C4A1BF57',
                condition: '>=',
                quantity: 3,
                createdAt: '2020-04-30T15:29:54.000Z',
                updatedAt: '2020-04-30T15:29:55.000Z',
                productId: '5A1E9183-6679-4D39-8F6F-5D8CBDFF492F',
                promotionId: '84AB3F49-8369-4D6D-99A3-CE5E845724C8'
              },
              {
                id: '5FFB61A2-6BD5-41CA-8720-F64593FE8165',
                condition: '>=',
                quantity: 4,
                createdAt: '2020-04-30T15:29:54.000Z',
                updatedAt: '2020-04-30T15:29:55.000Z',
                productId: '6A7EAAD6-FA1C-4086-A056-F8FAAA8FEEB4',
                promotionId: '84AB3F49-8369-4D6D-99A3-CE5E845724C8'
              }
            ]
          }
        ]
      },
      quantity: 39
    },
    {
      product: {
        id: 'B9B69146-A55D-4B7A-A698-DF54CFE03ED0',
        name: 'Oranges',
        image: 'https://www.meijer.com/content/dam/meijer/product/0007/81/0001/34/0007810001341_1200.png',
        price: '0.99',
        deleted: false,
        createdAt: '2020-04-21T23:49:18.000Z',
        updatedAt: '2020-04-21T23:49:18.000Z',
        promotion: []
      },
      quantity: 6
    },
    {
      product: {
        id: '21D1D524-EA28-45A9-8CAE-67E1963BA763',
        name: 'Pears',
        image: 'https://www.meijer.com/content/dam/meijer/product/0000/00/0044/16/0000000044165_a1c1_1200.png',
        price: '0.90',
        deleted: false,
        createdAt: '2020-04-21T23:48:16.000Z',
        updatedAt: '2020-04-21T23:48:16.000Z',
        promotion: []
      },
      quantity: 19
    }
  ]

  const promoCode = null;

  console.log("Test: " , require('./basket/calculations').promotion(basketArr, promoCode));
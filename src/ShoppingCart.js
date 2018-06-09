module.exports = class ShoppingCart {
  constructor() {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItem(itemName, quantity, price) {
    this.items.push(
      {
        name: itemName,
        quantity: quantity,
        pricePerUnit: price
      })
  }

  clear() {
    this.items = []
  }

  clone() {
    let newCart = new ShoppingCart()
    newCart.items = this.items.map(item => ({...item}))

    return newCart
  }
}

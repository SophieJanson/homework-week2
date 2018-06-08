class ShoppingCart {
  constructor() {
    this._items = []
  }

  getItems() {
    return this._items
  }

  addItem(itemName, quantity, price) {
    this._items.push({
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    })
  }


}

module.exports.ShoppingCart = ShoppingCart

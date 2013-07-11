// Namespace
var Store = Store || {};

// Cart properties
Store.Cart = function () {
    this.items = ko.observableArray([]);

    this.items.subscribe(function (items) {
        localStorage.setItem("jscart", JSON.stringify(items));
    });

    return this;
};

// Events
Store.Cart.prototype.addItemClick = function (item, ev) {
    var sku = $(ev.currentTarget).data("sku");
    if (sku) {
        this.addItem({ sku: sku });
    }
};

// Cart methods
Store.Cart.prototype.addItem = function (item) {
    var existing = this.findBySku(item.sku);
    if (existing) {
        existing.quantity += 1;
    } else {
        var newItem = new Store.CartItem(item);
        this.items.push(newItem);
    }
};

Store.Cart.prototype.empty = function () {
    this.items.removeAll();
};

Store.Cart.prototype.itemCount = function () {
    return this.items().length;
};

Store.Cart.prototype.findBySku = function (sku) {
    return ko.utils.arrayFirst(this.items(), function (item) {
        return item.sku === sku;
    });
};

Store.Cart.prototype.removeItem = function (sku) {
    var item = this.findBySku(sku);
    this.items.remove(item);
}

// Cart Items
Store.CartItem = function (args) {
    this.sku = args.sku || "",
    this.quantity = args.quantity || 1;

    return this;
};
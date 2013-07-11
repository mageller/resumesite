var Store = Store || {};

Store.Cart = function () {
    var self = this;
    var items = [];

    // add items
    self.addItem = function (item) {
        items.push(item);
    };

    self.itemCount = function () {
        return items.length;
    }

    // find items
    // remove items
    // get total

    // local storage
    // send to service
};
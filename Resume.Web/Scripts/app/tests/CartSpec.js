describe("Cart", function () {
    var cart = new Store.Cart();
    it("exists", function () {
        expect(cart).toBeDefined();
    });

    describe("adding 1 item", function () {
        it("has an add function", function() {
            cart.addItem({sku : "100001"});
        });
        it("increments itemCount by 1", function () {
            expect(cart.itemCount()).toEqual(1);
        });
    });
    
});
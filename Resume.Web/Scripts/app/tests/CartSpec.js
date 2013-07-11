describe("Cart", function () {
    var cart = new Store.Cart();
    beforeEach(function () {
        cart.empty();
    });
    it("exists", function () {
        expect(cart).toBeDefined();
    });

    describe("adding items", function () {

        it("has an add function", function() {
            cart.addItem({ sku: "100001" });
            expect(cart.itemCount()).toEqual(1);
        });

        it("finds by sku", function () {
            cart.addItem({ sku: "100001" });
            expect(cart.findBySku("100001").sku).toEqual("100001");
        });
        
        it("increments quantity when some sku", function () {
            cart.addItem({ sku: "100001" });
            cart.addItem({ sku: "100001" });
            expect(cart.itemCount()).toEqual(1);
        });
    });

    describe("removing items", function () {
        beforeEach(function () {
            cart.addItem({ sku: "101" });
        });

        it("removes by sku", function () {
            cart.removeItem("101");
            expect(cart.itemCount()).toEqual(0);
        });
    });
    
});
let Product = function (...listProduct) {

    this.listProduct = listProduct;

    this.setListProduct = function (...data) {
        this.listProduct = data;
    };

    this.getListProduct = function () {
        return this.listProduct;
    };

    this.addProduct = function (Product) {
        this.listProduct.push(Product);
    };
    this.deleteProduct = function (productLocation) {
        this.listProduct.splice(productLocation, 1);
    };

    this.reNameProduct = function (name, location) {
        this.listProduct[location] = name;
    }
};


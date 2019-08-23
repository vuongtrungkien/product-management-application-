let product = new Product("Tai nghe", "Dây sạc điện thoại ", "tai nghe không dây", "Ốp lưng điện thoại", "Kính cường lực",);

console.log(product);
let manage = new Manage(product);
console.log(manage);

let displayListProduct = function (manager) {
    let html = "";
        let array = manager.product.listProduct;
    for (let i = 0; i < array.length; i++) {
        html += '<li id="' + i + '">';
        html += array[i];
        html += '</li>';
        html += '<span id = "' + i + '">';
        html += "<button id='" + i + "' onclick='manage.buttonRename(this)'>Edit</button>";
        html += '</span>';
        html += '<span id = "' + i + '">';
        html += "<button id='" + i + "' onclick='manage.buttonDelete(this)' >DELETE</button>";
        html += '</span>';

    }
    return html;
};

function displayProduct() {
    document.getElementById("listProduct").innerHTML = displayListProduct(manage);
}


displayProduct();
window.addEventListener("click", function () {
displayProduct();
});
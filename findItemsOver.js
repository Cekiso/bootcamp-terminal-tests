module.exports = function findItemsOver(itemList, threshold) {
    var product = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > 20)
            product.push(itemList[i])

    }
    return product
}
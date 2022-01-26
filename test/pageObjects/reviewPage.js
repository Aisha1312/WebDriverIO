class ReviewPage
{
    get productPrices()
    {
        return $$("//tr/td[4]/strong")
    }
    get totalPrice()
    {
        return $("h3 strong")
    }
    sumOfProducts()
    {
        const sumOfProducts = this.productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))
        .reduce((acc,price)=> acc+price,0)
        return sumOfProducts
    }
    totalFormattedPrice()
    {
        return parseInt(this.totalPrice.split(".")[1].trim())  
    }
}
module.exports = new ReviewPage()
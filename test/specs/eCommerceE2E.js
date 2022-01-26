const expectchai = require('chai').expect

describe('ECommerce Application', ()=>
{
    it('E2E Test',()=>{

        var products = ["Blackberry","Nokia Edge"]
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("#password")
        password.setValue("learning") 
        $("#signInBtn").click()

        const link = $("*=Checkout")
        link.waitForExist()

        cards = $$("div[class='card h-100']")
        cards.filter(card => products.includes(card.$("div h4 a").getText()))
        .map(productCard=>productCard.$(".card-footer button").click())
        browser.pause(10000)
        link.click()
        productPrices = $$("//tr//td[4]//strong")

        //getText()

        //format it and convert it to integer 
        //and apply sum on all values

        const sumOfProducts = productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))
        .reduce((acc,price)=> acc+price,0)  

        console.log(sumOfProducts)

        const totalValue = $("h3 strong").getText()
        const totalIntValue =parseInt(totalValue.split(".")[1].trim())
        expectchai(sumOfProducts).to.equal(totalIntValue)
        $(".btn-success").click()
        $("#country").setValue("Ind")
        $(".lds-ellipsis").waitForExist({reverse:true})
        $("=India").click()
        $("[type='submit']").click()
        $(".alert-success")
        expect($(".alert-success")).toHaveTextContaining("Success")



    
    })
})
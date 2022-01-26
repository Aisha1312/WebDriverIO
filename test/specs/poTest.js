const LoginPage = require('./pageObjects/loginPage')
const shopPage = require('./pageObjects/shop')
const reviewPage = require('./pageObjects/ReviewPage')
const expectchai = require('chai').expect
const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/loginTest.json'))

describe('ECommerce Application', ()=>
{
    it('E2E Test',()=>{

        var products = ["Blackberry","Nokia Edge"]
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        LoginPage.Login("rahulshettyacademy","learning")

        
        shopPage.checkout.waitForExist()
        shopPage.addProductToCart(products)
        browser.pause(10000)
        shopPage.checkout.click()
        const sumOfProducts  = reviewPage.sumOfProducts()
        const totalIntValue = reviewPage.totalFormattedPrice()
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
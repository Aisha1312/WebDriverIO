const expectchai = require('chai').expect

describe('Functional testing on application', ()=>
{
    xit('Scrolling and mouse hover', () => 
    {
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("#mousehover").scrollIntoView()
        browser.pause(2000)
        $("#mousehover").moveTo()
        browser.pause(2000)
        $("=Top").click()
        browser.pause(2000)

        browser.url("https://demoqa.com/alerts")
        $("#alertButton").doubleClick()
        console.log("Is Alert open? " + browser.isAlertOpen()) //true
        console.log("The text present is " + browser.getAlertText())
        browser.acceptAlert()
        browser.pause(3000)
    })

    it('Sorting veggies', () => 
    {
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $("tr th:nth-child(1)").click()

        //retrieve list of veggie names into array A
        //sort array A -> Array B
        //compare Array A and Array B

        const veggiesLocators = $$("tbody tr td:nth-child(1)")
        const veggiesNames = veggiesLocators.map(veggie=>veggie.getText()) 

        console.log(veggiesNames)

        sortedVeggies = veggiesNames.sort()
        console.log(sortedVeggies)

        expectchai(veggiesNames).to.equal(sortedVeggies)


    })

    it('Searching veggies', ()=> 
    {
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        $("#search-field").setValue('tomato')
        const veggieLocators = $$("tbody tr td:nth-child(1)")
        expect(veggieLocators).toBeElementsArrayOfSize({eq:1})
        console.log(veggieLocators[0].getText())
        expect(veggieLocators[0]).toHaveTextContaining("Tomato")

    })
})

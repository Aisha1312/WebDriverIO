const expectchai = require('chai').expect

describe('ECommerce aplication', ()=>
it('UI Controls', () => {
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("#password")
        password.setValue("learning")
        const radioButtons = $$(".customradio") 
        userDropdown = radioButtons[1]
        userDropdown.$(".radiotextsty").click()   //chain of locators(locator.locator)
        browser.pause(3000)
        const modal = $(".modal-body")
        modal.waitForDisplayed()
        $("#cancelBtn").click()
        console.log(userDropdown.$(".radiotextsty").isSelected())

        userDropdown.$(".radiotextsty").click() 
        modal.waitForDisplayed()
        $("#okayBtn").click()
        radioButtons[0].$(".radiotextsty").click()

        //write a step which tells the pop up is not displayed
        expect(modal).not.toBeDisplayed()

        const dropdown = $("select.form-control")
        dropdown.selectByAttribute('value','teach')
        browser.pause(2000)

        dropdown.selectByVisibleText('Consultant')
        browser.pause(2000)

        dropdown.selectByIndex(0)
        browser.pause(2000)
        expectchai(dropdown.getValue()).to.equal("stud")
}),

  it('Dynamic dropdown controls',()=>{
        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        $("#autocomplete").setValue('Ind')
        browser.pause(5000)

        let items = $$("[class = 'ui-menu-item'] div")
        
        //for(var i=0; i<items.length;i++)
        //{
         //   console.log(items[i].getText())
        //}

        const indiaLocator = items.filter(item => item.getText() === "India")
        indiaLocator[0].click()
        browser.pause(3000)
    }),

    it('Checkboxes Identification',()=> {

        browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
        const element = $$("input[type = 'checkbox']")
        element[1].click()
        browser.pause(4000)
        console.log(element[1].isSelected())
        console.log(element[2].isSelected())
        browser.saveScreenshot("screenshot.png")
    })

)

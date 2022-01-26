describe('parent and child', ()=>

it('Parent and Child windows switch', ()=>
{
    browser.url("https://www.rahulshettyacademy.com/AutomationPractice/")
    $("[onclick='openWindow()']").click()
    var handles = browser.getWindowHandles()
    browser.switchToWindow(handles[1])
    console.log(browser.getTitle())
    browser.maximizeWindow()
    browser.closeWindow()
    browser.switchToWindow(0)
    console.log(browser.getTitle())
    browser.newWindow("https://www.rahulshettyacademy.com/#/index") // switch
    const title = browser.getTitle()
    browser.switchWindow("https://www.rahulshettyacademy.com/AutomationPractice/")
    $("#name").setValue(title)
    browser.switchWindow(title)
    console.log(browser.getUrl)
})



)
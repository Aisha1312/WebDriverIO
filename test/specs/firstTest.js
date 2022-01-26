describe('ECommerce Application', ()=>
{
    it('Login Page Title',()=>{
        //WebDriver IO code
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        console.log(browser.getTitle())
        browser.pause(3000)
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        //webdriver IO supports xpath css and link text
        // tagName[attribute=value]
        $("input[name='username']").setValue("aisha tabassum")
        browser.pause(3000)
        $("#username").setValue("aisha")
        browser.pause(3000)
        const password = $("#password")
        password.setValue("learning123") 
        //#id   #username
        //.classname -CSS  -> .form-control

        $("#signInBtn").click()

        //$("#signInBtn").getAttribute('value')=== 'Sign In'

        browser.waitUntil(()=>$("#signInBtn").getAttribute('value')=== 'Sign In', { timeout : 5000, timeoutMsg : "Error Message did not appear"})

        console.log($(".alert-danger").getText() + "is the text i am seeing on screen")
        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")

    })

    it('Login Success page',()=>
    {
        browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("#password")
        password.setValue("learning") 
        $("#signInBtn").click()
        
        const link = $("*=Checkout")
        link.waitForExist()

        expect(browser).toHaveTitle("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")
    })
})
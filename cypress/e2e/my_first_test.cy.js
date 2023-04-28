import { RegisterPage } from "./register_page.cy"
import { LoginPage } from "./login_page.cy"

let registerPage = new RegisterPage()
let loginPage = new LoginPage()


describe('Register and Login Test',()=> {

    it('register test', ()=>{

        registerPage.navigateWebsite('http://www.gconhub.com'),
        registerPage.navigateRegisterPage(),
        registerPage.enterEmail(),
        registerPage.enterPassword(),
        registerPage.enterRePassword(),
        registerPage.enterNickName('testest')
        registerPage.clickRegister()
        registerPage.saveInformation()
        registerPage.checkConfirmRegister()
    })
    it('login test',()=>{

        loginPage.navigateLoginPage()
        loginPage.enterLogin()
        loginPage.clickLogin()

    })

})

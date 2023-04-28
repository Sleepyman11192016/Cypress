export class LoginPage {

    loginPage = 'http://www.gconhub.com/?page=user_login'
    email = '#email'
    password = '#password'
    logInButton = '#submitbutton'
    responseLogIn = '#response'
    navigateLoginPage(){
    
        cy.visit(this.loginPage)
    
    }
    
    enterLogin(){
        cy.fixture('example').then((example)=>{
            let inputEmail = example.email
            let inputPassword = example.password
            cy.get(this.email).type(inputEmail)
            cy.get(this.password).type(inputPassword)
        })
    }
    
    clickLogin(){
        cy.get(this.logInButton).click()
    }
    
    checkConfirmToActivate(){
        cy.get(this.responseLogIn)
        .should('be.visible')
        .should('have.text','กรุณา Activate ทางอีเมลเพื่อเปิดใช้งาน1')
    }
    
}
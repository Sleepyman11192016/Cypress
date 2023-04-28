export class RegisterPage{

    registerPage_email = '#email4'
    registerPage_password= '#password'
    registerPage_rePassword = '#repassword'
    registerPage_nickName= '#nickname3'
    registerPage_registerButton = 'input[name="register"]'
    registerPage_confirmRegisterMessage = 'สมัครเรียบร้อย กรุณายืนยันสมาชิกผ่านทางอีเมลที่สมัครไว้หากท่านไม่ได้รับอีเมล กรุณาเช็คใน Junk หรือกดขอรับอีเมลยืนยันใหม่ได้ที่เมนูทางด้านขวาบน > redirect ไปหน้าแรกภายใน 1 นาที)'
   
    generateRandom(randomNum = 100){
        let rand = Math.random() * randomNum;
        console.log(rand); 
        rand = Math.floor(rand); 
        return rand;
    }
   
    email = 'abcdkhi'+ this.generateRandom()+'@hotmail.com'
    password = 'xxxxxxxx'
    rePassword = 'xxxxxxxx'
    nickName = 'testtest'

    navigateWebsite(url){
     cy.visit(url)
    }
    
    navigateRegisterPage(){
        cy.get('#login-title').click(),
        cy.contains('สมัครสมาชิก').click()
    }

    enterEmail(){
        cy.get(this.registerPage_email).type(this.email)
    }
    
    enterPassword(){
        cy.get(this.registerPage_password).type(this.password)
    }
    
    enterRePassword(){
        cy.get(this.registerPage_rePassword).type(this.rePassword)
    }
    
    enterNickName(){
        cy.get(this.registerPage_nickName).type(this.nickName+this.generateRandom())
    }
    
    clickRegister(){
        cy.get(this.registerPage_registerButton)
        .should('have.value','สมัครสมาชิก').click()
    }
    
    checkConfirmRegister(){
        cy.get('#response')
        .should('be.visible')
        .should('have.text', this.registerPage_confirmRegisterMessage)
    }
    
    saveInformation(){
        cy.writeFile('./fixtures/example.json',{email:this.email,password:this.password,repassword:this.rePassword})
    }
    
    }
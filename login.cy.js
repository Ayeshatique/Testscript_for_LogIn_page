import { Password } from "@mui/icons-material"

describe("Log in", ()=>{

//------For Unsuccessful Log In---------//
it("Unsuccessfull Log In", ()=>{

//------Visit page---------//
    cy.visit("https://demoqa.com/login")

//------Enter Wrong User name---------//
    cy.get('#userName').type("Ayesha Atique")
  
//------Wait--------//
    cy.wait(3000)

//------Enter wrong Password---------//
   cy.get("#password").type("Ayesha123")

//------wait---------//
    cy.wait(3000)

//------Click Log In Button---------//
    cy.get("#login").click()

//------Verify error message that invalid username os password--------//
    cy.get('#name').should("be.visible")
    cy.wait(5000)

})


//------For Successful Log In---------//
it("Successful log in", ()=>{

//------Visit page---------//
  cy.visit("https://demoqa.com/login")

//------Enter correct User name---------//
  cy.get('#userName').type("AyeshaTester")
  cy.wait(3000)

//------Enter correct Password---------//
   cy.get("#password").type("Tester1234!@#$")
   cy.wait(3000)

//------Click Log In Button---------//
  cy.get("#login").click()
  cy.wait(8000)

//--------Verify that user is on Profile page----//
  cy.url().should('eq', "https://demoqa.com/profile")

})
})

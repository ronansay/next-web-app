///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Test NEXT.JS Application', () => {

  beforeEach(() => {
    cy.visit(Cypress.env("URL2"))
    cy.wait(2000)

  });


  //Work Order
  it('Test 1- Verify Login Screen', () => {

    cy.contains('Contoso Spaces')
    cy.contains('Elevate your work style')

    cy.contains('Transform the way you work, meet clients and collaborate with an inspiring and unique office experience.')
    cy.contains('Explore our locations')

    cy.contains('Featured Locations')
    cy.contains('Bashirian - Williamson Center')
    cy.contains('Feil, McClure and Daugherty Building')
    cy.contains('Daniel, McDermott and Douglas Square')
    cy.contains('Turner, Schoen and Bogisich Center')

    //Footer
    cy.contains('Contoso Spaces © 2022')
    cy.contains('Home')
    cy.contains('Locations')
    cy.contains('GitHub')

  })


  //Verify Search
  it('Test 2- Verify Locations Screen', () => {
    cy.contains('Locations')
    cy.xpath('//*[@id="navigation"]/ul/li[2]/a').should('be.visible').click()

    //LOCATION IMAGE 1
    cy.xpath('//*[@id="__next"]/main/section/div[1]/div[1]/img').should('be.visible')
    cy.contains('McGlynn - Kunze Square')

    cy.xpath('//*[@id="__next"]/main/section/div[1]/div[2]/img').should('be.visible')
    cy.contains('Schoen, Rau and Windler Square')

    cy.xpath('//*[@id="__next"]/main/section/div[1]/div[3]/img').should('be.visible')
    cy.contains('Cronin Group Plaza')

    //LOCATION IMAGE 2
    cy.xpath('//*[@id="__next"]/main/section/div[2]/div[1]/img').should('be.visible')
    cy.contains('Kuhlman, Ankunding and Howe Square')

    cy.xpath('//*[@id="__next"]/main/section/div[2]/div[2]/img').should('be.visible')
    cy.contains('Gutkowski Inc Building')

    cy.xpath('//*[@id="__next"]/main/section/div[2]/div[3]/img').should('be.visible')
    cy.contains('Stamm - Heidenreich Complex')

    //LOCATION IMAGE 3
    cy.xpath('//*[@id="__next"]/main/section/div[3]/div[1]/img').should('be.visible')
    cy.contains('Goyette - Luettgen Plaza')

    cy.xpath('//*[@id="__next"]/main/section/div[3]/div[2]/img').should('be.visible')
    cy.contains('Sipes Group Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[3]/div[3]/img').should('be.visible')
    cy.contains('Reichert - Luettgen Complex')

    //LOCATION IMAGE 4
    cy.xpath('//*[@id="__next"]/main/section/div[4]/div[1]/img').should('be.visible')
    cy.contains('Bosco, Moen and Hand Center')

    cy.xpath('//*[@id="__next"]/main/section/div[4]/div[2]/img').should('be.visible')
    cy.contains('Turcotte, Carroll and Hermiston Square')

    cy.xpath('//*[@id="__next"]/main/section/div[4]/div[3]/img').should('be.visible')
    cy.contains('Ziemann and Sons Plaza')

    //LOCATION IMAGE 5
    cy.xpath('//*[@id="__next"]/main/section/div[5]/div[1]/img').should('be.visible')
    cy.contains('Lehner - Kuhic Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[5]/div[2]/img').should('be.visible')
    cy.contains('Thiel, Kreiger and Gleichner Square')

    cy.xpath('//*[@id="__next"]/main/section/div[5]/div[3]/img').should('be.visible')
    cy.contains('Waelchi Inc Complex')

    //LOCATION IMAGE 6
    cy.xpath('//*[@id="__next"]/main/section/div[6]/div[1]/img').should('be.visible')
    cy.contains('Bashirian - Williamson Center')

    cy.xpath('//*[@id="__next"]/main/section/div[6]/div[2]/img').should('be.visible')
    cy.contains('Weissnat, Smitham and Waters Square')

    cy.xpath('//*[@id="__next"]/main/section/div[6]/div[3]/img').should('be.visible')
    cy.contains('Gorczany - Abbott Complex')

    //LOCATION IMAGE 7
    cy.xpath('//*[@id="__next"]/main/section/div[7]/div[1]/img').should('be.visible')
    cy.contains('Kilback, Lueilwitz and Kiehn Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[7]/div[2]/img').should('be.visible')
    cy.contains('Carter - Gaylord Building')

    cy.xpath('//*[@id="__next"]/main/section/div[7]/div[3]/img').should('be.visible')
    cy.contains('Morissette, Wunsch and Boyle Square')

    //LOCATION IMAGE 8
    cy.xpath('//*[@id="__next"]/main/section/div[8]/div[1]/img').should('be.visible')
    cy.contains('Bahringer Inc Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[8]/div[2]/img').should('be.visible')
    cy.contains('Schimmel - Steuber Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[8]/div[3]/img').should('be.visible')
    cy.contains('Langosh and Sons Complex')

    //LOCATION IMAGE 9
    cy.xpath('//*[@id="__next"]/main/section/div[9]/div[1]/img').should('be.visible')
    cy.contains('Schinner and Sons Building')

    cy.xpath('//*[@id="__next"]/main/section/div[9]/div[2]/img').should('be.visible')
    cy.contains('Murphy, Thiel and Morar Plaza')

    cy.xpath('//*[@id="__next"]/main/section/div[9]/div[3]/img').should('be.visible')
    cy.contains('Wolff, Douglas and Hagenes Square')

    //LOCATION IMAGE 10
    cy.xpath('//*[@id="__next"]/main/section/div[10]/div[1]/img').should('be.visible')
    cy.contains('Wunsch LLC Center')

    cy.xpath('//*[@id="__next"]/main/section/div[10]/div[2]/img').should('be.visible')
    cy.contains('Schuster Inc Building')

    cy.xpath('//*[@id="__next"]/main/section/div[10]/div[3]/img').should('be.visible')
    cy.contains('Champlin - Bauch Square')

    //LOCATION IMAGE 11
    cy.xpath('//*[@id="__next"]/main/section/div[11]/div[1]/img').should('be.visible')
    cy.contains('Watsica - Parisian Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[11]/div[2]/img').should('be.visible')
    cy.contains('Hammes - Welch Square')

    cy.xpath('//*[@id="__next"]/main/section/div[11]/div[3]/img').should('be.visible')
    cy.contains('Mertz Group Square')

    //LOCATION IMAGE 12
    cy.xpath('/html/body/div[1]/main/section/div[12]/div[1]/img').should('be.visible')
    cy.contains('Daniel, McDermott and Douglas Square')

    cy.xpath('/html/body/div[1]/main/section/div[12]/div[2]/img').should('be.visible')
    cy.contains('Mayer - Dare Complex')

    cy.xpath('/html/body/div[1]/main/section/div[12]/div[3]/img').should('be.visible')
    cy.contains('Turner, Schoen and Bogisich Center')

    //LOCATION IMAGE 13
    cy.xpath('//*[@id="__next"]/main/section/div[13]/div[1]/img').should('be.visible')
    cy.contains('Wiza, Quitzon and Moen Complex')

    cy.xpath('//*[@id="__next"]/main/section/div[13]/div[2]/img').should('be.visible')
    cy.contains('Buckridge LLC Square')

    cy.xpath('//*[@id="__next"]/main/section/div[13]/div[3]/img').should('be.visible')
    cy.contains('Friesen and Sons Square')

    //LOCATION IMAGE 14
    cy.xpath('//*[@id="__next"]/main/section/div[14]/div[1]/img').should('be.visible')
    cy.contains('Glover, Schaden and Senger Center')

    cy.xpath('//*[@id="__next"]/main/section/div[14]/div[2]/img').should('be.visible')
    cy.contains('Spencer and Sons Center')

    cy.xpath('//*[@id="__next"]/main/section/div[14]/div[3]/img').should('be.visible')
    cy.contains('Stanton - Stoltenberg Square')

    //LOCATION IMAGE 15
    cy.xpath('//*[@id="__next"]/main/section/div[15]/div[1]/img').should('be.visible')
    cy.contains('Heidenreich - Hills Building')

    cy.xpath('//*[@id="__next"]/main/section/div[15]/div[2]/img').should('be.visible')
    cy.contains('Kreiger - Langworth Square')

    cy.xpath('//*[@id="__next"]/main/section/div[15]/div[3]/img').should('be.visible')
    cy.contains('Legros Group Square')

    //LOCATION IMAGE 16
    cy.xpath('//*[@id="__next"]/main/section/div[16]/div[1]/img').should('be.visible')
    cy.contains('Mills Inc Building')

    cy.xpath('//*[@id="__next"]/main/section/div[16]/div[2]/img').should('be.visible')
    cy.contains('Stiedemann and Sons Building')

    cy.xpath('//*[@id="__next"]/main/section/div[16]/div[3]/img').should('be.visible')
    cy.contains('Feil, McClure and Daugherty Building')



  })




})
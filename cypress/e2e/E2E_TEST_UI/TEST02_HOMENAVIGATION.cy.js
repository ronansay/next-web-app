///<reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Test NEXT.JS Application Navigation', () => {

    beforeEach(() => {
        cy.visit(Cypress.env("URL2"))
        cy.wait(2000)

    });


    //Work Order
    it('Test 1- Verify Login Screen Navigation', () => {

        cy.contains('Contoso Spaces')
        cy.contains('Elevate your work style')

        cy.contains('Transform the way you work, meet clients and collaborate with an inspiring and unique office experience.')
        cy.contains('Explore our locations').click()
        cy.wait(2000)

        cy.xpath('//*[@id="__next"]/main/nav/a/span').should('be.visible').contains('Contoso Spaces').click()
        cy.wait(2000)
        cy.contains('Featured Locations')

        //Navigation 1
        cy.contains('Bashirian - Williamson Center')
        cy.contains('3309 Esperanza Xing Austin, TX 78758')
        cy.xpath('//*[@id="__next"]/main/section/div[2]/div[1]/div/a').should('be.visible').click()
        cy.wait(2000)
        cy.url()
        cy.xpath('//*[@id="__next"]/main/section/div/div/h4').should('be.visible').contains('Bashirian - Williamson Center')
        cy.contains('3309 Esperanza Xing Austin, TX 78758')
        cy.contains('No parking available')
        cy.contains('Conference rooms available')
        cy.contains('Reception services provided')
        cy.contains('Public access available')
        cy.contains('Room')
        cy.contains('Monthly Rate')
        cy.contains('Seats')
        cy.contains('Private Washroom')
        cy.contains('Phone')
        cy.contains('Windows')
        cy.contains('Corner')
        //Navigate back to home
        cy.xpath('//*[@id="__next"]/main/nav/a/span').should('be.visible').contains('Contoso Spaces').click()
        cy.wait(2000)
        cy.contains('Elevate your work style')

        //Navigation 2
        cy.contains('Feil, McClure and Daugherty Building')
        cy.contains('700 Bellevue Way Bellevue, WA 98004')
        cy.xpath('//*[@id="__next"]/main/section/div[2]/div[2]/div/a').should('be.visible').click()
        cy.wait(2000)
        cy.url()
        cy.xpath('//*[@id="__next"]/main/section/div/div/h4').should('be.visible').contains('Feil, McClure and Daugherty Building')
        cy.contains('700 Bellevue Way Bellevue, WA 98004')
        cy.contains('No parking available')
        cy.contains('Conference rooms available')
        cy.contains('Reception services provided')
        cy.contains('Public access available')
        cy.contains('Room')
        cy.contains('Monthly Rate')
        cy.contains('Seats')
        cy.contains('Private Washroom')
        cy.contains('Phone')
        cy.contains('Windows')
        cy.contains('Corner')
        //Navigate back to home
        cy.xpath('//*[@id="__next"]/main/nav/a/span').should('be.visible').contains('Contoso Spaces').click()
        cy.wait(2000)
        cy.contains('Elevate your work style')


        //Navigation 3
        cy.contains('Daniel, McDermott and Douglas Square')
        cy.contains('7014 E Camelback Rd Scottsdale, AZ 85251')
        cy.xpath('//*[@id="__next"]/main/section/div[3]/div[1]/div/a').should('be.visible').click()
        cy.wait(2000)
        cy.url()
        cy.xpath('//*[@id="__next"]/main/section/div/div/h4').should('be.visible').contains('Daniel, McDermott and Douglas Square')
        cy.contains('7014 E Camelback Rd Scottsdale, AZ 85251')
        cy.contains('No parking available')
        cy.contains('Conference rooms available')
        cy.contains('No reception services')
        cy.contains('Public access available')
        cy.contains('Room')
        cy.contains('Monthly Rate')
        cy.contains('Seats')
        cy.contains('Private Washroom')
        cy.contains('Phone')
        cy.contains('Windows')
        cy.contains('Corner')
        //Navigate back to home
        cy.xpath('//*[@id="__next"]/main/nav/a/span').should('be.visible').contains('Contoso Spaces').click()
        cy.wait(2000)
        cy.contains('Elevate your work style')

        //Navigation 4
        cy.contains('Turner, Schoen and Bogisich Center')
        cy.contains('3401 Nicholasville Rd Lexington, KY 40503')
        cy.xpath('//*[@id="__next"]/main/section/div[3]/div[2]/div/a').should('be.visible').click()
        cy.wait(2000)
        cy.url()
        cy.xpath('//*[@id="__next"]/main/section/div/div/h4').should('be.visible').contains('Turner, Schoen and Bogisich Center')
        cy.contains('3401 Nicholasville Rd Lexington, KY 40503')
        cy.contains('No parking available')
        cy.contains('Conference rooms available')
        cy.contains('Reception services provided')
        cy.contains('Public access available')
        cy.contains('Room')
        cy.contains('Monthly Rate')
        cy.contains('Seats')
        cy.contains('Private Washroom')
        cy.contains('Phone')
        cy.contains('Windows')
        cy.contains('Corner')
        //Navigate back to home
        cy.xpath('//*[@id="__next"]/main/nav/a/span').should('be.visible').contains('Contoso Spaces').click()
        cy.wait(2000)
        cy.contains('Elevate your work style')

        //Footer
        cy.contains('Contoso Spaces © 2022')
        cy.contains('Home')
        cy.contains('Locations')
        cy.contains('GitHub')


    })


    //Verify Search
    it('Test 2- Verify Locations Navigation', () => {
        cy.contains('Locations')
        cy.xpath('//*[@id="navigation"]/ul/li[2]/a').should('be.visible').click()

        //LOCATION IMAGE 1
        cy.xpath('//*[@id="__next"]/main/section/div[1]/div[1]/img').should('be.visible')
        cy.contains('McGlynn - Kunze Square')
        cy.contains('320 Westlake Ave N Seattle, WA 98109')

        cy.xpath('//*[@id="__next"]/main/section/div[1]/div[2]/img').should('be.visible')
        cy.contains('Schoen, Rau and Windler Square')
        cy.contains('3400 Menaul Blvd NE Albuquerque, NM 87107')
        

        cy.xpath('//*[@id="__next"]/main/section/div[1]/div[3]/img').should('be.visible')
        cy.contains('Cronin Group Plaza')
        cy.contains('2126 Abbott Martin Rd Nashville, TN 37215')
       

        //LOCATION IMAGE 2
        cy.xpath('//*[@id="__next"]/main/section/div[2]/div[1]/img').should('be.visible')
        cy.contains('Kuhlman, Ankunding and Howe Square')
        cy.contains('550 Kirkland Way Kirkland, WA 98033')

        cy.xpath('//*[@id="__next"]/main/section/div[2]/div[2]/img').should('be.visible')
        cy.contains('Gutkowski Inc Building')
        cy.contains('3393 Peachtree Rd Atlanta, GA 30326')

        cy.xpath('//*[@id="__next"]/main/section/div[2]/div[3]/img').should('be.visible')
        cy.contains('Stamm - Heidenreich Complex')
        cy.contains('19575 Biscayne Blvd Aventura, FL 33180')

        //LOCATION IMAGE 3
        cy.xpath('//*[@id="__next"]/main/section/div[3]/div[1]/img').should('be.visible')
        cy.contains('Goyette - Luettgen Plaza')
        cy.contains('1 Market San Francisco, CA 94105')
        

        cy.xpath('//*[@id="__next"]/main/section/div[3]/div[2]/img').should('be.visible')
        cy.contains('Sipes Group Complex')
        cy.contains('3000 E 1st Ave, Denver, CO 80206')

        cy.xpath('//*[@id="__next"]/main/section/div[3]/div[3]/img').should('be.visible')
        cy.contains('Reichert - Luettgen Complex')
        cy.contains('600 Pine St Seattle, WA 98101')

        //LOCATION IMAGE 4
        cy.xpath('//*[@id="__next"]/main/section/div[4]/div[1]/img').should('be.visible')
        cy.contains('Bosco, Moen and Hand Center')
        cy.contains('22422 29th Dr SE Bothell, WA 98021')

        cy.xpath('//*[@id="__next"]/main/section/div[4]/div[2]/img').should('be.visible')
        cy.contains('Turcotte, Carroll and Hermiston Square')
        cy.contains('6465 N Quail Hollow Rd Memphis, TN 38120')

        cy.xpath('//*[@id="__next"]/main/section/div[4]/div[3]/img').should('be.visible')
        cy.contains('Ziemann and Sons Plaza')
        cy.contains('7400 San Pedro Ave San Antonio, TX 78216')

        //LOCATION IMAGE 5
        cy.xpath('//*[@id="__next"]/main/section/div[5]/div[1]/img').should('be.visible')
        cy.contains('Lehner - Kuhic Complex')
        cy.contains('140 University Town Center Dr Sarasota, FL 34243')

        cy.xpath('//*[@id="__next"]/main/section/div[5]/div[2]/img').should('be.visible')
        cy.contains('Thiel, Kreiger and Gleichner Square')
        cy.contains('4400 Ashford Dunwoody Rd NE Atlanta, GA 30346')

        cy.xpath('//*[@id="__next"]/main/section/div[5]/div[3]/img').should('be.visible')
        cy.contains('Waelchi Inc Complex')
        cy.contains('5426 Bay Center Dr Tampa, FL 33609')

        //LOCATION IMAGE 6
        cy.xpath('//*[@id="__next"]/main/section/div[6]/div[1]/img').should('be.visible')
        cy.contains('Bashirian - Williamson Center')
        cy.contains('3309 Esperanza Xing Austin, TX 78758')

        cy.xpath('//*[@id="__next"]/main/section/div[6]/div[2]/img').should('be.visible')
        cy.contains('Weissnat, Smitham and Waters Square')
        cy.contains('8th Ave New York, NY 10014')

        cy.xpath('//*[@id="__next"]/main/section/div[6]/div[3]/img').should('be.visible')
        cy.contains('Gorczany - Abbott Complex')
        cy.contains('1555 Broadway St Detroit, MI 48226')

        //LOCATION IMAGE 7
        cy.xpath('//*[@id="__next"]/main/section/div[7]/div[1]/img').should('be.visible')
        cy.contains('Kilback, Lueilwitz and Kiehn Complex')
        cy.contains('3301 Veterans Memorial Blvd Metairie, LA 70002')

        cy.xpath('//*[@id="__next"]/main/section/div[7]/div[2]/img').should('be.visible')
        cy.contains('Carter - Gaylord Building')
        cy.contains('1 Memorial Dr Cambridge, MA 02142')

        cy.xpath('//*[@id="__next"]/main/section/div[7]/div[3]/img').should('be.visible')
        cy.contains('Morissette, Wunsch and Boyle Square')
        cy.contains('9 Great Oaks Blvd, San Jose, CA 95119')

        //LOCATION IMAGE 8
        cy.xpath('//*[@id="__next"]/main/section/div[8]/div[1]/img').should('be.visible')
        cy.contains('Bahringer Inc Complex')
        cy.contains('20 W Kinzie St Chicago, IL 60654')

        cy.xpath('//*[@id="__next"]/main/section/div[8]/div[2]/img').should('be.visible')
        cy.contains('Schimmel - Steuber Complex')
        cy.contains('1649 Shoreline Dr Boise, ID 83702')

        cy.xpath('//*[@id="__next"]/main/section/div[8]/div[3]/img').should('be.visible')
        cy.contains('Langosh and Sons Complex')
        cy.contains('9585 SW Washington Square Rd Portland, OR 97223')

        //LOCATION IMAGE 9
        cy.xpath('//*[@id="__next"]/main/section/div[9]/div[1]/img').should('be.visible')
        cy.contains('Schinner and Sons Building')
        cy.contains('11 Times Sq New York, NY 10036')

        cy.xpath('//*[@id="__next"]/main/section/div[9]/div[2]/img').should('be.visible')
        cy.contains('Murphy, Thiel and Morar Plaza')
        cy.contains('16021 NE 36th Way Redmond, WA 98052')

        cy.xpath('//*[@id="__next"]/main/section/div[9]/div[3]/img').should('be.visible')
        cy.contains('Wolff, Douglas and Hagenes Square')
        cy.contains('1500 New Britain Ave West Hartford, CT 06110')

        //LOCATION IMAGE 10
        cy.xpath('//*[@id="__next"]/main/section/div[10]/div[1]/img').should('be.visible')
        cy.contains('Wunsch LLC Center')
        cy.contains('15255 NE 40th Redmond, WA 98052')

        cy.xpath('//*[@id="__next"]/main/section/div[10]/div[2]/img').should('be.visible')
        cy.contains('Schuster Inc Building')
        cy.contains('1100 S Hayes St Arlington, VA 22202')

        cy.xpath('//*[@id="__next"]/main/section/div[10]/div[3]/img').should('be.visible')
        cy.contains('Champlin - Bauch Square')
        cy.contains('2045 Lafayette St Santa Clara, CA 95050')

        //LOCATION IMAGE 11
        cy.xpath('//*[@id="__next"]/main/section/div[11]/div[1]/img').should('be.visible')
        cy.contains('Watsica - Parisian Complex')
        cy.contains('3 Cityplace Dr St. Louis, MO 63141')

        cy.xpath('//*[@id="__next"]/main/section/div[11]/div[2]/img').should('be.visible')
        cy.contains('Hammes - Welch Square')
        cy.contains('1288 Pear Ave Mountain View, CA 94043')

        cy.xpath('//*[@id="__next"]/main/section/div[11]/div[3]/img').should('be.visible')
        cy.contains('Mertz Group Square')
        cy.contains('7633 E 63rd Pl Tulsa, OK 74133')

        //LOCATION IMAGE 12
        cy.xpath('/html/body/div[1]/main/section/div[12]/div[1]/img').should('be.visible')
        cy.contains('Daniel, McDermott and Douglas Square')
        cy.contains('7014 E Camelback Rd Scottsdale, AZ 85251')

        cy.xpath('/html/body/div[1]/main/section/div[12]/div[2]/img').should('be.visible')
        cy.contains('Mayer - Dare Complex')
        cy.contains('1401 I St NW Washington D.C., DC 20005')

        cy.xpath('/html/body/div[1]/main/section/div[12]/div[3]/img').should('be.visible')
        cy.contains('Turner, Schoen and Bogisich Center')
        cy.contains('3401 Nicholasville Rd Lexington, KY 40503')

        //LOCATION IMAGE 13
        cy.xpath('//*[@id="__next"]/main/section/div[13]/div[1]/img').should('be.visible')
        cy.contains('Wiza, Quitzon and Moen Complex')
        cy.contains('555 California St San Francisco, CA 94104')

        cy.xpath('//*[@id="__next"]/main/section/div[13]/div[2]/img').should('be.visible')
        cy.contains('Buckridge LLC Square')
        cy.contains('9255 Towne Centre Dr San Diego, CA 92121')

        cy.xpath('//*[@id="__next"]/main/section/div[13]/div[3]/img').should('be.visible')
        cy.contains('Friesen and Sons Square')
        cy.contains('9025 SW Hillman Ct Wilsonville, OR 97070')

        //LOCATION IMAGE 14
        cy.xpath('//*[@id="__next"]/main/section/div[14]/div[1]/img').should('be.visible')
        cy.contains('Glover, Schaden and Senger Center')
        cy.contains('2211 Elliott Ave Seattle, WA 98121')

        cy.xpath('//*[@id="__next"]/main/section/div[14]/div[2]/img').should('be.visible')
        cy.contains('Spencer and Sons Center')
        cy.contains('1950 N Stemmons Fw Dallas, TX 75207')

        cy.xpath('//*[@id="__next"]/main/section/div[14]/div[3]/img').should('be.visible')
        cy.contains('Stanton - Stoltenberg Square')
        cy.contains('11025 NE 8th St Bellevue, WA 98004')

        //LOCATION IMAGE 15
        cy.xpath('//*[@id="__next"]/main/section/div[15]/div[1]/img').should('be.visible')
        cy.contains('Heidenreich - Hills Building')
        cy.contains('7535 Dadeland Mall Miami, FL 33156')

        cy.xpath('//*[@id="__next"]/main/section/div[15]/div[2]/img').should('be.visible')
        cy.contains('Kreiger - Langworth Square')
        cy.contains('4000 Great Plains Dr Fargo, ND 58104')

        cy.xpath('//*[@id="__next"]/main/section/div[15]/div[3]/img').should('be.visible')
        cy.contains('Legros Group Square')
        cy.contains('6910 Fayetteville Rd Durham, NC 27713')

        //LOCATION IMAGE 16
        cy.xpath('//*[@id="__next"]/main/section/div[16]/div[1]/img').should('be.visible')
        cy.contains('Mills Inc Building')
        cy.contains('677 5th Ave New York, NY 10022')

        cy.xpath('//*[@id="__next"]/main/section/div[16]/div[2]/img').should('be.visible')
        cy.contains('Stiedemann and Sons Building')
        cy.contains('1414 NW Northrup St Portland, OR 97209')

        cy.xpath('//*[@id="__next"]/main/section/div[16]/div[3]/img').should('be.visible')
        cy.contains('Feil, McClure and Daugherty Building')
        cy.contains('700 Bellevue Way Bellevue, WA 98004')


    })




})
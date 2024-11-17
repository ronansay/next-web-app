/// <reference types = "cypress" />


describe('Locations APIs BY ID', () => {
    
    context('GET All Location By ID', () => {
  
        //data = JSON.parse(data);

                it('GET Locations By ID', () => {
                const data = require('../../fixtures/locations.json')
                cy.wrap(data.locations).each((data,k) => {
                for (k = 0; k < 1; k++) {
                cy.request({
                    method: 'GET',
                    url: Cypress.env("URL")+`/locations/${data.id}.json`
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.pageProps.location.id).to.not.be.null
                    expect(response.body.pageProps.location.name).to.be.eq(data.name);
                    Cypress._.each(response.body.pageProps.location.rooms, (rooms) => {
                        expect(rooms).to.have.all.keys(
                            'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
                        expect(rooms.description).to.not.be.null
                        expect(rooms.monthlyRate).to.not.be.null
                        expect(rooms.seats).to.not.be.null
                        expect(rooms.privateFacilities).to.not.be.null
                        expect(rooms.phoneIncluded).to.not.be.null
                        expect(rooms.windows).to.not.be.null
                        expect(rooms.corner).to.not.be.null

                    });
                   
                    
                    

                })
            };

        
            })
        });

    });

});


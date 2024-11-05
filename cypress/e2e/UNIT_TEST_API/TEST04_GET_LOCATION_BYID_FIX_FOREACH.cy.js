/// <reference types = "cypress" />


describe('Get Locations By ID API', () => {
    context('GET Locations By ID', () => {
        const data = require('../../fixtures/locations.json')
        //data = JSON.parse(data);

        Array.from(data.locations).forEach((dataobj) => {

            it(dataobj.name, () => {
                cy.api({
                    method: 'GET',
                    url: Cypress.env("URL")+`/locations/${dataobj.id}.json`
                }).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.pageProps.location.id).to.not.be.null
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
            });

        });
    });
});


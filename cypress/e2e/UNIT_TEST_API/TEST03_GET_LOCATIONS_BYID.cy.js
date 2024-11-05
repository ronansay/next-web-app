/// <reference types="cypress" />

describe('NEXT:JS WEB APP LOCATIONS PAGE API', () => {
    context('GET /LOCATION PAGE', () => {
        it('should return All Location  Details by ID', () => {
            const arry = ['mcglynn-kunze-square', 'schoen-rau-and-windler-square', 'cronin-group-plaza',
                'kuhlman-ankunding-and-howe-square', 'gutkowski-inc-building', 'stamm-heidenreich-complex',
                'goyette-luettgen-plaza', 'sipes-group-complex', 'reichert-luettgen-complex',
                'bosco-moen-and-hand-center', 'turcotte-carroll-and-hermiston-square', 'ziemann-and-sons-plaza',
                'lehner-kuhic-complex', 'thiel-kreiger-and-gleichner-square', 'waelchi-inc-complex',
                'bashirian-williamson-center', 'weissnat-smitham-and-waters-square', 'gorczany-abbott-complex',
                'kilback-lueilwitz-and-kiehn-complex', 'carter-gaylord-building', 'morissette-wunsch-and-boyle-square',
                'bahringer-inc-complex', 'schimmel-steuber-complex', 'langosh-and-sons-complex', 'schinner-and-sons-building',
                'murphy-thiel-and-morar-plaza', 'wolff-douglas-and-hagenes-square',
                'wunsch-llc-center', 'schuster-inc-building', 'champlin-bauch-square',
                'watsica-parisian-complex', 'hammes-welch-square', 'mertz-group-square',
                'daniel-mcdermott-and-douglas-square', 'mayer-dare-complex', 'turner-schoen-and-bogisich-center',
                'wiza-quitzon-and-moen-complex', 'buckridge-llc-square', 'friesen-and-sons-square',
                'glover-schaden-and-senger-center', 'spencer-and-sons-center', 'stanton-stoltenberg-square',
                'heidenreich-hills-building', 'kreiger-langworth-square', 'legros-group-square',
                'mills-inc-building', 'stiedemann-and-sons-building', 'feil-mcclure-and-daugherty-building'];
            cy.wrap(arry).each((arry, k) => {
                for (k = 0; k < 1; k++) {
                    cy.request({
                        method: 'GET',
                        url: Cypress.env("URL")+`/locations/${arry}.json`,


                    })
                        .should((response) => {
                            expect(response.status).to.eq(200)
                            // expect(response.body.pageProps.location.length).to.be.eq(1);
                            expect(response.body.pageProps.location).to.have.property('id')
                            expect(response.body.pageProps.location.id).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('name')
                            expect(response.body.pageProps.location.name).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('longitude')
                            expect(response.body.pageProps.location.longitude).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('latitude')
                            expect(response.body.pageProps.location.latitude).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('mailingAddress')
                            expect(response.body.pageProps.location.mailingAddress).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('rooms')
                            expect(response.body.pageProps.location.rooms).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('parkingIncluded')
                            expect(response.body.pageProps.location.parkingIncluded).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('conferenceRoomsIncluded')
                            expect(response.body.pageProps.location.conferenceRoomsIncluded).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('receptionIncluded')
                            expect(response.body.pageProps.location.receptionIncluded).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('publicAccess')
                            expect(response.body.pageProps.location.publicAccess).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('lastRenovationDate')
                            expect(response.body.pageProps.location.lastRenovationDate).to.not.be.null

                            expect(response.body.pageProps.location).to.have.property('image')
                            expect(response.body.pageProps.location.image).to.not.be.null
                            
                            

                        })
                }



            });

        });
        it('should return All Location Rooms Details by ID', () => {
            const arry = ['mcglynn-kunze-square', 'schoen-rau-and-windler-square', 'cronin-group-plaza',
                'kuhlman-ankunding-and-howe-square', 'gutkowski-inc-building', 'stamm-heidenreich-complex',
                'goyette-luettgen-plaza', 'sipes-group-complex', 'reichert-luettgen-complex',
                'bosco-moen-and-hand-center', 'turcotte-carroll-and-hermiston-square', 'ziemann-and-sons-plaza',
                'lehner-kuhic-complex', 'thiel-kreiger-and-gleichner-square', 'waelchi-inc-complex',
                'bashirian-williamson-center', 'weissnat-smitham-and-waters-square', 'gorczany-abbott-complex',
                'kilback-lueilwitz-and-kiehn-complex', 'carter-gaylord-building', 'morissette-wunsch-and-boyle-square',
                'bahringer-inc-complex', 'schimmel-steuber-complex', 'langosh-and-sons-complex', 'schinner-and-sons-building',
                'murphy-thiel-and-morar-plaza', 'wolff-douglas-and-hagenes-square',
                'wunsch-llc-center', 'schuster-inc-building', 'champlin-bauch-square',
                'watsica-parisian-complex', 'hammes-welch-square', 'mertz-group-square',
                'daniel-mcdermott-and-douglas-square', 'mayer-dare-complex', 'turner-schoen-and-bogisich-center',
                'wiza-quitzon-and-moen-complex', 'buckridge-llc-square', 'friesen-and-sons-square',
                'glover-schaden-and-senger-center', 'spencer-and-sons-center', 'stanton-stoltenberg-square',
                'heidenreich-hills-building', 'kreiger-langworth-square', 'legros-group-square',
                'mills-inc-building', 'stiedemann-and-sons-building', 'feil-mcclure-and-daugherty-building'];
            cy.wrap(arry).each((arry, k) => {
                for (k = 0; k < 1; k++) {
                    cy.request({
                        method: 'GET',
                        url: Cypress.env("URL")+`/locations/${arry}.json`,


                    })
                        .should((response) => {
                            expect(response.status).to.eq(200)
                            // expect(response.body.pageProps.location.length).to.be.eq(1);
                            
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
                }



            });

        });

    });
});
 
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
                    cy.readFile('.next/BUILD_ID').then(text => {
                        const build_id = text;
                        cy.log(build_id);
                        cy.request({
                          method: 'GET',
                          url: Cypress.env("URL3")+`/${build_id}/locations/${arry}.json`
                
                        });
                
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
        it('should return All Location Room Details by ID', () => {
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
                    cy.readFile('.next/BUILD_ID').then(text => {
                        const build_id = text;
                        cy.log(build_id);
                        cy.request({
                          method: 'GET',
                          url: Cypress.env("URL3")+`/${build_id}/locations/${arry}.json`
                
                        });
                
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
            /*
//LOCATION 0
expect(response.body.pageProps.locationGroups[0].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[0].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null;
 
});
expect(response.body.pageProps.locationGroups[0].locations[0].rooms.length).to.be.eq(5);
Cypress._.each(response.body.pageProps.locationGroups[0].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[0].locations[1].rooms.length).to.be.eq(8);
Cypress._.each(response.body.pageProps.locationGroups[0].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
expect(response.body.pageProps.locationGroups[0].locations[2].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[0].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
 
it('should return Location 1 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 1
expect(response.body.pageProps.locationGroups[1].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[1].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[1].locations[0].rooms.length).to.be.eq(6);
Cypress._.each(response.body.pageProps.locationGroups[1].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[1].locations[1].rooms.length).to.be.eq(8);
Cypress._.each(response.body.pageProps.locationGroups[1].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[1].locations[2].rooms.length).to.be.eq(5);
Cypress._.each(response.body.pageProps.locationGroups[1].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 2 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 2
expect(response.body.pageProps.locationGroups[2].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[2].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[2].locations[0].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[2].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[2].locations[1].rooms.length).to.be.eq(8);
Cypress._.each(response.body.pageProps.locationGroups[2].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[2].locations[2].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[2].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 3 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 3
expect(response.body.pageProps.locationGroups[3].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[3].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[3].locations[0].rooms.length).to.be.eq(10);
Cypress._.each(response.body.pageProps.locationGroups[3].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[3].locations[1].rooms.length).to.be.eq(5);
Cypress._.each(response.body.pageProps.locationGroups[3].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[3].locations[2].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[3].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 4 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 4
expect(response.body.pageProps.locationGroups[4].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[4].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[4].locations[0].rooms.length).to.be.eq(5);
Cypress._.each(response.body.pageProps.locationGroups[4].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[4].locations[1].rooms.length).to.be.eq(6);
Cypress._.each(response.body.pageProps.locationGroups[4].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[4].locations[2].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[4].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 5 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 5
expect(response.body.pageProps.locationGroups[5].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[5].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[5].locations[0].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[5].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[5].locations[1].rooms.length).to.be.eq(9);
Cypress._.each(response.body.pageProps.locationGroups[5].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[5].locations[2].rooms.length).to.be.eq(6);
Cypress._.each(response.body.pageProps.locationGroups[5].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 6 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 6
expect(response.body.pageProps.locationGroups[6].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[6].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[6].locations[0].rooms.length).to.be.eq(4);
Cypress._.each(response.body.pageProps.locationGroups[6].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[6].locations[1].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[6].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[6].locations[2].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[6].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 7 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 7
expect(response.body.pageProps.locationGroups[7].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[7].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[7].locations[0].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[7].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[7].locations[1].rooms.length).to.be.eq(10);
Cypress._.each(response.body.pageProps.locationGroups[7].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[7].locations[2].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[7].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 8 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 8
expect(response.body.pageProps.locationGroups[8].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[8].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[8].locations[0].rooms.length).to.be.eq(9);
Cypress._.each(response.body.pageProps.locationGroups[8].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[8].locations[1].rooms.length).to.be.eq(9);
Cypress._.each(response.body.pageProps.locationGroups[8].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[8].locations[2].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[8].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 9 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 9
expect(response.body.pageProps.locationGroups[9].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[9].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[9].locations[0].rooms.length).to.be.eq(6);
Cypress._.each(response.body.pageProps.locationGroups[9].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[9].locations[1].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[9].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[9].locations[2].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[9].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 10 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 10
expect(response.body.pageProps.locationGroups[10].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[10].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[10].locations[0].rooms.length).to.be.eq(4);
Cypress._.each(response.body.pageProps.locationGroups[10].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[10].locations[1].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[10].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[10].locations[2].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[10].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 11 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 11
expect(response.body.pageProps.locationGroups[11].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[11].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[11].locations[0].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[11].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[11].locations[1].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[11].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[11].locations[2].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[11].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 12 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 12
expect(response.body.pageProps.locationGroups[12].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[12].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[12].locations[0].rooms.length).to.be.eq(8);
Cypress._.each(response.body.pageProps.locationGroups[12].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[12].locations[1].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[12].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[12].locations[2].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[12].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 13 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 13
expect(response.body.pageProps.locationGroups[13].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[13].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[13].locations[0].rooms.length).to.be.eq(5);
Cypress._.each(response.body.pageProps.locationGroups[13].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[13].locations[1].rooms.length).to.be.eq(7);
Cypress._.each(response.body.pageProps.locationGroups[13].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[13].locations[2].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[13].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 14 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 14
expect(response.body.pageProps.locationGroups[14].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[14].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[14].locations[0].rooms.length).to.be.eq(9);
Cypress._.each(response.body.pageProps.locationGroups[14].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[14].locations[1].rooms.length).to.be.eq(2);
Cypress._.each(response.body.pageProps.locationGroups[14].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[14].locations[2].rooms.length).to.be.eq(5);
Cypress._.each(response.body.pageProps.locationGroups[14].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
it('should return Location 15 Details for Locations Page', () => {
cy.request({
method: 'GET',
url: 'http://localhost:3000/_next/data/development/locations.json'
})
.should((response) => {
expect(response.status).to.eq(200)
 
expect(response.body.pageProps.locationGroups.length).to.be.eq(16);
 
//LOCATION 15
expect(response.body.pageProps.locationGroups[15].locations.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[15].locations, (locations) => {
expect(locations).to.have.all.keys(
'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
)
expect(locations.id).to.not.be.null
});
 
expect(response.body.pageProps.locationGroups[15].locations[0].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[15].locations[0].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
});
expect(response.body.pageProps.locationGroups[15].locations[1].rooms.length).to.be.eq(3);
Cypress._.each(response.body.pageProps.locationGroups[15].locations[1].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
expect(response.body.pageProps.locationGroups[15].locations[2].rooms.length).to.be.eq(8);
Cypress._.each(response.body.pageProps.locationGroups[15].locations[2].rooms, (rooms) => {
expect(rooms).to.have.all.keys(
'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
expect(rooms.description).to.not.be.null
 
 
});
 
 
});
});
 
 
 
 
});
}); */
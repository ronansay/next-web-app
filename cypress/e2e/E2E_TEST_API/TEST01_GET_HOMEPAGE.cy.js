/// <reference types="cypress" />

describe('NEXT:JS WEB APP HOME PAGE API', () => {
  context('GET /HOME PAGE', () => {
    it('should return Location Count and Room Count of All Items on Home Page', () => {
      cy.readFile('.next/BUILD_ID').then(text => {
        const build_id = text;
       
        cy.log(build_id);
        cy.api({
          method: 'GET',
          url: Cypress.env("URL3")+`/${build_id}/index.json`

        });

      })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.pageProps.locationGroups.length).to.be.eq(2);

          expect(response.body.pageProps.locationGroups[0].locations.length).to.be.eq(2);
          expect(response.body.pageProps.locationGroups[0].locations[0].rooms.length).to.be.eq(7);
          expect(response.body.pageProps.locationGroups[0].locations[1].rooms.length).to.be.eq(8);

          expect(response.body.pageProps.locationGroups[1].locations.length).to.be.eq(2);
          expect(response.body.pageProps.locationGroups[1].locations[0].rooms.length).to.be.eq(2);
          expect(response.body.pageProps.locationGroups[1].locations[1].rooms.length).to.be.eq(7);


        });
    });
    it('should return All Location and Room Parameter on Home Page', () => {
      cy.readFile('.next/BUILD_ID').then(text => {
        const build_id = text;
        
        cy.log(build_id);
        cy.api({
          method: 'GET',
          url: Cypress.env("URL3")+`/${build_id}/index.json`

        });

      })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.pageProps.locationGroups.length).to.be.eq(2);
          expect(response.body.pageProps.locationGroups[0].locations.length).to.be.eq(2);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations, (locations) => {
            expect(locations).to.have.all.keys(
              'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
              'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
            )
            expect(locations.id).to.not.be.null;


          });
          expect(response.body.pageProps.locationGroups[0].locations[0].rooms.length).to.be.eq(7);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations[0].rooms, (rooms) => {
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
          expect(response.body.pageProps.locationGroups[0].locations[1].rooms.length).to.be.eq(8);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations[1].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null;
            expect(rooms.monthlyRate).to.not.be.null;
            expect(rooms.seats).to.not.be.null;
            expect(rooms.privateFacilities).to.not.be.null;
            expect(rooms.phoneIncluded).to.not.be.null;
            expect(rooms.windows).to.not.be.null;
            expect(rooms.corner).to.not.be.null;

          });


          expect(response.body.pageProps.locationGroups[1].locations.length).to.be.eq(2);
          Cypress._.each(response.body.pageProps.locationGroups[1].locations, (locations) => {
            expect(locations).to.have.all.keys(
              'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
              'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
            )
            expect(locations.id).to.not.be.null
          });

          expect(response.body.pageProps.locationGroups[1].locations[0].rooms.length).to.be.eq(2);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations[0].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null;
            expect(rooms.monthlyRate).to.not.be.null;
            expect(rooms.seats).to.not.be.null;
            expect(rooms.privateFacilities).to.not.be.null;
            expect(rooms.phoneIncluded).to.not.be.null;
            expect(rooms.windows).to.not.be.null;
            expect(rooms.corner).to.not.be.null;


          });
          expect(response.body.pageProps.locationGroups[1].locations[1].rooms.length).to.be.eq(7);
          Cypress._.each(response.body.pageProps.locationGroups[1].locations[1].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null;
            expect(rooms.monthlyRate).to.not.be.null;
            expect(rooms.seats).to.not.be.null;
            expect(rooms.privateFacilities).to.not.be.null;
            expect(rooms.phoneIncluded).to.not.be.null;
            expect(rooms.windows).to.not.be.null;
            expect(rooms.corner).to.not.be.null;

          });

        });
    });
    it('Validate the Response Body for Home Page', () => {
      cy.readFile('.next/BUILD_ID').then(text => {
        const build_id = text;
        cy.log(build_id);
       
        cy.request({
          method: 'GET',
          url: Cypress.env("URL3")+`/${build_id}/index.json`

        });

      })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.pageProps.locationGroups.length).to.be.eq(2);

          expect(response.body.pageProps.locationGroups[0].locations.length).to.be.eq(2);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations, (locations) => {
            expect(locations).to.have.all.keys(
              'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
              'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
            )
            expect(locations.id).to.not.be.null;

          });
          expect(response.body.pageProps.locationGroups[0].locations[0].rooms.length).to.be.eq(7);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations[0].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null
            expect(response.body.pageProps.locationGroups[0].locations[0].id).to.be.eq('bashirian-williamson-center');
            expect(response.body.pageProps.locationGroups[0].locations[0].name).to.be.eq('Bashirian - Williamson Center');
            expect(response.body.pageProps.locationGroups[0].locations[0].longitude).to.be.eq(30.40016);
            expect(response.body.pageProps.locationGroups[0].locations[0].latitude).to.be.eq(-97.726486);
            expect(response.body.pageProps.locationGroups[0].locations[0].mailingAddress).to.be.eq('3309 Esperanza Xing Austin, TX 78758');
            expect(response.body.pageProps.locationGroups[0].locations[0].parkingIncluded).to.be.eq(false);
            expect(response.body.pageProps.locationGroups[0].locations[0].conferenceRoomsIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[0].locations[0].receptionIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[0].locations[0].publicAccess).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[0].locations[0].lastRenovationDate).to.be.eq('2018-08-29T00:00:00.000Z');
            expect(response.body.pageProps.locationGroups[0].locations[0].image).to.be.eq('e2e10c64-be63-47af-942b-6da5a43438d1.png');
          });
          expect(response.body.pageProps.locationGroups[0].locations[1].rooms.length).to.be.eq(8);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations[1].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null
            expect(response.body.pageProps.locationGroups[0].locations[1].id).to.be.eq('feil-mcclure-and-daugherty-building');
            expect(response.body.pageProps.locationGroups[0].locations[1].name).to.be.eq('Feil, McClure and Daugherty Building');
            expect(response.body.pageProps.locationGroups[0].locations[1].longitude).to.be.eq(47.616989);
            expect(response.body.pageProps.locationGroups[0].locations[1].latitude).to.be.eq(-122.201195);
            expect(response.body.pageProps.locationGroups[0].locations[1].mailingAddress).to.be.eq('700 Bellevue Way Bellevue, WA 98004');
            expect(response.body.pageProps.locationGroups[0].locations[1].parkingIncluded).to.be.eq(false);
            expect(response.body.pageProps.locationGroups[0].locations[1].conferenceRoomsIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[0].locations[1].receptionIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[0].locations[1].publicAccess).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[0].locations[1].lastRenovationDate).to.be.eq('2018-01-03T00:00:00.000Z');
            expect(response.body.pageProps.locationGroups[0].locations[1].image).to.be.eq('ff959e83-078b-48eb-aaa7-6d3aa14cb79c.png');

          });



          expect(response.body.pageProps.locationGroups[1].locations.length).to.be.eq(2);
          Cypress._.each(response.body.pageProps.locationGroups[1].locations, (locations) => {
            expect(locations).to.have.all.keys(
              'id', 'name', 'longitude', 'latitude', 'mailingAddress', 'rooms', 'parkingIncluded',
              'conferenceRoomsIncluded', 'receptionIncluded', 'publicAccess', 'lastRenovationDate', 'image'
            )
            expect(locations.id).to.not.be.null
          });

          expect(response.body.pageProps.locationGroups[1].locations[0].rooms.length).to.be.eq(2);
          Cypress._.each(response.body.pageProps.locationGroups[0].locations[0].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null
            expect(response.body.pageProps.locationGroups[1].locations[0].id).to.be.eq('daniel-mcdermott-and-douglas-square');
            expect(response.body.pageProps.locationGroups[1].locations[0].name).to.be.eq('Daniel, McDermott and Douglas Square');
            expect(response.body.pageProps.locationGroups[1].locations[0].longitude).to.be.eq(33.503067);
            expect(response.body.pageProps.locationGroups[1].locations[0].latitude).to.be.eq(-111.929405);
            expect(response.body.pageProps.locationGroups[1].locations[0].mailingAddress).to.be.eq('7014 E Camelback Rd Scottsdale, AZ 85251');
            expect(response.body.pageProps.locationGroups[1].locations[0].parkingIncluded).to.be.eq(false);
            expect(response.body.pageProps.locationGroups[1].locations[0].conferenceRoomsIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[1].locations[0].receptionIncluded).to.be.eq(false);
            expect(response.body.pageProps.locationGroups[1].locations[0].publicAccess).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[1].locations[0].lastRenovationDate).to.be.eq('2017-01-18T00:00:00.000Z');
            expect(response.body.pageProps.locationGroups[1].locations[0].image).to.be.eq('1132f6ad-a8c9-45d9-9859-c48b5ae51253.png');

          });
          expect(response.body.pageProps.locationGroups[1].locations[1].rooms.length).to.be.eq(7);
          Cypress._.each(response.body.pageProps.locationGroups[1].locations[1].rooms, (rooms) => {
            expect(rooms).to.have.all.keys(
              'description', 'monthlyRate', 'seats', 'privateFacilities', 'phoneIncluded', 'windows', 'corner')
            expect(rooms.description).to.not.be.null
            expect(response.body.pageProps.locationGroups[1].locations[1].id).to.be.eq('turner-schoen-and-bogisich-center');
            expect(response.body.pageProps.locationGroups[1].locations[1].name).to.be.eq('Turner, Schoen and Bogisich Center');
            expect(response.body.pageProps.locationGroups[1].locations[1].longitude).to.be.eq(37.989769);
            expect(response.body.pageProps.locationGroups[1].locations[1].latitude).to.be.eq(-84.527771);
            expect(response.body.pageProps.locationGroups[1].locations[1].mailingAddress).to.be.eq('3401 Nicholasville Rd Lexington, KY 40503');
            expect(response.body.pageProps.locationGroups[1].locations[1].parkingIncluded).to.be.eq(false);
            expect(response.body.pageProps.locationGroups[1].locations[1].conferenceRoomsIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[1].locations[1].receptionIncluded).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[1].locations[1].publicAccess).to.be.eq(true);
            expect(response.body.pageProps.locationGroups[1].locations[1].lastRenovationDate).to.be.eq('2016-07-12T00:00:00.000Z');
            expect(response.body.pageProps.locationGroups[1].locations[1].image).to.be.eq('72d63689-cb05-4749-914d-5a7b0884de5c.png');

          });

        });
    });

  });

});
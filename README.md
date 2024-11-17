### Cypress-E2E TEST Automation E2E  Contoso Spaces web application using Next.js
Cypress is a next generation front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.Build a Contoso Spaces web application using Next.js Build Test And Release

### How to Start
1. Clone the project
2. npm i - Install all the dependencies
3. There are a lot dependencies that are not updated frequently in parallel with cypress. So while installing 4. if you are seeing conflicts use npm i --force.
5. Run npx cypress run to execute the tests in CLI
6. To create HTML reports execute first npm run test:cli and then npm run create:html:report
7. Run npm test to execute the tests and generate allure-reporters
8. Run npm report to generate allure-reporters

### BUILD NEXT JS APP
1.npm run build
2.npm run start
### UNIT TEST NEXT JS APP Using Cypress
1.npm run dev
2.Run Cypress Unit test:
 npx cypress run --spec cypress/e2e/UNIT_TEST_API
 npx cypress run --spec cypress/e2e/UNIT_TEST_UI
3. Added collection file for unit tests- can be executed from folder postman:
 node postmanCollection.js
### DEPLOY NEXT JS APP 

### E2E NEXT JS APP Using Cypress
1.npm run build
2.npm run start
3.Run Cypress E2E test-npx cypress run
 npx cypress run --spec cypress/e2e/E2E_TEST_API
 npx cypress run --spec cypress/e2e/E2E_TEST_UI


### TEST IN Cypress
### E2E_TEST_API/ UNIT_TEST_API
1. TEST01_GET_HOMEPAGE
2. TEST02_GET_ALL_LOCATIONS
3. TEST03_GET_LOCATIONS_BYID
4. TEST04_GET_LOCATION_BYID_FOREACH
5. TEST05_GET_LOCATION_BYID_EACH

### E2E_TEST_UI/UNIT_TEST_UI
1. TEST01_VERIFYLOCATIONS
2. TEST02_HOMENAVIGATION

### Peformance Test Using k6
1. performanceTest_K6



import http from 'k6/http'
import { check } from 'k6'

export const options = {
    vus: 30,
    iterations: 30
}
const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
/*
const params = {
    headers: {
        'Authorization': 'Bearer 96096fd0358d'

    }
}
let headers_api = {
    'Authorization': 'Bearer 535534'
}
*/
const url ="http://localhost:3000/_next/data/development/index.json"


export default function () {

    const response = http.get(url,params)
    //let jsonData = response.json();
    //const data = jsonData.pageProps.locationGroups;
    //const count = data.length;
    check(response, {
        'status code validation': (response) => response.status === 200,
        'Response Id locations1': response.body.includes('locationGroups'),
        'Response Id locations1': response.body.includes('bashirian-williamson-center'),
        'Response Id locations2': response.body.includes('feil-mcclure-and-daugherty-building'),
        'Response Id locations3': response.body.includes('daniel-mcdermott-and-douglas-square'),
        'Response Id locations4': response.body.includes('turner-schoen-and-bogisich-center'),
        //'Response  Validation': (response) => response.body.data.length == 2,
        
    })
}

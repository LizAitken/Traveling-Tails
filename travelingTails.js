"use strict"
import 'tTails-page2.js';

let hotelInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hotels-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let parksInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=parks-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let storeInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=stores-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let vetInfo= `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=vets-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

let firstButton =document.querySelector('#first-page-button');
let locationInput = document.querySelector('#search-bar');


function visitPage(){
    window.location='tTails-page2.html';
}

firstButton.addEventListener('click', function(){
    visitPage();
    markHotels(response);
});







// function get(url) {
//     return fetch(url)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(function(data) {
//             return data;
//         })
//         .catch(function(error) {
//             return error;
//         });
// }







// function updateSearch() {
//     get()
//     .then(function(response){
//         addLocationName(response);
// }














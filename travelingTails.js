"use strict"

const firstButton =document.querySelector('#first-page-button');
const hotelsButton =document.querySelector('#hotels-button');
const parksButton =document.querySelector('#parks-button');
const vetsButton =document.querySelector('#vets-button');
const storesButton =document.querySelector('#stores-button');

const secondPage = document.querySelector('#second-page');
const firstPage = document.querySelector('#inner-body-wrapper');
// const locationInput = document.querySelector('#search-bar');
// const locationValue = locationInput.value;
// let locationValue;

firstButton.addEventListener('click', function(e){
    e.preventDefault;
    setHotelLocations();
    // toggle(secondPage);
    if (secondPage.style.display === 'none') {
        secondPage.style.display = 'block';
        firstPage.style.display = 'none';
    } else {
        secondPage.style.display = 'none';
        firstPage.style.display = 'block';
    }    
});


parksButton.addEventListener('click', function(e) {
    e.preventDefault;
    setParkLocations();
});

hotelsButton.addEventListener('click', function(e) {
    e.preventDefault;
    setHotelLocations();
});

vetsButton.addEventListener('click', function(e) {
    e.preventDefault;
    setVetLocations();
});

storesButton.addEventListener('click', function(e) {
    e.preventDefault;
    setStoreLocations();
});


function get(url) {
    return fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
           return data;
        })
        .catch(function(error) {
            return error;
        });
};

function setHotelLocations() {
    // Grabbing the user input
    const locationInput = document.querySelector('#search-bar').value;

    // Grabbing the API library for hotels and inputing the user input 
    let hotelInfo = `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

    get(hotelInfo)
    .then(function(response) {
        const results = response.results;
        let latArray = [];
        let longArray = [];
        results.forEach((result) => {
            // console.log("result is", result);
            const lat = Number(result.geometry.location.lat);
            const long = Number(result.geometry.location.lng);
            latArray.push(lat);
            longArray.push(long);
        });
    return [latArray, longArray];
    })

    .then(function(coordArray) {
        const latArray = coordArray[0];
        const longArray = coordArray[1];
        markPlaces(latArray,longArray, latArray,longArray);
        });

};

function setParkLocations() {
    // Grabbing the user input
    const locationInput = document.querySelector('#search-bar').value;

    // Grabbing the API library for parks and inputing the user input
    let parksInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

    get(parksInfo)
    .then(function(response) {
        const results = response.results;
        let latArray = [];
        let longArray = [];
        results.forEach((result) => {
            // console.log("result is", result);
            const lat = Number(result.geometry.location.lat);
            const long = Number(result.geometry.location.lng);
            latArray.push(lat);
            longArray.push(long);
        });
    return [latArray, longArray];
    })

    .then(function(coordArray) {
        const latArray = coordArray[0];
        const longArray = coordArray[1];
        markPlaces(latArray,longArray, latArray,longArray);
        });

};


function setVetLocations() {
    // Grabbing the user input
    const locationInput = document.querySelector('#search-bar').value;

    // Grabbing the API library for parks and inputing the user input
    let vetsInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=vets-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

    get(vetsInfo)
    .then(function(response) {
        const results = response.results;
        let latArray = [];
        let longArray = [];
        results.forEach((result) => {
            // console.log("result is", result);
            const lat = Number(result.geometry.location.lat);
            const long = Number(result.geometry.location.lng);
            latArray.push(lat);
            longArray.push(long);
        });
    return [latArray, longArray];
    })

    .then(function(coordArray) {
        const latArray = coordArray[0];
        const longArray = coordArray[1];
        markPlaces(latArray,longArray, latArray,longArray);
        });

};


function setStoreLocations() {
    // Grabbing the user input
    const locationInput = document.querySelector('#search-bar').value;

    // Grabbing the API library for parks and inputing the user input
    let storesInfo= `https://my-little-cors-proxy.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=stores-in-${locationInput}&key=AIzaSyBdsm65ywFiu-1TK-v03CKyD03g3T4i0AA&type=other_pet_services`;

    get(storesInfo)
    .then(function(response) {
        const results = response.results;
        let latArray = [];
        let longArray = [];
        results.forEach((result) => {
            // console.log("result is", result);
            const lat = Number(result.geometry.location.lat);
            const long = Number(result.geometry.location.lng);
            latArray.push(lat);
            longArray.push(long);
        });
    return [latArray, longArray];
    })

    .then(function(coordArray) {
        const latArray = coordArray[0];
        const longArray = coordArray[1];
        markPlaces(latArray,longArray, latArray,longArray);
        });

};
//Making the map, setting it to the first coordinates in the location inputed Array
function markPlaces(latitude, longitude, inDesLat, inDesLong) {
    const options = {
        zoom: 10,
        //took out [0]s 
        center: {lat:parseFloat(inDesLat[0]),lng:parseFloat(inDesLong[0])},
        }
    const map = new google.maps.Map(document.getElementById('map'), options);
//Places a marker on each location
    for (let i = 0; i <= latitude.length; i++) {
        new google.maps.Marker({
            position:{lat: parseFloat(latitude[i]), lng: parseFloat(longitude[i])},
            map: map
        });
    }
}

 

























const positionLatitude = 5;
const positionLongitude = 7; 
const destinationLatitude = 10;
const destinationLongitude = 15;
const distance = ((positionLatitude - destinationLatitude) ** 2 + (positionLongitude - destinationLongitude) ** 2) ** (1/2)
console.log(`Дистанция ${distance}`)
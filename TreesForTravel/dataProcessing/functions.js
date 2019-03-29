exports.processCityInput = (city) => {
  const arr = city.trim().toLowerCase().split('');
  const newCity = arr.map((val, i, col) => col[i - 1] === ' ' || i === 0 ? val.toUpperCase() : val);
  return newCity.join('')
}

const calculateDistanceInKm = (lat1, lon1, lat2, lon2) => {
 var R = 6371; // Radius of the earth in km
 var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
 var dLon = (lon2 - lon1) * Math.PI / 180;
 var a =
     0.5 - Math.cos(dLat)/2 +
     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
     (1 - Math.cos(dLon))/2;

 return R * 2 * Math.asin(Math.sqrt(a));
}

exports.formatNumbers = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

exports.analyseFlight = (origin, destination) => {
  const distance = Math.trunc(calculateDistanceInKm(origin.lat, origin.lng, destination.lat, destination.lng));
  const carbonFootprint = distance*158 //in grams: https://www.carbonindependent.org/sources_aviation.html
  const treesNeeded = (carbonFootprint/900000).toFixed(1) //assuming one tree absorbs 1 ton in its lifetime;

  const newFlight = {
    origin: origin.city + ', ' + origin.country,
    destination: destination.city + ', ' + destination.country,
    distance: distance,
    carbonFootprint: carbonFootprint,
    treesToOffset: new Array(treesNeeded*10).fill(0)
  }
  return newFlight
}

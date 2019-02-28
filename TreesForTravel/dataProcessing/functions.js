import Cities from '../data/cities.json';

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

exports.analyseFlight = (origin, destination) => {

  const originData = Cities.find(data => data.city === origin);
  const destinationData = Cities.find(data => data.city === destination);
  const distance = Math.trunc(calculateDistanceInKm(originData.lat, originData.lng, destinationData.lat, destinationData.lng));
  const carbonFootprint = distance*115 //in grams
  const treesNeeded = Math.round(carbonFootprint/900000)*10 //in grams, assuming one tree absorbs 1 ton in its lifetime; currently one tree = 1/10th of a tree because otherwise they're too small

  const newFlight = {
    origin: origin,
    destination: destination,
    distance: distance,
    carbonFootprint: carbonFootprint,
    treesToOffset: new Array(treesNeeded).fill(0)
  }
  return newFlight
}

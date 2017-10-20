import Stations from './stations'; 
import Fares from './fares'; 
/**
 * Tube Holborn to Earl's Court
 * 328 bus from Earl's Court to Chelsea
 * Tube Earl's court to Hammersmith
 */

let zone = new Stations('Holborn'); 

let fares = new Fares(); 

fares.barrierEntry(); 

console.log(fares.currentFare); 


console.log(zone.stationZoneByName); 


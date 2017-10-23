import Stations from './stations'; 
import Fares from './fares'; 
import transportType from './transport_types'; 
/**
 * Tube Holborn to Earl's Court
 * 328 bus from Earl's Court to Chelsea
 * Tube Earl's court to Hammersmith
 */






let fares = new Fares(); 


const BUS = new transportType('bus').transportType; 
const TUBE = new transportType('tube').transportType; 



console.log(BUS); 


fares.barrierEntry(new Stations('Holborn'), TUBE); 


// fares.barrierEntry(new Stations("Earl's Court")); 



fares.barrierLeave(new Stations("Earl's Court"), TUBE); 






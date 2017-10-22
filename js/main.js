import Stations from './stations'; 
import Fares from './fares'; 
/**
 * Tube Holborn to Earl's Court
 * 328 bus from Earl's Court to Chelsea
 * Tube Earl's court to Hammersmith
 */



let fares = new Fares(); 



fares.barrierEntry(new Stations('Holborn')); 
fares.barrierEntry(new Stations("Earl's Court")); 



fares.barrierLeave(); 



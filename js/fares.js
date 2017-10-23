import transportType from './transport_types'; 
export default class Fares {
        /**
         * fare is calculated at max fare on entry
         * on exit, max fare is removed, actual fare applied
         * The fare defaults to the minimum price
         * 
         * Anywhere in Zone 1               2.50
         * Any one zone outside zone 1      2.00
         * Any two zones including zone 1   3.00
         * Any two zones excluding zone 1   2.25
         * Any three zones                  3.20
         * Any bus journey                  1.80
         * 
         * Max possible fare is 3.20
         */    


    constructor(credit=30) {
        this.credit = credit; 
        this.maxFare = 3.20; 
        this._currentFare = 0; 
        this.zonesTravelled = [];  
        this.busJourneyFare = 1.80; 

        this.enterBarrier = 'BARRIER_ENTRY'; 
        this.leaveBarrier = 'BARRIER_LEAVE'; 

        this.BUS = new transportType('bus').transportType; 
        this.TUBE = new transportType('tube').transportType; 

        
    }

    

    // Get current fare
    get currentFare() {
        return this._currentFare; 
    }

    // Set current fare
    set currentFare(fare) {
        this._currentFare = fare; 
    }


    barrierEntry(station, method) {   
        // Deduct the max fare
        this.currentFare = (this.credit - this.maxFare); 

        
        // If travel is by bus, automatically deduct the bus fare
        if(method.type === this.BUS.type) {
            this.currentFare = (this.currentFare + this.maxFare) - this.busJourneyFare; 
        } else { // If the journey is by tube, push the zones and do the calculation on barrier exit
            this.zonesTravelled.push(station.station); 

        }
    }


    barrierLeave(station, method) {
        // If travel is by bus, the fare has already been deducted
        if(method.type === this.BUS.type) {
            return; 
        } else {
            this.zonesTravelled.push(station.station); 
            this.calculateFare(); 
        }
        
    }

    calculateFare() {

        
        for(let value of this.zonesTravelled){
            
            console.log(value); 
        }
        return; 

        switch (this.zonesTravelled) {
            case '': 

        }
        // if zone 1: 
        // remove 2.50 from currentFare

        // if zone 1 doesn't exist
        // and array length is 1
        // remove 2.00

        // if zone 1 exists 
        // and array length is 2
        // remove 3.00

        // if zone 1 doesn't exist 
        // and array length is 2
        // remove 2.25

        // if zone 1 exists and 
        // and array length is greater than 2
        // remove 3.20

        // if travelMethod = 'bus'
        // remove 1.80 

    }
    

}
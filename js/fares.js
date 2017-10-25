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

    /**
     * Getter for current fare
     */
    get currentFare() {
        return this._currentFare; 
    }

    /**
     * Setter for current fare
     */
    set currentFare(fare) {
        this._currentFare = fare; 
    }

    /**
     * When the user enters the barrier, record the method of transport and the station including zones
     *
     * @param {object} station 
     * @param {object} method 
     */
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

    /**
     * When the user leaves the barrier, record the departing station and transport type
     * @param {object} station 
     * @param {object} method 
     */
    barrierLeave(station, method) {
        // If travel is by bus, the fare has already been deducted
        if(method.type === this.BUS.type) {
            return; 
        } else { // Record the stations the user travelled through
            this.zonesTravelled.push(station.station); 
            // Calculate the fare based on the stations passed through 
            // this.calculateFare(); 
        }
        
    }

    /**
     * Calculate the fare based off zones travelled through
     */
    calculateFare() {
        // create an array to hold the zones
        let zones = []; 

        // iterate over the zones and extract the zone numbers
        for(let value of this.zonesTravelled){
            zones.push(value.zone); 
        }
        
        // Dedupe the zones
        const uniqueZones = [...new Set(zones)]; 

        // * Anywhere in Zone 1               2.50
        // * Any one zone outside zone 1      2.00
        // * Any two zones including zone 1   3.00
        // * Any two zones excluding zone 1   2.25
        // * Any three zones                  3.20
        // * Any bus journey                  1.80   
        
        console.log(uniqueZones); 
             
        switch (uniqueZones) {
            // Anywhere in Zone 1
            case uniqueZones.includes("1") && !uniqueZones.includes("2") : 
                console.log('Anywhere in Zone 1'); 
                this.currentFare = (this.credit - 2.50); 
                break; 
            
            // Any two zones including zone 1
            case uniqueZones.includes("2") && uniqueZones.includes("1") && !uniqueZones.includes("3"): 
                console.log('Any two zones including zone 1'); 
                this.currentFare = (this.credit - 2.00); 
                break; 

            // Any two zones excluding zone 1
            case uniqueZones.includes("2") && !uniqueZones.includes("1") && uniqueZones.length > 2 : 
                console.log('Any two zones excluding zone 1'); 
                this.currentFare = (this.credit - 3.00); 
                break; 
            // Any three zones
            case uniqueZones.includes("1") && uniqueZones.includes("2") && uniqueZones.includes("3") : 
                console.log('Any three zones'); 
                this.currentFare = (this.credit - 3.20); 
                break; 
            // If no conditions above are met
            default : 
                console.log('No zones detected so deduct the max'); 
                this.currentFare = (this.credit - this.maxFare);  
                break; 

        }

        // TODO: ensure price does not exceed max fare
        
    }
    

}
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
        this.currentFare = 0; 
        this.zonesTravelled = [];  

        const enterBarrier = 'BARRIER_ENTRY'; 
        const leaveBarrier = 'BARRIER_LEAVE'; 
    }

    

    currentFare() {
        return currentFare; 
    }

    recordJourney(part, station="") {
        if(part === this.enterBarrier) {
            console.log(this.enterBarrier); 
            this.zonesTravelled.push(station.stationZoneByName); 
        } else {
            console.log(this.leaveBarrier); 
        }
    }


    barrierEntry(station) {
        // Deduct the max fare
        this.currentFare = (this.credit - this.maxFare); 
        // Record the outward journey
        this.recordJourney(this.enterBarrier, station); 
    }


    barrierLeave() {
        this.recordJourney(this.leaveBarrier); 
        console.log(this.zonesTravelled); 
    }

    calculateFare() {
        if (travelMethod === 'bus') {
            this.currentFare = (this.credit - 1.80); 
            return; 
        }

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
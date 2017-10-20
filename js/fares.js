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
    }



    currentFare() {
        return currentFare; 
    }

    barrierEntry() {
        this.currentFare = (this.credit - this.maxFare); 
    }



    

    
}
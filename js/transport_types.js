export default class TransportTypes {
    constructor(transportType) {

        this._transportType = transportType; 
        
        this.transportTypes = [
            {
                "type": "bus", 
            },
            {
                "type": "tube", 
            },
        ]; 
    }


    set transportType(type) {
        this._transportType = type; 
    }

    get transportType() {
        return this.transportTypes.find(e=> e.type === this._transportType);
    }

    
}
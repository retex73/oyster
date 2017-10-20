export default class Stations {
    constructor(stationName) {

        this.stationName = stationName; 
        
        this.stations = [
            {
                "name": "Holborn", 
                "zone": "1"
            },
            {
                "name": "Earl's Court", 
                "zone": "1,2"
            },
            {
                "name": "Wimbledon", 
                "zone": "3"
            },
            {
                "name": "Hammersmit", 
                "zone": "2"
            },                                    
        ]; 
    }

    get stationZoneByName() {
        return this.stations.find(e=> e.name === this.stationName);
    }

    
}
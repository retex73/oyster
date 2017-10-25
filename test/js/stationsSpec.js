import Stations from '../../js/stations'; 

describe('Stations', function() {
    // The class should initialise
    it('should create a new instance', function(){
        let holborn = new Stations('Holborn');  
        expect(holborn instanceof Stations).toBeTruthy(); 
    });  

    // Returns the station name and zone
    it('should return a station name and zone', function(){
        let holborn = new Stations('Holborn'); 
        expect(holborn.station.name).toBe('Holborn'); 
        expect(holborn.station.zone).toBe('1'); 
    }); 

}); 
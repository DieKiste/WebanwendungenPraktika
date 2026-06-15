class Aufgabenbereich {
    constructor (Id, Titel, Kurzbeschreibung){
        this._Id = Id;
        this._Titel = Titel;
        this.Kurzbeschreibung = Kurzbeschreibung;
    }

    set kurzbeschreibung(param1){
        if(param1.length <= 255){
            this._kurzbeschreibung = param1
        }
        else{
            console.log("kurzbeschreibung zu lang")
        }
        
    }

    get kurzbeschreibung(){
        return this._kurzbeschreibung
    }
}
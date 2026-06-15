class Artefakt {
    constructor(Id, Titel, Kurzbeschreibung, Aufgabenbereich_id, Geplante_Arbeitszeit){
        this._Id = Id;
        this._Titel = Titel; 
        this.Kurzbeschreibung = Kurzbeschreibung;
        this._Aufgabenbereich_id = Aufgabenbereich_id;
        this._Geplante_Arbeitszeit = Geplante_Arbeitszeit; 
    }

    set kurzbeschreibung( param1){
        if(param1.length <= 255) {
            this._kurzbeschreibung = param1
        }
        else {
            console.log("kurzbeschreibung zu lang")
        }
    }

    get kurzbeschreibung(){
        return this._kurzbeschreibung
    }
}
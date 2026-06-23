class Projekt {

    constructor(id, titel, kurzbeschreibung, projektlogo, startdatum)
    {
        this._id = id
        this._titel = titel
        this._kurzbeschreibung = kurzbeschreibung
        this._projektlogo = projektlogo
        this._startdatum = startdatum
    }
    

    set kurzbeschreibung( param1)
    {
        if(param1.length <= 255)
        {
            this._kurzbeschreibung = param1
        }
        else
        {
            console.log("kurzbeschreibung zu lang")
        }
        
    }

    get kurzbeschreibung()
    {
        return this._kurzbeschreibung
    }

    
}
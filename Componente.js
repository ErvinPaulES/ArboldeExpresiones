export default class Componente{
    constructor(valor){
        this._valor = valor;
        this._izquierda = null;
        this._derecha = null;
    }
    get valor(){
        return this._valor;
    }
    get izquierda(){
        return this._izquierda;
    }
    get derecha(){
        return this._derecha;
    }

    set valor(valor){
        this._valor = valor;
    }
    set izquierda(izquirda){
        this._izquierda = izquirda;
    }
    set derecha(derecha){
        this._derecha = derecha;
    }

}
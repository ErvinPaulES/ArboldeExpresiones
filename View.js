export default class View{
    constructor(preorder, posorder){
        this._preorder = preorder;
        this._posorder = posorder;
        this._Componentes = new Array();

    }
    agregarComponente(componente){
        this._Componentes.push(componente);  
    }
    crearArbol(){
        
    }
}
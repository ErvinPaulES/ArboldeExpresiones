export default class View{
    constructor(preorder, posorder){
        this._preorder = preorder;
        this._posorder = posorder;
        this._Componentes = new Array();
        this._Pila = new Array();
        this._PilaNumeros = new Array();

    }
    agregarComponente(componente){
        this._Componentes.push(componente);  
    }
    crearArbol(){
        for(let i=0; i<this._Componentes.length; i++){
            if(this._Componentes[i] === "/" || this._Componentes[i] === "*"){
                this._Componentes[i].izquierda = this._Componentes[i-1];
                this._Componentes[i].derecha = this._Componentes[i+1];
                removeItemFromArr (this._Componentes, this._Componentes[i-1])
                removeItemFromArr (this._Componentes, this._Componentes[i+1])
            }
        }
        for(let i=0; i<this._Componentes.length; i++){
            if(this._Componentes[i] === "+" || this._Componentes[i] === "-"){
                this._Componentes[i].izquierda = this._Componentes[i-1];
                this._Componentes[i].derecha = this._Componentes[i+1];
                removeItemFromArr (this._Componentes, this._Componentes[i-1])
                removeItemFromArr (this._Componentes, this._Componentes[i+1])
            }
        }
        
    }
    removeItemFromArr ( arr, item ) {
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
    preOrder(){
        _preOrder(this._Componentes[this._Componentes.length-1]);
    }
    _preOrder(valor){
        this._preorder.innerHTML+= valor;
        this._Pila.push(valor);
        if(valor.izquierda!=null){
            _preOrder(valor.izquierda)
        }else if(valor.derecha != null){
            _preOrder(valor.derecha)
        }
    }
    posOrder(){
        if(valor.izquierda!=null){
            _preOrder(valor.izquierda)
        }else if(valor.derecha != null){
            _preOrder(valor.derecha)
        }
        this._posorder.innerHTML+= valor;
    }
    Calcular(respuesta){
        
    }
}
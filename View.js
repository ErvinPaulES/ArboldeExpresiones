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
        console.log(this._Componentes);
          
    }
    crearArbol(){
        for(let i=0; i<this._Componentes.length; i++){
            console.log(this._Componentes);
            
            if(this._Componentes[i].valor === "/" || this._Componentes[i].valor === "*"){
                this._Componentes[i].izquierda = this._Componentes[i-1];
                this._Componentes[i].derecha = this._Componentes[i+1];
                console.log(this._Componentes);
                this._removeItemFromArr(this._Componentes, this._Componentes[i+1])
                this._removeItemFromArr(this._Componentes, this._Componentes[i-1])
                
            }
            
        }
        for(let i=0; i<this._Componentes.length; i++){
            console.log(this._Componentes);
            if(this._Componentes[i].valor === "+" || this._Componentes[i].valor === "-"){
                this._Componentes[i].izquierda = this._Componentes[i-1];
                this._Componentes[i].derecha = this._Componentes[i+1];
                this._removeItemFromArr(this._Componentes, this._Componentes[i+1])
                this._removeItemFromArr(this._Componentes, this._Componentes[i-1])
                i--;
                
            }
        }
        
    }
    _removeItemFromArr( arr, item ){
        var i = arr.indexOf( item );
     
        if ( i !== -1 ) {
            arr.splice( i, 1 );
        }
    }
    preOrder(){
        this._preOrder(this._Componentes[this._Componentes.length-1]);
    }
    _preOrder(valor){
        this._preorder.innerHTML+= valor;
        this._Pila.push(valor);
        if(valor.izquierda!=null){
            this._preOrder(valor.izquierda)
        }else if(valor.derecha != null){
            this._preOrder(valor.derecha)
        }
    }
    posOrder(){
        this._posOrder(this._Componentes[this._Componentes.length-1]);
        console.log(this._Componentes[this._Componentes.length-1]);
        
    }
    _posOrder(valor){
        if(valor.izquierda!=null){
            this._posOrder(valor.izquierda)
        }else if(valor.derecha != null){
            this._posOrder(valor.derecha)
        }
        this._posorder.innerHTML+= valor;
    }
    Calcular(respuesta){
        
    }
}
import Componente from './Componente.js';
import View from './View.js';

class Main{
    constructor(){
        let view = new View(document.querySelector('#preorder'), document.querySelector('#posorder'));
        document.querySelector('#calcular').addEventListener('click', () => {

                let valores = new Array();
                let operacion = document.querySelector('#operacion').value;
                let resultado = document.querySelector('#resultado')
                console.log(operacion);
                
                for(let i=0;i<operacion.length;i++){
                    
                    if(operacion[i]!='+' && operacion[i]!='-'&& operacion[i]!='/'&& operacion[i]!='*'){
                        valores[i] = parseFloat(operacion[i])
                    }else{
                        valores[i] = operacion[i];
                    }
                    
                }
                for(let i=0;i<valores.length;i++){
                    
                    let componente = new Componente(valores[i]);
                    view.agregarComponente(componente);
                }
                view.crearArbol();
                view.preOrder();
                view.posOrder();
                view.Calcular(resultado);
        })
    }
}
let main = new Main();
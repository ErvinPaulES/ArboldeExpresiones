import Componentes from './Componentes.js';
import View from './View.js';

class Main{
    constructor(){
        let view = new View(document.querySelector('#preorder'), document.querySelector('#posorder'));
        document.querySelector('#calcular').addEventListener('click', () => {
                let valores = new Array();
                let operacion = document.querySelector('#operacion').value;
                for(i=0;i<operacion.length;i++){
                    if(operacion[i]!='+' && operacion[i]!='-'&& operacion[i]!='/'&& operacion[i]!='*'){
                        valores[i] = parseFloat(operacion[i])
                    }else{
                        valores[i] = operacion[i];
                    }
                    
                }
                for(i=0;i<valores.length;i++){
                    let componente = new Componente(valores[i]);
                    view.agregarComponente(componente);
                }
                
            
        })
    }
}
let main = new Main();
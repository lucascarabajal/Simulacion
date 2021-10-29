
import { domManagement } from './domManagment.js';
import './style.css';


const front = (function(){

    const content = document.querySelector('.content');
    const divSeleccion = domManagement.domDiv('seleccion');
    const divIteracionSalvada = domManagement.domDiv('divIteracionSalvada');
    const divPoblacion = domManagement.domDiv('poblacion');
    
    //functiones
    const mostrarInteracionPoblacion = function(poblacionBack){
    
        const poblacionDeIteracion = domManagement.domDiv('poblacionIteracion');    
        for(let i = 0; i < poblacionBack.length; i++){
            const divIndividuo = domManagement.domDiv(`${i+1}`);
            const paragraph = domManagement.domParagraph('Habitante',`Habitante: ${i+1}`);
            divIndividuo.appendChild(paragraph);
            if(poblacionBack[i] === 'R'){
                let imgOptionResidente = domManagement.domImage('Residente', 'https://www.kindpng.com/picc/m/87-878334_morty-face-png-morty-png-transparent-png.png');
                imgOptionResidente.onmouseover = function(){
                    imgOptionResidente.src = 'https://dummyimage.com/275x240/1a1833/fff0ff.png&text=Residente';
                    setTimeout(() => {
                        imgOptionResidente.src = 'https://www.kindpng.com/picc/m/87-878334_morty-face-png-morty-png-transparent-png.png';
                    }, 400);
                }    
                divIndividuo.appendChild(imgOptionResidente);
                divIndividuo.id = 'idResidente';
            }
            else{
                let imgOptionMutante = domManagement.domImage('Mutante', 'https://i.redd.it/zhw9s1tk9aoz.jpg');
                imgOptionMutante.onmouseover = function(){
                    imgOptionMutante.src = 'https://dummyimage.com/210x240/fff0ff/1a1833.png&text=Mutante';
                    setTimeout(() => {
                        imgOptionMutante.src = 'https://i.redd.it/zhw9s1tk9aoz.jpg';
                    }, 400);
                }        
                divIndividuo.appendChild(imgOptionMutante);
                divIndividuo.id = 'idMutante';
            }
            poblacionDeIteracion.appendChild(divIndividuo);
        }
        
        return poblacionDeIteracion;
    };

    const mostrarIteracionPoblacionSalvada = function(iteracion){
        const pSalvada = domManagement.domParagraph('pSalvada', `En la iteracion ${iteracion}, la humanidad se salvo de la amenaza mutante`);
        divIteracionSalvada.appendChild(pSalvada);   
    }

    const mostrarAmenazaLatente = function(iteracion){
        const pLatente = domManagement.domParagraph('pLatente', `La amenaza mutante sigue latente luego de las ${iteracion} iteraciones`);
        divIteracionSalvada.appendChild(pLatente);   
    }

    const manejadorDeIteraciones = function(iteracion){
        const iteracionDiv = domManagement.domDiv('Iteracion');
        const paragraph = domManagement.domParagraph('pIteracion',`Iteracion: ${iteracion}`);
        iteracionDiv.appendChild(paragraph);
        iteracionDiv.appendChild(mostrarInteracionPoblacion(back.poblacion));
        divPoblacion.appendChild(iteracionDiv);
    }
   
    const interacion = domManagement.domInput('textIteracion', 'number', 'Colocar cantidad de interacciones' );
    const buttonInteracion = domManagement.domButton('bIteracion', 'buttonClass', 'Generar Iteraciones');
    const buttonRecargar = domManagement.domButton('bReiniciar', 'buttonClass', 'Reiniciar');
    
   
    //eventos
    buttonInteracion.addEventListener('click', ()=>{
        const vIteracion = document.getElementById('textIteracion').value;
        let primeraIteracion = true;
        if(vIteracion != 0){
            let i = 1;
            back.generarPrimeraIteracion();
            manejadorDeIteraciones(i);
    
            for(i ; i < vIteracion; i++){
                back.generarIteracion();
                manejadorDeIteraciones(i+1);
        
                if(back.checkIteracionSalvada(back.poblacion) ===true){
                    if(primeraIteracion){
                        mostrarIteracionPoblacionSalvada(i+1);
                        primeraIteracion = false;
                    }   
                }       
            }
            if(back.checkIteracionSalvada(back.poblacion) ===false){
               mostrarAmenazaLatente(vIteracion);
            }     
        }
        
        buttonInteracion.disabled = true;
    });

    buttonRecargar.addEventListener('click', ()=> window.location.reload());


    divSeleccion.appendChild(interacion);
    divSeleccion.appendChild(buttonInteracion);
    divSeleccion.appendChild(buttonRecargar);

    content.appendChild(divSeleccion);
    content.appendChild(divIteracionSalvada);
    content.appendChild(divPoblacion);
})();



const back = (function(){
    let poblacion = ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    const min = 0;
    const max = 9;
    const range = max - min;

    const probabilidad = [
        [0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30] //0
        ,[0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19] //1
        ,[0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04] //2
        ,[0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08] //3
        ,[0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09] //4
        ,[0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02] //5
        ,[0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01] //6
        ,[0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16] //7
        ,[0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30] //8
        ,[0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00] //9
    ]

    const procesoMoran = function(fila, prob){
        let column = 0;
        let acumulado =0;
        let j=-1;
        
        while(acumulado<prob){
            j++;
            acumulado+=probabilidad[fila][j]
            
        }
    }
    
    const actualizarPoblacion = function(poblacion, col, seleccionReproductor){
        if (poblacion[seleccionReproductor] == 'M') poblacion[col] = 'M';
        else poblacion[col] = 'R';
    }
    
   

    const generarIteracion = function(){
        const seleccionReproductor = Math.round((Math.random()*range) + min);
        const reMinimo=0.01;
        const reMaximo=0.99;
        const reRange = reMaximo - reMinimo;
        const probMuerto = (Math.random()*reRange) + reMinimo;

        let reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);
        actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);
    }


   

    const generarPrimeraIteracion = function(){
        let seleccionMutante = Math.round((Math.random()*range) + min);
        poblacion[seleccionMutante] = 'M';
    }
   


    const checkIteracionSalvada = function(poblacionArray){
        for(let i = 0; i < poblacionArray.length; i++){
            if(poblacionArray[i] === 'M'){
                return false;
            }
        }
        return true;
    }

    return {generarIteracion, generarPrimeraIteracion, poblacion, checkIteracionSalvada}
})();



// for(let i = 0; i < 10; i++){
        //     let probAbs = Math.abs(prob - probabilidadArray[fila][i]);
        //     if(probAbs < probabilidadCercana){
        //         probabilidadCercana = probAbs;
        //         column = i;
        //     }
        // }
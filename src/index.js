
import { domManagement } from './domManagment.js';
/*package com.simu;

import java.util.Arrays;
import java.util.Scanner;

import static com.simu.EPoblacion.*;

public class Main {

    static double probabilidad[][] = {
        {0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30} //0
        ,{0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19} //1
        ,{0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04} //2
        ,{0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08} //3
        ,{0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09} //4
        ,{0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02} //5
        ,{0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01} //6
        ,{0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16} //7
        ,{0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30} //8
        ,{0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00} //9
    };

    static int procesoMoran(int fila, double prob, double[][] probabilidad) {
        double probabilidaCercana = 0.99;
        int column = 0;
        for(int i=0; i < 10; i++){
            double probAbs = Math.abs(prob - probabilidad[fila][i]);
            if(probAbs < probabilidaCercana) {
                probabilidaCercana = probAbs;
                column = i;
            }
        }
        return column;
    }

    static void actualizarPoblacion(EPoblacion[] poblacion, int col, int seleccionReproductor){
        if (poblacion[seleccionReproductor] == MUTANTE) poblacion[col] = MUTANTE;
        else poblacion[col] = RESIDENTE;
    }

    static void mostrarPoblacion(EPoblacion[] poblacion){
        Arrays.stream(poblacion).forEach(p -> System.out.print(p.getLetra() + " "));
        System.out.println();
    }

    public static void main(String[] args) {

        EPoblacion[] poblacion = new EPoblacion[10];
        Arrays.fill(poblacion, RESIDENTE);

        //Elegimos la t cantidad pasos de tiempo
        System.out.print("\nIngrese la cantidad de iteraciones que quiere realizar: ");
        Scanner scan = new Scanner(System.in);
        int iteracion = scan.nextInt();

        int minimo = 0;
        int maximo = 9;
        int range = maximo - minimo +1;

        int seleccionMutante = (int) (Math.random() * range) + minimo;
        poblacion[seleccionMutante]= MUTANTE;

        //Iteraciones del proceso de moran
        double reMinimo=0.01;
        double reMaximo=0.99;
        double reRange = reMaximo - reMinimo;

        for(int i = 0; i < iteracion; i++){
            int seleccionReproductor = (int) (Math.random() * range) + minimo;
            double probMuerto = (Math.random()*reRange) + reMinimo;

            int reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);
            actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);
            mostrarPoblacion(poblacion);
        }
        
    }
}*/


const front = (function(){

    const content = document.querySelector('.content');
    const divSeleccion = domManagement.domDiv('seleccion');
    const divPoblacion = domManagement.domDiv('poblacion');
    
    //functions
    const mostrarInteracionPoblacion = function(poblacionBack){
    
        const poblacionDeIteracion = domManagement.domDiv('poblacionIteracion');
        //poblacionIteraciones.id = id;
    
        for(let i = 0; i < poblacionBack.length; i++){
            const divIndividuo = domManagement.domDiv(`${i+1}`);
            const paragraph = domManagement.domParagraph('Habitante',`Habitante: ${i+1}`);
            divIndividuo.appendChild(paragraph);
            if(poblacionBack[i] === 'R'){
                const imgOptionResidente = domManagement.domImage('Residente','https://media.diariouno.com.ar/p/6ca66c388536aad2b26b77c0a7d72ac1/adjuntos/298/imagenes/007/704/0007704925/ricardo-fortjpg.jpg'); 
                divIndividuo.appendChild(imgOptionResidente);
            }
            else{
                const imgOptionMutante = domManagement.domImage('Mutante', 'http://1.bp.blogspot.com/-HfteZpSnThE/UpNLUWha9WI/AAAAAAAAFA8/kdu_nz7e05I/s1600/ricardo+fort.jpg');
                divIndividuo.appendChild(imgOptionMutante);
            }
            poblacionDeIteracion.appendChild(divIndividuo);
        }
        
        return poblacionDeIteracion;
    };
   
    const interacion = domManagement.domInput('textIteracion', 'number', 'Colocar cantidad de interacciones' );
    const buttonInteracion = domManagement.domButton('bIteracion', 'buttonClass', 'Generar Iteraciones');


    const buttonRecargar = domManagement.domButton('bRecargar', 'buttonClass', 'Reiniciar');
    
   
    
    buttonInteracion.addEventListener('click', (e)=>{
        const vIteracion = document.getElementById('textIteracion').value;
       
        for(let i = 0; i < vIteracion; i++){
            back.generarIteracion();
            const iteracionDiv = domManagement.domDiv('Iteracion');
            const paragraph = domManagement.domParagraph('iteracion',`Iteracion: ${i+1}`);
            iteracionDiv.appendChild(paragraph);
            iteracionDiv.appendChild(mostrarInteracionPoblacion(back.poblacion));
            divPoblacion.appendChild(iteracionDiv);
        }
    });

    buttonRecargar.addEventListener('click', ()=> window.location.reload());


    divSeleccion.appendChild(interacion);
    divSeleccion.appendChild(buttonInteracion);
    divSeleccion.appendChild(buttonRecargar);

    content.appendChild(divSeleccion);
    content.appendChild(divPoblacion);


    
    
})();



const back = (function(){
    let poblacion = ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];
    let iteraccion = 0;

    

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

    const procesoMoran = function(fila, prob, probabilidadArray){
        let probabilidadCercana = 0.99;
        let column = 0;
        for(let i = 0; i < 10; i++){
            let probAbs = Math.abs(prob - probabilidadArray[fila][i]);
            if(probAbs < probabilidadCercana){
                probabilidadCercana = probAbs;
                column = i;
            }
        }
        return column;
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


   

    
    const min = 0;
    const max = 9;
    const range = max - min + 1;
    let seleccionMutante = Math.round((Math.random()*range) + min);
    poblacion[seleccionMutante] = 'M';

    return {generarIteracion,poblacion}
})();



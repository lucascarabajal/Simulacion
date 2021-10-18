/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManagment.js":
/*!*****************************!*\
  !*** ./src/domManagment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domManagement\": () => (/* binding */ domManagement)\n/* harmony export */ });\n\r\nconst domManagement = (function(){\r\n\r\n    const domButton = function(nameID, className, innerHtml){\r\n\r\n        const button = document.createElement('button');\r\n        button.id = nameID;\r\n        button.className = className\r\n        button.innerHTML = innerHtml;\r\n\r\n        return button;\r\n    }\r\n\r\n    const domParagraph = function(nameID, content){\r\n        const paragraph = document.createElement('p');\r\n        paragraph.id = nameID;\r\n        paragraph.innerHTML = content;\r\n\r\n        return paragraph;\r\n    }\r\n\r\n    const domH1 = function(nameID, content){\r\n        const heading1 = document.createElement('h1');\r\n        heading1.id = nameID;\r\n        heading1.innerHTML = content;\r\n\r\n        return heading1;\r\n    }\r\n\r\n    const domH2 = function(nameID, content){\r\n        const heading2 = document.createElement('h2');\r\n        heading2.id = nameID;\r\n        heading2.innerHTML = content;\r\n\r\n        return heading2;\r\n    }\r\n\r\n    const domH3 = function(nameID, content){\r\n        const heading3 = document.createElement('h3');\r\n        heading3.id = nameID;\r\n        heading3.innerHTML = content;\r\n\r\n        return heading3;\r\n    }\r\n\r\n    const domImage = function(nameID, srcImage){\r\n        const img = document.createElement('img');\r\n\r\n        img.id = nameID;\r\n        img.src = srcImage;\r\n\r\n        return img;\r\n    }\r\n\r\n    const domAnchor = function(nameID, content, hrefPage){\r\n        const anchor = document.createElement('a');\r\n\r\n        anchor.id = nameID;\r\n        anchor.href = hrefPage;\r\n        anchor.innerHTML = content;\r\n\r\n        return anchor;\r\n    }\r\n\r\n    const domInput = function(nameID, type, placeholderContent, checkValue){\r\n        const input = document.createElement('input');\r\n        input.type = `${type}`;\r\n        input.id = nameID;\r\n        if(checkValue != undefined){\r\n            input.value = checkValue;\r\n        }\r\n        input.placeholder = placeholderContent;\r\n\r\n        return input;\r\n    }\r\n\r\n    const domSelect = function(name, nameID, ...options ){\r\n        const select = document.createElement('select');\r\n        select.name = name;\r\n        select.id = nameID;\r\n        options.forEach(element => {\r\n            const option = new Option(element, element);\r\n            select.add(option, undefined);\r\n        });\r\n\r\n        return select;\r\n    }\r\n\r\n    return{\r\n        domButton,\r\n        domImage,\r\n        domParagraph,\r\n        domH1,\r\n        domH2,\r\n        domH3,\r\n        domAnchor,\r\n        domInput,\r\n        domSelect,\r\n        domInput\r\n    }\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Simulacion/./src/domManagment.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManagment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManagment.js */ \"./src/domManagment.js\");\n\r\n\r\n/*package com.simu;\r\n\r\nimport java.util.Arrays;\r\nimport java.util.Scanner;\r\n\r\nimport static com.simu.EPoblacion.*;\r\n\r\npublic class Main {\r\n\r\n    static double probabilidad[][] = {\r\n        {0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30} //0\r\n        ,{0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19} //1\r\n        ,{0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04} //2\r\n        ,{0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08} //3\r\n        ,{0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09} //4\r\n        ,{0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02} //5\r\n        ,{0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01} //6\r\n        ,{0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16} //7\r\n        ,{0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30} //8\r\n        ,{0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00} //9\r\n    };\r\n\r\n    static int procesoMoran(int fila, double prob, double[][] probabilidad) {\r\n        double probabilidaCercana = 0.99;\r\n        int column = 0;\r\n        for(int i=0; i < 10; i++){\r\n            double probAbs = Math.abs(prob - probabilidad[fila][i]);\r\n            if(probAbs < probabilidaCercana) {\r\n                probabilidaCercana = probAbs;\r\n                column = i;\r\n            }\r\n        }\r\n        return column;\r\n    }\r\n\r\n    static void actualizarPoblacion(EPoblacion[] poblacion, int col, int seleccionReproductor){\r\n        if (poblacion[seleccionReproductor] == MUTANTE) poblacion[col] = MUTANTE;\r\n        else poblacion[col] = RESIDENTE;\r\n    }\r\n\r\n    static void mostrarPoblacion(EPoblacion[] poblacion){\r\n        Arrays.stream(poblacion).forEach(p -> System.out.print(p.getLetra() + \" \"));\r\n        System.out.println();\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n\r\n        EPoblacion[] poblacion = new EPoblacion[10];\r\n        Arrays.fill(poblacion, RESIDENTE);\r\n\r\n        //Elegimos la t cantidad pasos de tiempo\r\n        System.out.print(\"\\nIngrese la cantidad de iteraciones que quiere realizar: \");\r\n        Scanner scan = new Scanner(System.in);\r\n        int iteracion = scan.nextInt();\r\n\r\n        int minimo = 0;\r\n        int maximo = 9;\r\n        int range = maximo - minimo +1;\r\n\r\n        int seleccionMutante = (int) (Math.random() * range) + minimo;\r\n        poblacion[seleccionMutante]= MUTANTE;\r\n\r\n        //Iteraciones del proceso de moran\r\n        double reMinimo=0.01;\r\n        double reMaximo=0.99;\r\n        double reRange = reMaximo - reMinimo;\r\n\r\n        for(int i = 0; i < iteracion; i++){\r\n            int seleccionReproductor = (int) (Math.random() * range) + minimo;\r\n            double probMuerto = (Math.random()*reRange) + reMinimo;\r\n\r\n            int reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);\r\n            actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);\r\n            mostrarPoblacion(poblacion);\r\n        }\r\n        \r\n    }\r\n}*/\r\n\r\n\r\nconst main = (function(){\r\n    \r\n    let poblacion = ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];\r\n\r\n    const probabilidad = [\r\n        [0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30] //0\r\n        ,[0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19] //1\r\n        ,[0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04] //2\r\n        ,[0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08] //3\r\n        ,[0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09] //4\r\n        ,[0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02] //5\r\n        ,[0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01] //6\r\n        ,[0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16] //7\r\n        ,[0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30] //8\r\n        ,[0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00] //9\r\n    ]\r\n\r\n    const procesoMoran = function(fila, prob, probabilidadArray){\r\n        const probabilidadCercana = 0.99;\r\n        let column = 0;\r\n        for(let i = 0; i < 10; i++){\r\n            let probAbs = Math.abs(prob - probabilidad[fila][i]);\r\n            if(probAbs < probabilidadCercana){\r\n                probabilidaCercana = probAbs;\r\n                column = i;\r\n            }\r\n        }\r\n        return column;\r\n    }\r\n    \r\n    const actualizarPoblacion = function(poblacion, col, seleccionReproductor){\r\n        if (poblacion[seleccionReproductor] == 'M') poblacion[col] = 'M';\r\n        else poblacion[col] = 'R';\r\n    }\r\n    \r\n   \r\n\r\n    const mostrarPoblacion = function(poblacion){\r\n\r\n    }\r\n\r\n\r\n    /*\r\n    public static void main(String[] args) {\r\n\r\n        EPoblacion[] poblacion = new EPoblacion[10];\r\n        Arrays.fill(poblacion, RESIDENTE);\r\n\r\n        //Elegimos la t cantidad pasos de tiempo\r\n        System.out.print(\"\\nIngrese la cantidad de iteraciones que quiere realizar: \");\r\n        Scanner scan = new Scanner(System.in);\r\n        int iteracion = scan.nextInt();\r\n\r\n        int minimo = 0;\r\n        int maximo = 9;\r\n        int range = maximo - minimo +1;\r\n\r\n        int seleccionMutante = (int) (Math.random() * range) + minimo;\r\n        poblacion[seleccionMutante]= MUTANTE;\r\n\r\n        //Iteraciones del proceso de moran\r\n        double reMinimo=0.01;\r\n        double reMaximo=0.99;\r\n        double reRange = reMaximo - reMinimo;\r\n\r\n        for(int i = 0; i < iteracion; i++){\r\n            int seleccionReproductor = (int) (Math.random() * range) + minimo;\r\n            double probMuerto = (Math.random()*reRange) + reMinimo;\r\n\r\n            int reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);\r\n            actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);\r\n            mostrarPoblacion(poblacion);\r\n        }\r\n        \r\n    }\r\n    */\r\n\r\n    \r\n   \r\n    \r\n \r\n\r\n\r\n    \r\n})();\r\n\r\n\r\nconst hi = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domParagraph('hi','hi');\r\n\r\nwindow.appendChild(hi)\n\n//# sourceURL=webpack://Simulacion/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".content{\\r\\n    background-color: aqua;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Simulacion/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Simulacion/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Simulacion/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Simulacion/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Simulacion/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Simulacion/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Simulacion/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Simulacion/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Simulacion/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Simulacion/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domManagment.js":
/*!*****************************!*\
  !*** ./src/domManagment.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domManagement\": () => (/* binding */ domManagement)\n/* harmony export */ });\n\r\nconst domManagement = (function(){\r\n\r\n    const domButton = function(nameID, className, innerHtml){\r\n\r\n        const button = document.createElement('button');\r\n        button.id = nameID;\r\n        button.className = className\r\n        button.innerHTML = innerHtml;\r\n\r\n        return button;\r\n    }\r\n\r\n    const domParagraph = function(nameID, content){\r\n        const paragraph = document.createElement('p');\r\n        paragraph.id = nameID;\r\n        paragraph.innerHTML = content;\r\n\r\n        return paragraph;\r\n    }\r\n\r\n    const domH1 = function(nameID, content){\r\n        const heading1 = document.createElement('h1');\r\n        heading1.id = nameID;\r\n        heading1.innerHTML = content;\r\n\r\n        return heading1;\r\n    }\r\n\r\n    const domH2 = function(nameID, content){\r\n        const heading2 = document.createElement('h2');\r\n        heading2.id = nameID;\r\n        heading2.innerHTML = content;\r\n\r\n        return heading2;\r\n    }\r\n\r\n    const domH3 = function(nameID, content){\r\n        const heading3 = document.createElement('h3');\r\n        heading3.id = nameID;\r\n        heading3.innerHTML = content;\r\n\r\n        return heading3;\r\n    }\r\n\r\n    const domImage = function(nameID, srcImage){\r\n        const img = document.createElement('img');\r\n\r\n        img.id = nameID;\r\n        img.src = srcImage;\r\n\r\n        return img;\r\n    }\r\n\r\n    const domAnchor = function(nameID, content, hrefPage){\r\n        const anchor = document.createElement('a');\r\n\r\n        anchor.id = nameID;\r\n        anchor.href = hrefPage;\r\n        anchor.innerHTML = content;\r\n\r\n        return anchor;\r\n    }\r\n\r\n    const domInput = function(nameID, type, placeholderContent, checkValue){\r\n        const input = document.createElement('input');\r\n        input.type = `${type}`;\r\n        input.id = nameID;\r\n        if(checkValue != undefined){\r\n            input.value = checkValue;\r\n        }\r\n        input.placeholder = placeholderContent;\r\n\r\n        return input;\r\n    }\r\n\r\n    const domSelect = function(name, nameID, ...options ){\r\n        const select = document.createElement('select');\r\n        select.name = name;\r\n        select.id = nameID;\r\n        options.forEach(element => {\r\n            const option = new Option(element, element);\r\n            select.add(option, undefined);\r\n        });\r\n\r\n        return select;\r\n    }\r\n\r\n    const domDiv = function(classNameDiv){\r\n        const div = document.createElement('div');\r\n        div.className = classNameDiv;\r\n\r\n        return div;\r\n    }\r\n\r\n    return{\r\n        domButton,\r\n        domImage,\r\n        domParagraph,\r\n        domH1,\r\n        domH2,\r\n        domH3,\r\n        domAnchor,\r\n        domInput,\r\n        domSelect,\r\n        domInput,\r\n        domDiv\r\n    }\r\n})();\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://Simulacion/./src/domManagment.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManagment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManagment.js */ \"./src/domManagment.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nconst front = (function(){\r\n\r\n    const content = document.querySelector('.content');\r\n    const divSeleccion = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domDiv('seleccion');\r\n    const divPoblacion = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domDiv('poblacion');\r\n    \r\n    //functions\r\n    const mostrarInteracionPoblacion = function(poblacionBack){\r\n    \r\n        const poblacionDeIteracion = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domDiv('poblacionIteracion');\r\n        //poblacionIteraciones.id = id;\r\n    \r\n        for(let i = 0; i < poblacionBack.length; i++){\r\n            const divIndividuo = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domDiv(`${i+1}`);\r\n            const paragraph = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domParagraph('Habitante',`Habitante: ${i+1}`);\r\n            divIndividuo.appendChild(paragraph);\r\n            if(poblacionBack[i] === 'R'){\r\n                const imgOptionResidente = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domImage('Residente','https://media.diariouno.com.ar/p/6ca66c388536aad2b26b77c0a7d72ac1/adjuntos/298/imagenes/007/704/0007704925/ricardo-fortjpg.jpg'); \r\n                divIndividuo.appendChild(imgOptionResidente);\r\n            }\r\n            else{\r\n                const imgOptionMutante = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domImage('Mutante', 'http://1.bp.blogspot.com/-HfteZpSnThE/UpNLUWha9WI/AAAAAAAAFA8/kdu_nz7e05I/s1600/ricardo+fort.jpg');\r\n                divIndividuo.appendChild(imgOptionMutante);\r\n            }\r\n            poblacionDeIteracion.appendChild(divIndividuo);\r\n        }\r\n        \r\n        return poblacionDeIteracion;\r\n    };\r\n   \r\n    const interacion = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domInput('textIteracion', 'number', 'Colocar cantidad de interacciones' );\r\n    const buttonInteracion = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domButton('bIteracion', 'buttonClass', 'Generar Iteraciones');\r\n\r\n\r\n    const buttonRecargar = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domButton('bRecargar', 'buttonClass', 'Reiniciar');\r\n    \r\n   \r\n    \r\n    buttonInteracion.addEventListener('click', ()=>{\r\n        const vIteracion = document.getElementById('textIteracion').value;\r\n        \r\n        back.generarPrimeraIteracion();\r\n        const iteracionDiv = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domDiv('Iteracion');\r\n        const paragraph = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domParagraph('iteracion','Iteracion: 1');\r\n        iteracionDiv.appendChild(paragraph);\r\n        iteracionDiv.appendChild(mostrarInteracionPoblacion(back.poblacion));\r\n        divPoblacion.appendChild(iteracionDiv);\r\n\r\n        for(let i = 1; i < vIteracion; i++){\r\n            back.generarIteracion();\r\n\r\n            const iteracionDiv = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domDiv('Iteracion');\r\n            const paragraph = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domParagraph('iteracion',`Iteracion: ${i+1}`);\r\n            iteracionDiv.appendChild(paragraph);\r\n            iteracionDiv.appendChild(mostrarInteracionPoblacion(back.poblacion));\r\n            divPoblacion.appendChild(iteracionDiv);\r\n        }\r\n    });\r\n\r\n    buttonRecargar.addEventListener('click', ()=> window.location.reload());\r\n\r\n\r\n    divSeleccion.appendChild(interacion);\r\n    divSeleccion.appendChild(buttonInteracion);\r\n    divSeleccion.appendChild(buttonRecargar);\r\n\r\n    content.appendChild(divSeleccion);\r\n    content.appendChild(divPoblacion);\r\n\r\n\r\n    \r\n    \r\n})();\r\n\r\n\r\n\r\nconst back = (function(){\r\n    let poblacion = ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];\r\n    let iteraccion = 0;\r\n    const min = 0;\r\n    const max = 9;\r\n    const range = max - min + 1;\r\n\r\n    const probabilidad = [\r\n        [0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30] //0\r\n        ,[0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19] //1\r\n        ,[0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04] //2\r\n        ,[0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08] //3\r\n        ,[0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09] //4\r\n        ,[0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02] //5\r\n        ,[0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01] //6\r\n        ,[0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16] //7\r\n        ,[0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30] //8\r\n        ,[0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00] //9\r\n    ]\r\n\r\n    const procesoMoran = function(fila, prob, probabilidadArray){\r\n        let probabilidadCercana = 0.99;\r\n        let column = 0;\r\n        for(let i = 0; i < 10; i++){\r\n            let probAbs = Math.abs(prob - probabilidadArray[fila][i]);\r\n            if(probAbs < probabilidadCercana){\r\n                probabilidadCercana = probAbs;\r\n                column = i;\r\n            }\r\n        }\r\n        return column;\r\n    }\r\n    \r\n    const actualizarPoblacion = function(poblacion, col, seleccionReproductor){\r\n        if (poblacion[seleccionReproductor] == 'M') poblacion[col] = 'M';\r\n        else poblacion[col] = 'R';\r\n    }\r\n    \r\n   \r\n\r\n    const generarIteracion = function(){\r\n        const seleccionReproductor = Math.round((Math.random()*range) + min);\r\n        const reMinimo=0.01;\r\n        const reMaximo=0.99;\r\n        const reRange = reMaximo - reMinimo;\r\n        const probMuerto = (Math.random()*reRange) + reMinimo;\r\n\r\n        let reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);\r\n        actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);\r\n        \r\n    }\r\n\r\n\r\n   \r\n\r\n    const generarPrimeraIteracion = function(){\r\n        \r\n        \r\n        let seleccionMutante = Math.round((Math.random()*range) + min);\r\n        poblacion[seleccionMutante] = 'M';\r\n    }\r\n   \r\n\r\n    return {generarIteracion, generarPrimeraIteracion, poblacion}\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://Simulacion/./src/index.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domManagment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManagment.js */ \"./src/domManagment.js\");\n\r\n\r\n/*package com.simu;\r\n\r\nimport java.util.Arrays;\r\nimport java.util.Scanner;\r\n\r\nimport static com.simu.EPoblacion.*;\r\n\r\npublic class Main {\r\n\r\n    static double probabilidad[][] = {\r\n        {0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30} //0\r\n        ,{0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19} //1\r\n        ,{0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04} //2\r\n        ,{0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08} //3\r\n        ,{0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09} //4\r\n        ,{0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02} //5\r\n        ,{0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01} //6\r\n        ,{0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16} //7\r\n        ,{0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30} //8\r\n        ,{0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00} //9\r\n    };\r\n\r\n    static int procesoMoran(int fila, double prob, double[][] probabilidad) {\r\n        double probabilidaCercana = 0.99;\r\n        int column = 0;\r\n        for(int i=0; i < 10; i++){\r\n            double probAbs = Math.abs(prob - probabilidad[fila][i]);\r\n            if(probAbs < probabilidaCercana) {\r\n                probabilidaCercana = probAbs;\r\n                column = i;\r\n            }\r\n        }\r\n        return column;\r\n    }\r\n\r\n    static void actualizarPoblacion(EPoblacion[] poblacion, int col, int seleccionReproductor){\r\n        if (poblacion[seleccionReproductor] == MUTANTE) poblacion[col] = MUTANTE;\r\n        else poblacion[col] = RESIDENTE;\r\n    }\r\n\r\n    static void mostrarPoblacion(EPoblacion[] poblacion){\r\n        Arrays.stream(poblacion).forEach(p -> System.out.print(p.getLetra() + \" \"));\r\n        System.out.println();\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n\r\n        EPoblacion[] poblacion = new EPoblacion[10];\r\n        Arrays.fill(poblacion, RESIDENTE);\r\n\r\n        //Elegimos la t cantidad pasos de tiempo\r\n        System.out.print(\"\\nIngrese la cantidad de iteraciones que quiere realizar: \");\r\n        Scanner scan = new Scanner(System.in);\r\n        int iteracion = scan.nextInt();\r\n\r\n        int minimo = 0;\r\n        int maximo = 9;\r\n        int range = maximo - minimo +1;\r\n\r\n        int seleccionMutante = (int) (Math.random() * range) + minimo;\r\n        poblacion[seleccionMutante]= MUTANTE;\r\n\r\n        //Iteraciones del proceso de moran\r\n        double reMinimo=0.01;\r\n        double reMaximo=0.99;\r\n        double reRange = reMaximo - reMinimo;\r\n\r\n        for(int i = 0; i < iteracion; i++){\r\n            int seleccionReproductor = (int) (Math.random() * range) + minimo;\r\n            double probMuerto = (Math.random()*reRange) + reMinimo;\r\n\r\n            int reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);\r\n            actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);\r\n            mostrarPoblacion(poblacion);\r\n        }\r\n        \r\n    }\r\n}*/\r\n\r\n\r\nconst main = (function(){\r\n    \r\n    let poblacion = ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'];\r\n\r\n    const probabilidad = [\r\n        [0.00, 0.14, 0.05, 0.20, 0.02, 0.11, 0.01, 0.15, 0.02, 0.30] //0\r\n        ,[0.12, 0.00, 0.24, 0.17, 0.04, 0.09, 0.04, 0.09, 0.02, 0.19] //1\r\n        ,[0.20, 0.11, 0.00, 0.03, 0.02, 0.21, 0.30, 0.05, 0.04, 0.04] //2\r\n        ,[0.18, 0.13, 0.10, 0.00, 0.09, 0.08, 0.04, 0.09, 0.21, 0.08] //3\r\n        ,[0.29, 0.03, 0.22, 0.13, 0.00, 0.03, 0.09, 0.08, 0.04, 0.09] //4\r\n        ,[0.05, 0.15, 0.09, 0.23, 0.22, 0.00, 0.03, 0.16, 0.05, 0.02] //5\r\n        ,[0.13, 0.25, 0.08, 0.07, 0.03, 0.03, 0.00, 0.15, 0.25, 0.01] //6\r\n        ,[0.05, 0.25, 0,17, 0.11, 0.12, 0.01, 0.06, 0.00, 0.07, 0.16] //7\r\n        ,[0.24, 0.11, 0.01, 0.05, 0.12, 0.01, 0.02, 0.14, 0.00, 0.30] //8\r\n        ,[0.15, 0.07, 0.02, 0.09, 0.20, 0.05, 0.20, 0.12, 0.10, 0.00] //9\r\n    ]\r\n\r\n    const procesoMoran = function(fila, prob, probabilidadArray){\r\n        const probabilidadCercana = 0.99;\r\n        let column = 0;\r\n        for(let i = 0; i < 10; i++){\r\n            let probAbs = Math.abs(prob - probabilidad[fila][i]);\r\n            if(probAbs < probabilidadCercana){\r\n                probabilidaCercana = probAbs;\r\n                column = i;\r\n            }\r\n        }\r\n        return column;\r\n    }\r\n    \r\n    const actualizarPoblacion = function(poblacion, col, seleccionReproductor){\r\n        if (poblacion[seleccionReproductor] == 'M') poblacion[col] = 'M';\r\n        else poblacion[col] = 'R';\r\n    }\r\n    \r\n   \r\n\r\n    const mostrarPoblacion = function(poblacion){\r\n\r\n    }\r\n\r\n\r\n    /*\r\n    public static void main(String[] args) {\r\n\r\n        EPoblacion[] poblacion = new EPoblacion[10];\r\n        Arrays.fill(poblacion, RESIDENTE);\r\n\r\n        //Elegimos la t cantidad pasos de tiempo\r\n        System.out.print(\"\\nIngrese la cantidad de iteraciones que quiere realizar: \");\r\n        Scanner scan = new Scanner(System.in);\r\n        int iteracion = scan.nextInt();\r\n\r\n        int minimo = 0;\r\n        int maximo = 9;\r\n        int range = maximo - minimo +1;\r\n\r\n        int seleccionMutante = (int) (Math.random() * range) + minimo;\r\n        poblacion[seleccionMutante]= MUTANTE;\r\n\r\n        //Iteraciones del proceso de moran\r\n        double reMinimo=0.01;\r\n        double reMaximo=0.99;\r\n        double reRange = reMaximo - reMinimo;\r\n\r\n        for(int i = 0; i < iteracion; i++){\r\n            int seleccionReproductor = (int) (Math.random() * range) + minimo;\r\n            double probMuerto = (Math.random()*reRange) + reMinimo;\r\n\r\n            int reemplazoProb = procesoMoran(seleccionReproductor, probMuerto, probabilidad);\r\n            actualizarPoblacion(poblacion, reemplazoProb, seleccionReproductor);\r\n            mostrarPoblacion(poblacion);\r\n        }\r\n        \r\n    }\r\n    */\r\n\r\n    \r\n   \r\n    \r\n \r\n\r\n\r\n    \r\n})();\r\n\r\nconst content = document.querySelector('.content');\r\nconst hi = _domManagment_js__WEBPACK_IMPORTED_MODULE_0__.domManagement.domParagraph('hi','hi');\r\n\r\ncontent.appendChild(hi)\n\n//# sourceURL=webpack://Simulacion/./src/index.js?");
>>>>>>> 730f2e3a4bb44d195b168d25e91199a101a4d6d7

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
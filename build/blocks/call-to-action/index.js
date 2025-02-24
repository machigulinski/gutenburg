/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/StarRating.js":
/*!*********************************************!*\
  !*** ./src/blocks/components/StarRating.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StarRating)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StarRating_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StarRating.scss */ "./src/blocks/components/StarRating.scss");
/* harmony import */ var _StarRating_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_StarRating_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function StarRating({
  rating,
  setRating
}) {
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(rating || 0);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "stars",
    children: [1, 2, 3, 4, 5].map(star => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: star <= hover ? 'star on' : 'star off',
      onMouseEnter: () => setHover(star),
      onMouseLeave: () => setHover(rating),
      onClick: () => setRating(star),
      children: "\u2605"
    }, star))
  });
}

/***/ }),

/***/ "./src/blocks/components/StarRating.scss":
/*!***********************************************!*\
  !*** ./src/blocks/components/StarRating.scss ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nexpected \"{\".\n\u001b[34m  ╷\u001b[0m\n\u001b[34m1 │\u001b[0m import \"../sccs/variables\"\u001b[31m\u001b[0m;\n\u001b[34m  │\u001b[0m \u001b[31m                          ^\u001b[0m\n\u001b[34m  ╵\u001b[0m\n  src/blocks/components/StarRating.scss 1:27  root stylesheet\n    at tryRunOrWebpackError (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/HookWebpackError.js:86:9)\n    at __webpack_require_module__ (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3485:9)\n    at done (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/Hook.js:18:14)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3463:5)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5198:16\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3463:5)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5166:15\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3485:9)\n    at done (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3527:9)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5112:8\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:3531:6\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:3530:11\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:95:34\n    at Array.<anonymous> (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5100:11)\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3463:5)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5130:14\n    at processQueue (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:85:11)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nexpected \"{\".\n\u001b[34m  ╷\u001b[0m\n\u001b[34m1 │\u001b[0m import \"../sccs/variables\"\u001b[31m\u001b[0m;\n\u001b[34m  │\u001b[0m \u001b[31m                          ^\u001b[0m\n\u001b[34m  ╵\u001b[0m\n  src/blocks/components/StarRating.scss 1:27  root stylesheet\n    at Object.<anonymous> (/home/machi/IWD/high-pulp-blocks/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/home/machi/IWD/high-pulp-blocks/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/home/machi/IWD/high-pulp-blocks/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/home/machi/IWD/high-pulp-blocks/src/blocks/components/StarRating.scss:1:7)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/javascript/JavascriptModulesPlugin.js:494:10\n    at Hook.eval [as call] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/Hook.js:14:14)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5303:39\n    at tryRunOrWebpackError (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/HookWebpackError.js:81:7)\n    at __webpack_require_module__ (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5301:12)\n    at __webpack_require__ (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5258:18)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5330:20\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3485:9)\n    at done (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/Hook.js:18:14)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5236:43\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3463:5)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5198:16\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3485:9)\n    at timesSync (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3463:5)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5166:15\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3485:9)\n    at done (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3527:9)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5112:8\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:3531:6\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/HookWebpackError.js:67:2\n    at Hook.eval [as callAsync] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Cache.store (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:111:20)\n    at ItemCacheFacade.store (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/CacheFacade.js:141:15)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:3530:11\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:95:34\n    at Array.<anonymous> (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/cache/MemoryCachePlugin.js:45:13)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:95:19\n    at Hook.eval [as callAsync] (eval at create (/home/machi/IWD/high-pulp-blocks/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:19:1)\n    at Cache.get (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Cache.js:79:18)\n    at ItemCacheFacade.get (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/CacheFacade.js:115:15)\n    at Compilation._codeGenerationModule (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:3498:9)\n    at codeGen (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5100:11)\n    at symbolIterator (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3482:9)\n    at timesSync (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:2297:7)\n    at Object.eachLimit (/home/machi/IWD/high-pulp-blocks/node_modules/neo-async/async.js:3463:5)\n    at /home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/Compilation.js:5130:14\n    at processQueue (/home/machi/IWD/high-pulp-blocks/node_modules/webpack/lib/util/processAsyncTree.js:61:4)\n    at process.processTicksAndRejections (node:internal/process/task_queues:85:11)\n\nGenerated code for /home/machi/IWD/high-pulp-blocks/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!/home/machi/IWD/high-pulp-blocks/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!/home/machi/IWD/high-pulp-blocks/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[3]!/home/machi/IWD/high-pulp-blocks/src/blocks/components/StarRating.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\"{\\\".\\n\\u001b[34m  ╷\\u001b[0m\\n\\u001b[34m1 │\\u001b[0m import \\\"../sccs/variables\\\"\\u001b[31m\\u001b[0m;\\n\\u001b[34m  │\\u001b[0m \\u001b[31m                          ^\\u001b[0m\\n\\u001b[34m  ╵\\u001b[0m\\n  src/blocks/components/StarRating.scss 1:27  root stylesheet\");");

/***/ }),

/***/ "./src/blocks/testimonial/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/testimonial/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"mg/testimonial","version":"0.1.0","title":"Best Testimonial Block Ever","category":"design","icon":"testimonial","description":"The new testimonial block for the class","example":{},"supports":{"html":false},"textdomain":"testimonial","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","keywords":["wctc","high pulp","testimonial","mg"],"attributes":{"quote":{"type":"string","source":"html","selector":".quote"},"author":{"type":"string","source":"html","selector":".author"},"location":{"type":"string","source":"html","selector":".location"},"stars":{"type":"number","default":5},"avatarURL":{"type":"string","default":"http://place-hold.it/75"}}}');

/***/ }),

/***/ "./src/blocks/testimonial/edit.js":
/*!****************************************!*\
  !*** ./src/blocks/testimonial/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/testimonial/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_StarRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/StarRating */ "./src/blocks/components/StarRating.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */






function Edit({
  attributes,
  setAttributes
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_StarRating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: attributes.stars,
      setRating: stars
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
      className: "quote",
      tagName: "div",
      placeholder: "I love cake",
      value: attributes.quote,
      onChange: value => setAttributes({
        quote: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "quote-profile",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "photo",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => setAttributes({
              'avatarURL': media.sizes.thumbnail.url
            }),
            allowedTypes: ['image'],
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
              onClick: open,
              src: attributes.avatarURL,
              alt: "Choose a Photo of a Reviewer"
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PlainText, {
          className: "author",
          value: attributes.author,
          onChange: value => setAttributes({
            author: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.PlainText, {
          className: "location",
          value: attributes.location,
          onChange: value => setAttributes({
            location: value
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/testimonial/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/testimonial/editor.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/testimonial/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/testimonial/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/testimonial/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/testimonial/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/testimonial/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/blocks/testimonial/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/testimonial/save.js":
/*!****************************************!*\
  !*** ./src/blocks/testimonial/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save({
  attributes
}) {
  // build the stars
  let stars = "";
  for (let i = 0; i < attributes.stars; i++) {
    stars += '★';
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      attributes
    }),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "stars",
      children: stars
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      tagName: "div",
      className: "quote",
      value: attributes.quote
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "quote-profile",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "photo",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          src: attributes.avatarURL,
          alt: "Photo of" + attributes.avatarURL
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "text",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "author",
          children: attributes.author
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
          className: "location",
          children: attributes.location
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/blocks/testimonial/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/testimonial/style.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/testimonial/index": 0,
/******/ 			"blocks/testimonial/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkhigh_pulp_blocks"] = globalThis["webpackChunkhigh_pulp_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/testimonial/style-index"], () => (__webpack_require__("./src/blocks/testimonial/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
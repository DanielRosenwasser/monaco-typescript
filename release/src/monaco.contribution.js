/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-typescript version: 2.0.1(a151746d58b73f62bfe228935282a929022ddf6c)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/language/typescript/src/monaco.contribution",["require","exports"],function(e,t){function n(){return new monaco.Promise(function(e,t){r(function(n){n.getTypeScriptWorker().then(e,t)})})}function i(){return new monaco.Promise(function(e,t){r(function(n){n.getJavaScriptWorker().then(e,t)})})}function o(){return{ModuleKind:c,JsxEmit:p,NewLineKind:u,ScriptTarget:l,ModuleResolutionKind:f,typescriptDefaults:g,javascriptDefaults:d,getTypeScriptWorker:n,getJavaScriptWorker:i}}function r(t){e(["vs/language/typescript/src/mode"],t)}Object.defineProperty(t,"__esModule",{value:!0});var a=monaco.Emitter,s=function(){function e(e,t){this._onDidChange=new a,this._extraLibs=Object.create(null),this._workerMaxIdleTime=12e4,this.setCompilerOptions(e),this.setDiagnosticsOptions(t)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),e.prototype.getExtraLibs=function(){var e=Object.create(null);for(var t in this._extraLibs)e[t]=this._extraLibs[t];return Object.freeze(e)},e.prototype.addExtraLib=function(e,t){var n=this;if("undefined"==typeof t&&(t="ts:extralib-"+Date.now()),this._extraLibs[t])throw new Error(t+" already a extra lib");return this._extraLibs[t]=e,this._onDidChange.fire(this),{dispose:function(){delete n._extraLibs[t]&&n._onDidChange.fire(n)}}},e.prototype.getCompilerOptions=function(){return this._compilerOptions},e.prototype.setCompilerOptions=function(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.getDiagnosticsOptions=function(){return this._diagnosticsOptions},e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.setMaximunWorkerIdleTime=function(e){this._workerMaxIdleTime=e},e.prototype.getWorkerMaxIdleTime=function(){return this._workerMaxIdleTime},e}();t.LanguageServiceDefaultsImpl=s;var c;!function(e){e[e.None=0]="None",e[e.CommonJS=1]="CommonJS",e[e.AMD=2]="AMD",e[e.UMD=3]="UMD",e[e.System=4]="System",e[e.ES6=5]="ES6",e[e.ES2015=5]="ES2015"}(c||(c={}));var p;!function(e){e[e.None=0]="None",e[e.Preserve=1]="Preserve",e[e.React=2]="React"}(p||(p={}));var u;!function(e){e[e.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",e[e.LineFeed=1]="LineFeed"}(u||(u={}));var l;!function(e){e[e.ES3=0]="ES3",e[e.ES5=1]="ES5",e[e.ES6=2]="ES6",e[e.ES2015=2]="ES2015",e[e.Latest=2]="Latest"}(l||(l={}));var f;!function(e){e[e.Classic=1]="Classic",e[e.NodeJs=2]="NodeJs"}(f||(f={}));var g=new s({allowNonTsExtensions:!0,target:l.ES5},{noSemanticValidation:!1,noSyntaxValidation:!1}),d=new s({allowNonTsExtensions:!0,allowJs:!0,target:l.Latest},{noSemanticValidation:!0,noSyntaxValidation:!1});monaco.languages.typescript=o(),monaco.languages.register({id:"typescript",extensions:[".ts"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"]}),monaco.languages.onLanguage("typescript",function(){r(function(e){return e.setupTypeScript(g)})}),monaco.languages.register({id:"javascript",extensions:[".js",".es6"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"]}),monaco.languages.onLanguage("javascript",function(){r(function(e){return e.setupJavaScript(d)})})});
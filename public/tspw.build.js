(()=>{"use strict";var e={438:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});const a="precision mediump float;\r\n\r\nvarying vec3 fragmentColor;\r\n\r\nvoid main()\r\n{\r\n    gl_FragColor = vec4(fragmentColor, 1.0);\r\n}"},849:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});const a="precision mediump float;\r\n\r\nattribute vec2 vertexPosition;\r\nattribute vec3 vertexColor;\r\nvarying vec3 fragmentColor;\r\n\r\nvoid main()\r\n{\r\n    fragmentColor = vertexColor;\r\n    gl_Position = vec4(vertexPosition, 0.0, 1.0);\r\n}"},94:(e,r)=>{var t,a;Object.defineProperty(r,"__esModule",{value:!0}),r.DrawType=r.BufferType=void 0,function(e){e[e.Vertex=0]="Vertex",e[e.Element=1]="Element"}(t=r.BufferType||(r.BufferType={})),function(e){e[e.Static=0]="Static",e[e.Dynamic=1]="Dynamic"}(a=r.DrawType||(r.DrawType={}));r.default=function(e,r,n,o){switch(this.bufferObject=e.createBuffer(),r){case t.Vertex:e.bindBuffer(e.ARRAY_BUFFER,this.bufferObject);break;case t.Element:e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.bufferObject)}switch(n){case a.Static:r===t.Vertex?e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW):r===t.Element&&e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(o),e.STATIC_DRAW);break;case a.Dynamic:r===t.Vertex?e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.DYNAMIC_DRAW):r===t.Element&&e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(o),e.DYNAMIC_DRAW)}}},15:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0});var t=function(){function e(e,r,t,a){this.program=e.createProgram(),e.attachShader(this.program,r.shader),e.attachShader(this.program,t.shader),e.linkProgram(this.program),e.getProgramParameter(this.program,e.LINK_STATUS)||(console.error("ERROR: Failed to link the program!: ",e.getProgramInfoLog(this.program)),a&&a())}return e.prototype.sendData=function(e,r,t,a,n){var o=e.getAttribLocation(this.program,r);e.vertexAttribPointer(o,t,e.FLOAT,!1,a*Float32Array.BYTES_PER_ELEMENT,n*Float32Array.BYTES_PER_ELEMENT),e.enableVertexAttribArray(o)},e.prototype.use=function(e){e.useProgram(this.program)},e}();r.default=t},344:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.renderSetup=void 0,r.renderSetup=function(e,r,t){var a=document.createElement("canvas");a.id="canvas",a.width=e,a.height=r;var n=a.getContext("webgl");return n||(console.warn("'webgl' not supported falling back on 'experimental-webgl'"),n=a.getContext("experimental-webgl")),n||(console.error("Your browser does not support WebGL!"),t&&t()),{canvas:a,gl:n}}},295:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.ShaderType=void 0,function(e){e[e.Vertex=0]="Vertex",e[e.Fragment=1]="Fragment"}(t=r.ShaderType||(r.ShaderType={}));r.default=function(e,r,a,n){switch(r){case t.Vertex:this.shader=e.createShader(e.VERTEX_SHADER);break;case t.Fragment:this.shader=e.createShader(e.FRAGMENT_SHADER)}e.shaderSource(this.shader,a),e.compileShader(this.shader),e.getShaderParameter(this.shader,e.COMPILE_STATUS)||(console.log("ERROR: Failed to compile shader!: ",e.getShaderInfoLog(this.shader)),n&&n())}},607:function(e,r,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var n=t(222),o=a(t(849)),i=a(t(438)),u=(0,n.renderSetup)(800,600),d=u.canvas,f=u.gl;document.body.onload=function(){f.clearColor(.6,.75,.65,1),f.clear(f.COLOR_BUFFER_BIT);var e=new n.Shader(f,n.ShaderType.Vertex,o.default),r=new n.Shader(f,n.ShaderType.Fragment,i.default),t=new n.GPProgram(f,e,r),a=[0,1,2,1,2,3];new n.Buffer(f,n.BufferType.Vertex,n.DrawType.Static,[-.5,-.5,1,0,0,.5,-.5,0,1,0,-.5,.5,0,0,1,.5,.5,0,1,0]),new n.Buffer(f,n.BufferType.Element,n.DrawType.Static,a),t.sendData(f,"vertexPosition",2,5,0),t.sendData(f,"vertexColor",3,5,2),t.use(f),f.drawElements(f.TRIANGLES,a.length,f.UNSIGNED_SHORT,0)},document.body.appendChild(d)},222:function(e,r,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.DrawType=r.BufferType=r.Buffer=r.GPProgram=r.ShaderType=r.Shader=r.renderSetup=void 0;var n=t(344);Object.defineProperty(r,"renderSetup",{enumerable:!0,get:function(){return n.renderSetup}});var o=a(t(295));r.Shader=o.default;var i=t(295);Object.defineProperty(r,"ShaderType",{enumerable:!0,get:function(){return i.ShaderType}});var u=a(t(15));r.GPProgram=u.default;var d=a(t(94));r.Buffer=d.default;var f=t(94);Object.defineProperty(r,"BufferType",{enumerable:!0,get:function(){return f.BufferType}}),Object.defineProperty(r,"DrawType",{enumerable:!0,get:function(){return f.DrawType}})}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={exports:{}};return e[a].call(o.exports,o,o.exports,t),o.exports}t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t(607)})();
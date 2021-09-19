import { renderSetup, IRenderSetup } from "./gfx/render-setup";

import vertexShaderSource from "!!raw-loader!./res/basic.vs.glsl";
import fragmentShaderSource from "!!raw-loader!./res/basic.fs.glsl";

import Shader from "./gfx/shader";
import { ShaderType } from "./gfx/shader";

const { canvas, gl }: IRenderSetup = renderSetup(800, 600);

function main() {
  gl.clearColor(0.6, 0.75, 0.65, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const vertexShader: Shader = new Shader(
    gl,
    ShaderType.Vertex,
    vertexShaderSource
  );

  const fragmentShader: Shader = new Shader(
    gl,
    ShaderType.Fragment,
    fragmentShaderSource
  );
}

document.body.onload = main;

document.body.appendChild(canvas);

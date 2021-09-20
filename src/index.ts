import {
  renderSetup,
  IRenderSetup,
  Shader,
  ShaderType,
  GPProgram,
  Buffer,
  BufferType,
  DrawType,
} from "./tspw";

import vertexShaderSource from "!!raw-loader!./res/basic.vs.glsl";
import fragmentShaderSource from "!!raw-loader!./res/basic.fs.glsl";

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

  const gpProgram: GPProgram = new GPProgram(gl, vertexShader, fragmentShader);

  const vertices: number[] = [
    -0.5, -0.5, 1.0, 0.0, 0.0, 0.5, -0.5, 0.0, 1.0, 0.0, -0.5, 0.5, 0.0, 0.0,
    1.0, 0.5, 0.5, 0.0, 1.0, 0.0,
  ];

  const indices: number[] = [0, 1, 2, 1, 2, 3];

  new Buffer(gl, BufferType.Vertex, DrawType.Static, vertices);
  new Buffer(gl, BufferType.Element, DrawType.Static, indices);

  gpProgram.sendData(gl, "vertexPosition", 2, 5, 0);
  gpProgram.sendData(gl, "vertexColor", 3, 5, 2);

  gpProgram.use(gl);

  gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
}

document.body.onload = main;

document.body.appendChild(canvas);

// Return interface
export interface IRenderSetup {
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
}

// Setting up the renderer function
export function renderSetup(
  width: number,
  height: number,
  onNotSupported?: () => void
): IRenderSetup {
  // Creating the canvas
  const canvas = document.createElement("canvas");
  canvas.id = "canvas";
  canvas.width = width;
  canvas.height = height;

  // Creating the WebGL context
  let gl = canvas.getContext("webgl");

  if (!gl) {
    console.warn("'webgl' not supported falling back on 'experimental-webgl'");

    gl = <WebGLRenderingContext>canvas.getContext("experimental-webgl");
  }

  if (!gl) {
    console.error("Your browser does not support WebGL!");

    if (onNotSupported) onNotSupported();
  }

  // Returning the values
  return { canvas: canvas, gl: <WebGLRenderingContext>gl };
}

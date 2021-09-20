import Shader from "./shader";

export default class GPProgram {
  readonly program: WebGLProgram;

  constructor(
    gl: WebGLRenderingContext,
    vertexShader: Shader,
    fragmentShader: Shader,
    onLinkError?: () => void
  ) {
    // Setting the program
    this.program = <WebGLProgram>gl.createProgram();

    // Attaching the shaders to the program
    gl.attachShader(this.program, vertexShader.shader);
    gl.attachShader(this.program, fragmentShader.shader);

    // Linking the program
    gl.linkProgram(this.program);

    // Checking for link errors
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error(
        "ERROR: Failed to link the program!: ",
        gl.getProgramInfoLog(this.program)
      );
      if (onLinkError) onLinkError();
    }
  }

  sendData(
    gl: WebGLRenderingContext,
    nameInShader: string,
    size: number,
    stride: number,
    offset: number
  ) {
    const attribLocation = gl.getAttribLocation(this.program, nameInShader);

    gl.vertexAttribPointer(
      attribLocation,
      size,
      gl.FLOAT,
      false,
      stride * Float32Array.BYTES_PER_ELEMENT,
      offset * Float32Array.BYTES_PER_ELEMENT
    );

    gl.enableVertexAttribArray(attribLocation);
  }

  use(gl: WebGLRenderingContext) {
    gl.useProgram(this.program);
  }
}

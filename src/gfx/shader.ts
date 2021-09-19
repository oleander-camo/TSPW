export enum ShaderType {
  Vertex,
  Fragment,
}

export default class Shader {
  readonly shader: WebGLShader;

  constructor(
    gl: WebGLRenderingContext,
    type: ShaderType,
    shaderSource: string,
    onCompileError?: () => void
  ) {
    // Setting the shader
    switch (type) {
      case ShaderType.Vertex:
        this.shader = <WebGLShader>gl.createShader(gl.VERTEX_SHADER);
        break;
      case ShaderType.Fragment:
        this.shader = <WebGLShader>gl.createShader(gl.FRAGMENT_SHADER);
        break;
    }

    // Loading the shader source code into the shader object
    gl.shaderSource(this.shader, shaderSource);

    // Compiling the shader
    gl.compileShader(this.shader);

    // Checking for compile errors
    if (!gl.getShaderParameter(this.shader, gl.COMPILE_STATUS)) {
      console.log(
        "ERROR: Failed to compile shader!: ",
        gl.getShaderInfoLog(this.shader)
      );
      if (onCompileError) onCompileError();
    }
  }
}

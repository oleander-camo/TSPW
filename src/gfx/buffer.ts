export enum BufferType {
  Vertex,
  Element,
}

export enum DrawType {
  Static,
  Dynamic,
}

export default class Buffer {
  bufferObject: WebGLBuffer;

  constructor(
    gl: WebGLRenderingContext,
    bufferType: BufferType,
    drawType: DrawType,
    bufferData: number[]
  ) {
    this.bufferObject = <WebGLBuffer>gl.createBuffer();

    switch (bufferType) {
      case BufferType.Vertex:
        gl.bindBuffer(gl.ARRAY_BUFFER, this.bufferObject);
        break;
      case BufferType.Element:
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufferObject);
        break;
    }

    switch (drawType) {
      case DrawType.Static:
        if (bufferType === BufferType.Vertex) {
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(bufferData),
            gl.STATIC_DRAW
          );
        } else if (bufferType === BufferType.Element) {
          gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(bufferData),
            gl.STATIC_DRAW
          );
        }
        break;
      case DrawType.Dynamic:
        if (bufferType === BufferType.Vertex) {
          gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(bufferData),
            gl.DYNAMIC_DRAW
          );
        } else if (bufferType === BufferType.Element) {
          gl.bufferData(
            gl.ELEMENT_ARRAY_BUFFER,
            new Uint16Array(bufferData),
            gl.DYNAMIC_DRAW
          );
        }
        break;
    }
  }
}

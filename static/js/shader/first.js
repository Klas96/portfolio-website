// Get WebGL context
const canvas = document.querySelector('#shader1');
const gl = canvas.getContext('webgl');

// Vertex shader program with color support
const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    varying lowp vec4 vColor;
    
    void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
`;

// Fragment shader program with varying color
const fsSource = `
    precision mediump float;
    varying lowp vec4 vColor;
    
    void main() {
        gl_FragColor = vColor;
    }
`;

// Create shader program
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

// Initialize shader program
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
const shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error('Unable to initialize shader program:', gl.getProgramInfoLog(shaderProgram));
}

// Create buffer for square vertices and colors
function initBuffers(gl) {
    // Center squares (rotated 45 degrees)
    const centerSquare1 = [
        -0.2, 0.2,    // Vertex 1
        0.2, 0.2,     // Vertex 2
        -0.2, -0.2,   // Vertex 3
        0.2, -0.2,    // Vertex 4
    ];
    
    const centerSquare2 = [
        -0.2, 0.6,
        0.2, 0.6,
        -0.2, 0.2,
        0.2, 0.2,
    ];
    
    // Side squares (left side)
    const leftSquares = [
        -0.6, 0.4,  -0.4, 0.4,  -0.6, 0.2,  -0.4, 0.2,  // Square 1
        -0.8, 0.4,  -0.6, 0.4,  -0.8, 0.2,  -0.6, 0.2,  // Square 2
        -0.6, 0.6,  -0.4, 0.6,  -0.6, 0.4,  -0.4, 0.4,  // Square 3
        -0.6, 0.2,  -0.4, 0.2,  -0.6, 0.0,  -0.4, 0.0,  // Square 4
    ];
    
    // Side squares (right side)
    const rightSquares = [
        0.4, 0.4,  0.6, 0.4,  0.4, 0.2,  0.6, 0.2,  // Square 1
        0.6, 0.4,  0.8, 0.4,  0.6, 0.2,  0.8, 0.2,  // Square 2
        0.4, 0.6,  0.6, 0.6,  0.4, 0.4,  0.6, 0.4,  // Square 3
        0.4, 0.2,  0.6, 0.2,  0.4, 0.0,  0.6, 0.0,  // Square 4
    ];
    
    const positions = [...centerSquare1, ...centerSquare2, ...leftSquares, ...rightSquares];
    
    // Colors for each vertex
    const colors = [
        // Center square 1 (Red)
        1.0, 0.0, 0.0, 1.0,    // Vertex 1
        1.0, 0.0, 0.0, 1.0,    // Vertex 2
        1.0, 0.0, 0.0, 1.0,    // Vertex 3
        1.0, 0.0, 0.0, 1.0,    // Vertex 4
        
        // Center square 2 (Blue)
        0.0, 0.0, 1.0, 1.0,    // 4 vertices
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        
        // Left squares (Green variations)
        0.0, 0.8, 0.0, 1.0,    // Square 1
        0.0, 0.8, 0.0, 1.0,
        0.0, 0.8, 0.0, 1.0,
        0.0, 0.8, 0.0, 1.0,
        
        0.0, 0.6, 0.0, 1.0,    // Square 2
        0.0, 0.6, 0.0, 1.0,
        0.0, 0.6, 0.0, 1.0,
        0.0, 0.6, 0.0, 1.0,
        
        0.0, 1.0, 0.0, 1.0,    // Square 3
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        
        0.0, 0.7, 0.0, 1.0,    // Square 4
        0.0, 0.7, 0.0, 1.0,
        0.0, 0.7, 0.0, 1.0,
        0.0, 0.7, 0.0, 1.0,
        
        // Right squares (Purple variations)
        0.8, 0.0, 0.8, 1.0,    // Square 1
        0.8, 0.0, 0.8, 1.0,
        0.8, 0.0, 0.8, 1.0,
        0.8, 0.0, 0.8, 1.0,
        
        0.6, 0.0, 0.6, 1.0,    // Square 2
        0.6, 0.0, 0.6, 1.0,
        0.6, 0.0, 0.6, 1.0,
        0.6, 0.0, 0.6, 1.0,
        
        1.0, 0.0, 1.0, 1.0,    // Square 3
        1.0, 0.0, 1.0, 1.0,
        1.0, 0.0, 1.0, 1.0,
        1.0, 0.0, 1.0, 1.0,
        
        0.7, 0.0, 0.7, 1.0,    // Square 4
        0.7, 0.0, 0.7, 1.0,
        0.7, 0.0, 0.7, 1.0,
        0.7, 0.0, 0.7, 1.0,
    ];
    
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    
    return {
        position: positionBuffer,
        color: colorBuffer,
        vertexCount: positions.length / 2
    };
}

// Draw the scene
function drawScene(gl, programInfo, buffers) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    const projectionMatrix = mat4.create();
    mat4.ortho(projectionMatrix, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0);
    
    const modelViewMatrix = mat4.create();
    mat4.rotate(modelViewMatrix, modelViewMatrix, Math.PI / 4, [0, 0, 1]);
    
    // Set shader uniforms
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.projectionMatrix,
        false,
        projectionMatrix);
    gl.uniformMatrix4fv(
        programInfo.uniformLocations.modelViewMatrix,
        false,
        modelViewMatrix);
    
    // Set vertex positions
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    
    // Set vertex colors
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        4,
        gl.FLOAT,
        false,
        0,
        0);
    gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
    
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, buffers.vertexCount);
}

// Initialize the program info
const programInfo = {
    program: shaderProgram,
    attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
        vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
        projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
        modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    },
};

// Initialize buffers and draw
const buffers = initBuffers(gl);
gl.useProgram(programInfo.program);
drawScene(gl, programInfo, buffers);

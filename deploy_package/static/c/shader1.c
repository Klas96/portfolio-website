#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Matrix operations
typedef struct {
    float m[16];
} Mat4;

void mat4_identity(Mat4* mat) {
    for(int i = 0; i < 16; i++) {
        mat->m[i] = 0.0f;
    }
    mat->m[0] = 1.0f;
    mat->m[5] = 1.0f;
    mat->m[10] = 1.0f;
    mat->m[15] = 1.0f;
}

void mat4_rotate_z(Mat4* mat, float angle) {
    float c = cosf(angle);
    float s = sinf(angle);
    
    mat4_identity(mat);
    mat->m[0] = c;
    mat->m[1] = s;
    mat->m[4] = -s;
    mat->m[5] = c;
}

// Vertex shader source code
const char* vertexShaderSource = 
    "#version 330 core\n"
    "layout (location = 0) in vec2 aPos;\n"
    "layout (location = 1) in vec4 aColor;\n"
    "out vec4 vertexColor;\n"
    "uniform mat4 transform;\n"
    "void main()\n"
    "{\n"
    "   gl_Position = transform * vec4(aPos, 0.0, 1.0);\n"
    "   vertexColor = aColor;\n"
    "}\0";

// Fragment shader source code
const char* fragmentShaderSource = 
    "#version 330 core\n"
    "in vec4 vertexColor;\n"
    "out vec4 FragColor;\n"
    "void main()\n"
    "{\n"
    "   FragColor = vertexColor;\n"
    "}\0";

// Function to check shader compilation status
void checkShaderCompilation(GLuint shader) {
    GLint success;
    char infoLog[512];
    glGetShaderiv(shader, GL_COMPILE_STATUS, &success);
    if (!success) {
        glGetShaderInfoLog(shader, 512, NULL, infoLog);
        printf("Shader compilation failed: %s\n", infoLog);
    }
}

int main() {
    // Initialize GLFW
    if (!glfwInit()) {
        printf("Failed to initialize GLFW\n");
        return -1;
    }

    // Configure GLFW
    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    // Create window
    GLFWwindow* window = glfwCreateWindow(800, 600, "Square Pattern Shader", NULL, NULL);
    if (!window) {
        printf("Failed to create GLFW window\n");
        glfwTerminate();
        return -1;
    }
    glfwMakeContextCurrent(window);

    // Initialize GLEW
    if (glewInit() != GLEW_OK) {
        printf("Failed to initialize GLEW\n");
        return -1;
    }

    // Create and compile shaders
    GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
    glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
    glCompileShader(vertexShader);
    checkShaderCompilation(vertexShader);

    GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
    glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
    glCompileShader(fragmentShader);
    checkShaderCompilation(fragmentShader);

    // Create and link shader program
    GLuint shaderProgram = glCreateProgram();
    glAttachShader(shaderProgram, vertexShader);
    glAttachShader(shaderProgram, fragmentShader);
    glLinkProgram(shaderProgram);

    // Delete shaders as they're linked into the program
    glDeleteShader(vertexShader);
    glDeleteShader(fragmentShader);

    // Define vertex data
    float vertices[] = {
        // Center squares
        -0.2f,  0.2f,   1.0f, 0.0f, 0.0f, 1.0f,  // Red square 1
         0.2f,  0.2f,   1.0f, 0.0f, 0.0f, 1.0f,
        -0.2f, -0.2f,   1.0f, 0.0f, 0.0f, 1.0f,
         0.2f, -0.2f,   1.0f, 0.0f, 0.0f, 1.0f,

        -0.2f,  0.6f,   0.0f, 0.0f, 1.0f, 1.0f,  // Blue square 2
         0.2f,  0.6f,   0.0f, 0.0f, 1.0f, 1.0f,
        -0.2f,  0.2f,   0.0f, 0.0f, 1.0f, 1.0f,
         0.2f,  0.2f,   0.0f, 0.0f, 1.0f, 1.0f,

        // Left squares (Green variations)
        -0.6f,  0.4f,   0.0f, 0.8f, 0.0f, 1.0f,
        -0.4f,  0.4f,   0.0f, 0.8f, 0.0f, 1.0f,
        -0.6f,  0.2f,   0.0f, 0.8f, 0.0f, 1.0f,
        -0.4f,  0.2f,   0.0f, 0.8f, 0.0f, 1.0f,

        -0.8f,  0.4f,   0.0f, 0.6f, 0.0f, 1.0f,
        -0.6f,  0.4f,   0.0f, 0.6f, 0.0f, 1.0f,
        -0.8f,  0.2f,   0.0f, 0.6f, 0.0f, 1.0f,
        -0.6f,  0.2f,   0.0f, 0.6f, 0.0f, 1.0f,

        -0.6f,  0.6f,   0.0f, 1.0f, 0.0f, 1.0f,
        -0.4f,  0.6f,   0.0f, 1.0f, 0.0f, 1.0f,
        -0.6f,  0.4f,   0.0f, 1.0f, 0.0f, 1.0f,
        -0.4f,  0.4f,   0.0f, 1.0f, 0.0f, 1.0f,

        -0.6f,  0.2f,   0.0f, 0.7f, 0.0f, 1.0f,
        -0.4f,  0.2f,   0.0f, 0.7f, 0.0f, 1.0f,
        -0.6f,  0.0f,   0.0f, 0.7f, 0.0f, 1.0f,
        -0.4f,  0.0f,   0.0f, 0.7f, 0.0f, 1.0f,

        // Right squares (Purple variations)
        0.4f,  0.4f,    0.8f, 0.0f, 0.8f, 1.0f,
        0.6f,  0.4f,    0.8f, 0.0f, 0.8f, 1.0f,
        0.4f,  0.2f,    0.8f, 0.0f, 0.8f, 1.0f,
        0.6f,  0.2f,    0.8f, 0.0f, 0.8f, 1.0f,

        0.6f,  0.4f,    0.6f, 0.0f, 0.6f, 1.0f,
        0.8f,  0.4f,    0.6f, 0.0f, 0.6f, 1.0f,
        0.6f,  0.2f,    0.6f, 0.0f, 0.6f, 1.0f,
        0.8f,  0.2f,    0.6f, 0.0f, 0.6f, 1.0f,

        0.4f,  0.6f,    1.0f, 0.0f, 1.0f, 1.0f,
        0.6f,  0.6f,    1.0f, 0.0f, 1.0f, 1.0f,
        0.4f,  0.4f,    1.0f, 0.0f, 1.0f, 1.0f,
        0.6f,  0.4f,    1.0f, 0.0f, 1.0f, 1.0f,

        0.4f,  0.2f,    0.7f, 0.0f, 0.7f, 1.0f,
        0.6f,  0.2f,    0.7f, 0.0f, 0.7f, 1.0f,
        0.4f,  0.0f,    0.7f, 0.0f, 0.7f, 1.0f,
        0.6f,  0.0f,    0.7f, 0.0f, 0.7f, 1.0f
    };

    // Create and bind vertex buffer object
    GLuint VBO, VAO;
    glGenVertexArrays(1, &VAO);
    glGenBuffers(1, &VBO);

    glBindVertexArray(VAO);
    glBindBuffer(GL_ARRAY_BUFFER, VBO);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    // Position attribute
    glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    // Color attribute
    glVertexAttribPointer(1, 4, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(2 * sizeof(float)));
    glEnableVertexAttribArray(1);

    // Get transform uniform location
    GLint transformLoc = glGetUniformLocation(shaderProgram, "transform");

    // Create transformation matrix
    Mat4 transform;

    // Render loop
    while (!glfwWindowShouldClose(window)) {
        // Clear the screen
        glClearColor(0.0f, 0.0f, 0.0f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);

        // Use shader program
        glUseProgram(shaderProgram);

        // Create and set rotation matrix (45 degrees)
        mat4_rotate_z(&transform, M_PI / 4);
        glUniformMatrix4fv(transformLoc, 1, GL_FALSE, transform.m);

        // Draw squares
        glBindVertexArray(VAO);
        glDrawArrays(GL_TRIANGLE_STRIP, 0, sizeof(vertices) / (6 * sizeof(float)));

        // Swap buffers and poll events
        glfwSwapBuffers(window);
        glfwPollEvents();
    }

    // Clean up
    glDeleteVertexArrays(1, &VAO);
    glDeleteBuffers(1, &VBO);
    glDeleteProgram(shaderProgram);

    glfwTerminate();
    return 0;
}
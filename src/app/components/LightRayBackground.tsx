"use client";

import React, { useEffect, useRef } from "react";

const LightRayBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) {
      console.error("WebGL is not supported by your browser.");
      return;
    }

    // Vertex shader
    const vertexShaderSource = `
      precision mediump float;
      varying vec2 vUv;
      attribute vec2 a_position;

      void main() {
        vUv = vec2(0.5 * (a_position.x + 1.0), 0.5 * (1.0 - a_position.y));
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment shader → curved rays spreading out from center with visible movement
    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;

      // Smooth curve function for ray distribution
      float smoothCurve(float x, float center, float width) {
        return exp(-pow((x - center) / width, 2.0));
      }

      // Main ray function with curved distribution and more visible movement
      float rayStrength(vec2 raySource, vec2 coord, float angle, float width, float speed) {
        vec2 sourceToCoord = coord - raySource;
        
        // Only allow downward rays
        if (sourceToCoord.y > 0.0) return 0.0;
        
        // Calculate angle from center
        vec2 dir = normalize(sourceToCoord);
        float fragAngle = atan(dir.x, -dir.y); // Angle from vertical center
        
        // Create moving angle effect - this makes rays sway side to side
        float movingAngle = angle + sin(u_time * speed * 0.5) * 0.3;
        
        // Create curved ray pattern with movement
        float rayIntensity = smoothCurve(fragAngle, movingAngle, width);
        
        // Add more pronounced time-based animation
        float timeEffect = 0.7 + 0.3 * sin(u_time * speed * 2.0 + fragAngle * 15.0);
        
        // Add pulsing effect
        float pulse = 0.8 + 0.2 * sin(u_time * speed * 0.8);
        
        // Fade with distance
        float distanceFade = clamp(-sourceToCoord.y / u_resolution.y, 0.0, 1.0);
        
        return rayIntensity * timeEffect * pulse * distanceFade;
      }

      void main() {
        vec2 fragCoord = vUv * u_resolution;
        
        // Ray source at top center
        vec2 raySource = vec2(u_resolution.x * 0.5, u_resolution.y * 0.75);
        
        // Create multiple curved rays with different movement patterns
        float ray1 = rayStrength(raySource, fragCoord, 0.0, 0.3, 0.8);
        float ray2 = rayStrength(raySource, fragCoord, -0.5, 0.25, 1.2);
        float ray3 = rayStrength(raySource, fragCoord, 0.5, 0.25, 1.0);
        float ray4 = rayStrength(raySource, fragCoord, -0.9, 0.2, 1.5);
        float ray5 = rayStrength(raySource, fragCoord, 0.9, 0.2, 1.3);
        
        // Combine rays
        float totalRays = ray1 + ray2 * 0.8 + ray3 * 0.8 + ray4 * 0.6 + ray5 * 0.6;
        
        // Apply color and intensity
        vec4 rays = vec4(0.2, 0.5, 1.0, 1.0) * totalRays;
        
        // Additional fade from center
        float centerFade = 1.0 - smoothCurve(length(fragCoord - raySource) / u_resolution.y, 0.0, 0.5);
        rays.rgb *= centerFade;
        
        gl_FragColor = rays;
      }
    `;

    // Shader helper
    const createShader = (
      gl: WebGLRenderingContext,
      source: string,
      type: number
    ) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Resize
    const resizeCanvas = () => {
      const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;

      gl.viewport(0, 0, canvas.width, canvas.height);
      if (resolutionLocation) {
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const render = () => {
      if (timeLocation) {
        const time = performance.now() * 0.001;
        gl.uniform1f(timeLocation, time);
      }
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
};

export default LightRayBackground;
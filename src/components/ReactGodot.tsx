'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

interface ReactGodotProps {
  script: string;
  pck: string;
  basePath: string;
  width?: number;
  height?: number;
  resize?: boolean;
  className?: string;
  onProgress?: (current: number, total: number) => void;
  onLoad?: () => void;
  onError?: (error: any) => void;
}

const ReactGodot = ({
  script,
  pck,
  basePath,
  width = 800,
  height = 600,
  resize = false,
  className = '',
  onProgress,
  onLoad,
  onError,
}: ReactGodotProps) => {
  const [myScore, setMyScore] = useState(0);

  const outerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scriptPath = `${basePath}${script}`;

  // (window as any).getUsername = () => {
  //   return 'Guest';
  // };

  // (window as any).setMyScore = (score: number) => {
  //   setMyScore(score);
  //   console.log('My score updated:', score);
  // };

  const loadGodotGame = async () => {
    console.log('hi');
    if (!canvasRef.current || !(window as any).Engine) {
      return;
    }
    console.log('ho');

    try {
      // Get the executable name from the pck file
      const executableName = pck.substring(
        pck.lastIndexOf('/') + 1,
        pck.lastIndexOf('.'),
      );

      console.log('Executable name:', executableName);

      // Create Godot configuration similar to WebTest.html
      const GODOT_CONFIG = {
        args: [],
        canvasResizePolicy: resize ? 1 : 2,
        ensureCrossOriginIsolationHeaders: true,
        executable: `${basePath}${executableName}`,
        // executable: executableName, // Use the executable name directly
        experimentalVK: false,
        fileSizes: {
          [`${executableName}.pck`]: 33440, // These would ideally be fetched dynamically
          [`${executableName}.wasm`]: 52126319,
        },
        focusCanvas: true,
        gdextensionLibs: [],
        canvas: canvasRef.current,
      };

      console.log({ GODOT_CONFIG });

      // Create Godot engine instance with proper configuration
      const engine = new (window as any).Engine(GODOT_CONFIG);

      // Start the game using the same method as WebTest.html
      await engine.startGame({
        onProgress: function (current: number, total: number) {
          if (current > 0 && total > 0) {
            console.log(
              `Loading progress: ${current}/${total} (${Math.round((current / total) * 100)}%)`,
            );
            onProgress?.(current, total);
          }
        },
      });

      console.log('Godot game loaded successfully');
      onLoad?.();
    } catch (error) {
      console.error('Failed to load Godot game:', error);
      onError?.(error);
    }
  };

  useEffect(() => {
    // Check if engine is already loaded
    console.log('hiii');
    if ((window as any).Engine) {
      console.log('hooo');
      loadGodotGame();
    }
  }, [script, pck, resize]);

  return (
    <div
      id="wrap"
      ref={outerRef}
      className={`godot-container ${className}`}
      style={{ width, height }}
    >
      <Script
        src={scriptPath}
        onLoad={() => {
          loadGodotGame();
        }}
        onError={() => {
          console.error('Failed to load Godot engine script');
        }}
      />
      <canvas
        id="canvas"
        ref={canvasRef}
        width={width}
        height={height}
        style={{
          display: 'block',
          margin: '0 auto',
          backgroundColor: '#222',
        }}
      />

      <p>My Score: {myScore}</p>
    </div>
  );
};

export default ReactGodot;

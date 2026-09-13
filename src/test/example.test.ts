import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import ParticleBackground from "../components/ParticleBackground";

describe("ParticleBackground", () => {
  it("uses the viewport size for the canvas instead of doubling it on high-DPI screens", () => {
    Object.defineProperty(window, "innerWidth", {
      value: 1200,
      configurable: true,
    });
    Object.defineProperty(window, "innerHeight", {
      value: 800,
      configurable: true,
    });
    Object.defineProperty(window, "devicePixelRatio", {
      value: 2,
      configurable: true,
    });

    const { container } = render(React.createElement(ParticleBackground));
    const canvas = container.querySelector("canvas") as HTMLCanvasElement;

    expect(canvas).not.toBeNull();
    expect(canvas.width).toBe(1200);
    expect(canvas.height).toBe(800);
    expect(canvas.style.width).toBe("1200px");
    expect(canvas.style.height).toBe("800px");
  });
});

"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";

type DragToScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export const DragToScroll = ({ className, children }: DragToScrollProps) => {
  const { onPointerDown, containerRef } = useDragToHorizontalScroll();

  return (
    <div
      className={cn("scrollbar-hide flex overflow-x-auto", className)}
      onPointerDown={onPointerDown}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

const FRAME_RATE = 60;
const FRICTION = 0.98;
const FRAME_DURATION = 1000 / FRAME_RATE;
const VELOCITY_THRESHOLD = 0.05;

const useDragToHorizontalScroll = () => {
  const animationFrameIdRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onPointerDown = (event: React.PointerEvent) => {
    event.preventDefault();

    const container = containerRef.current;

    if (!container) return;

    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }

    const startX = event.clientX;
    const initialScrollLeft = container.scrollLeft;

    let lastX = startX;
    let lastTime = Date.now();
    let velocity = 0;

    const onPointerMove = (event: PointerEvent) => {
      const dx = event.clientX - startX;
      container.scrollLeft = initialScrollLeft - dx;

      const now = Date.now();
      const dt = now - lastTime;
      const dxSinceLast = event.clientX - lastX;

      velocity = dxSinceLast / dt;

      lastX = event.clientX;
      lastTime = now;
    };

    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      container.releasePointerCapture(event.pointerId);

      const momentum = () => {
        velocity *= FRICTION;
        container.scrollLeft -= velocity * FRAME_DURATION;

        if (Math.abs(velocity) > VELOCITY_THRESHOLD) {
          animationFrameIdRef.current = requestAnimationFrame(momentum);
        } else if (animationFrameIdRef.current !== null) {
          cancelAnimationFrame(animationFrameIdRef.current);
          animationFrameIdRef.current = null;
        }
      };

      momentum();
    };

    container.setPointerCapture(event.pointerId);

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return {
    onPointerDown,
    containerRef,
  };
};

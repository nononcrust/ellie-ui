"use client";

import { ClientSideSuspense } from "@/components/shared/client-side-suspense";
import { createContextFactory } from "@/lib/context";
import { cn } from "@/lib/utils";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { GripVerticalIcon } from "lucide-react";
import { useId, useState } from "react";

export default function DraggablePage() {
  return (
    <main>
      <DraggableSquare />
      <FixedDraggableSquare />
    </main>
  );
}

const DraggableSquare = () => {
  return (
    <Draggable>
      <Draggable.Item
        className={cn(
          "border-border bg-background relative z-50 h-[200px] w-[200px] rounded-lg border transition-shadow",
          "data-[dragging=true]:shadow-lg",
        )}
      >
        <Draggable.Grip
          className={cn(
            "hover:bg-background-hover text-subtle absolute top-0 -left-8 rounded-md px-0.5 py-1.5 transition-colors",
            "data-[dragging=true]:bg-background-hover",
          )}
        >
          <GripVerticalIcon size={24} />
        </Draggable.Grip>
      </Draggable.Item>
    </Draggable>
  );
};

const FixedDraggableSquare = () => {
  return (
    <Draggable>
      <div className="fixed right-4 bottom-4">
        <Draggable.Item
          className={cn(
            "border-border bg-background relative z-50 h-[200px] w-[200px] rounded-lg border transition-shadow",
            "data-[dragging=true]:shadow-lg",
          )}
        >
          <Draggable.Grip
            className={cn(
              "hover:bg-background-hover text-subtle absolute top-0 -left-8 rounded-md px-0.5 py-1.5 transition-colors",
              "data-[dragging=true]:bg-background-hover",
            )}
          >
            <GripVerticalIcon size={24} />
          </Draggable.Grip>
        </Draggable.Item>
      </div>
    </Draggable>
  );
};

type Coordinates = {
  x: number;
  y: number;
};

type DraggableProps = {
  children: React.ReactNode;
};

const Draggable = ({ children }: DraggableProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  const draggableId = useId();

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const onDragEnd = (event: DragEndEvent) => {
    setCoordinates((prev) => ({
      x: prev.x + event.delta.x,
      y: prev.y + event.delta.y,
    }));
  };

  return (
    <ClientSideSuspense>
      <DraggableContext value={{ coordinates, draggableId }}>
        <DndContext sensors={sensors} onDragEnd={onDragEnd} modifiers={[restrictToWindowEdges]}>
          {children}
        </DndContext>
      </DraggableContext>
    </ClientSideSuspense>
  );
};

type DraggableItemProps = {
  className?: string;
  children: React.ReactNode;
};

const DraggableItem = ({ children, className }: DraggableItemProps) => {
  const { coordinates, draggableId } = useDraggableContext();

  const { transform, setNodeRef, isDragging } = useDraggable({
    id: draggableId,
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        top: coordinates.y,
        left: coordinates.x,
        transform: `translate(${transform?.x ?? 0}px, ${transform?.y ?? 0}px)`,
      }}
      className={className}
      data-dragging={isDragging}
    >
      {children}
    </div>
  );
};

type DraggableContextValue = {
  coordinates: Coordinates;
  draggableId: string;
};

const [DraggableContext, useDraggableContext] =
  createContextFactory<DraggableContextValue>("Draggable");

type DraggableGripProps = {
  children?: React.ReactNode;
  className?: string;
};

const DraggableGrip = ({ className, children }: DraggableGripProps) => {
  const { draggableId } = useDraggableContext();

  const { attributes, listeners, isDragging } = useDraggable({
    id: draggableId,
  });

  return (
    <button data-dragging={isDragging} className={className} {...attributes} {...listeners}>
      {children}
    </button>
  );
};

Draggable.Item = DraggableItem;
Draggable.Grip = DraggableGrip;

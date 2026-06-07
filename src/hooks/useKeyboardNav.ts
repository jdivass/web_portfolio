import { useEffect } from "react";
import type { ModuleId } from "../types";
import { modules } from "../data/modules";

interface Props {
  activeModule: ModuleId;
  onModuleChange: (id: ModuleId) => void;
}

export function useKeyboardNav({ activeModule, onModuleChange }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = modules.findIndex((m) => m.id === activeModule);
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        onModuleChange(modules[(currentIndex - 1 + modules.length) % modules.length].id);
      }
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        onModuleChange(modules[(currentIndex + 1) % modules.length].id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModule, onModuleChange]);
}
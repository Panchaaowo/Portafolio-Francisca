// app/components/atoms/useActiveSection.ts
import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: `-${offset}px 0px -60% 0px`, threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return activeId;
}

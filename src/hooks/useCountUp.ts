import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, duration: number = 2000): { value: number; ref: any } {
  const [value, setValue] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef<boolean>(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(step);
              else setValue(target);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

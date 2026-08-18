import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarouselProps = {
  items: ReactNode[];
  ariaLabel?: string;
  autoPlayMs?: number;
};

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(1);
      else if (w < 1024) setCount(2);
      else setCount(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  return count;
}

export function Carousel({ items, ariaLabel = "carousel", autoPlayMs = 4000 }: CarouselProps) {
  const visible = useVisibleCount();
  const total = items.length;
  const maxIndex = Math.max(0, total - visible);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (index > maxIndex) setIndex(0);
  }, [maxIndex, index]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (paused || total <= visible) return;
    const id = window.setInterval(next, autoPlayMs);
    return () => window.clearInterval(id);
  }, [paused, next, autoPlayMs, total, visible]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!containerRef.current) return;
      const active = document.activeElement;
      if (!containerRef.current.contains(active)) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const slidePct = 100 / visible;
  const dotsCount = maxIndex + 1;

  return (
    <div
      ref={containerRef}
      className="relative mx-auto max-w-6xl px-14 sm:px-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label={ariaLabel}
      role="region"
      tabIndex={0}
    >
      <div className="overflow-hidden py-4">
        <div
          className="flex transition-transform duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)]"
          style={{ transform: `translateX(-${index * slidePct}%)` }}
        >
          {items.map((child, i) => {
            const isActive = i >= index && i < index + visible;
            const isCenter = visible >= 3 ? i === index + 1 : isActive;
            return (
              <div
                key={i}
                className="shrink-0 px-3"
                style={{ width: `${slidePct}%` }}
                aria-hidden={!isActive}
              >
                <div
                  className={`h-full transition-transform duration-500 ${
                    isCenter ? "scale-[1.03]" : "scale-100"
                  }`}
                >
                  {child}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full glass shadow-lg hover:scale-110 active:scale-95 transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 grid h-11 w-11 place-items-center rounded-full glass shadow-lg hover:scale-110 active:scale-95 transition"
      >
        <ChevronRight size={20} />
      </button>

      {dotsCount > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: dotsCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

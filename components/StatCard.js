"use client";
import { useEffect, useRef, useState } from "react";

export default function StatCard({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const numericValue = parseInt(value);
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 1500;
    const step = Math.max(1, Math.floor(numericValue / (duration / 16)));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
        {typeof count === "number" ? count : value}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className="text-xs text-text-muted uppercase tracking-wider">{label}</p>
    </div>
  );
}

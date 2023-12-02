'use client'
// FadeUp.js
import { ReactNode, useEffect, useRef } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}


const FadeUp = ({ children }: RootLayoutProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className="opacity-0 transform translate-y-4 transition-all duration-500 ease-in-out"
    >
      {children}
    </div>
  );
};

export default FadeUp;

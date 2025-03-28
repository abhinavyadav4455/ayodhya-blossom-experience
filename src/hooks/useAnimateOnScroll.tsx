
import { useEffect, useRef } from 'react';

interface AnimateOptions {
  threshold?: number;
  rootMargin?: string;
  animationClass?: string;
}

export const useAnimateOnScroll = ({
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animated'
}: AnimateOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, animationClass]);

  return ref;
};

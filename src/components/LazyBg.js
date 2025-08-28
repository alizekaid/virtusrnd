import React, { useEffect, useRef, useState } from 'react';

// Lazily applies backgroundImage when the element is near the viewport
const LazyBg = ({ src, className = '', style = {}, children }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const combinedStyle = {
    backgroundImage: isInView ? `url(${src})` : 'none',
    ...style,
  };

  return (
    <div ref={ref} className={className} style={combinedStyle}>
      {children}
    </div>
  );
};

export default LazyBg;



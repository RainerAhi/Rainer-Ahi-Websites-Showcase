import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dot = useRef(null);

  const moveCursor = (e) => {
    const { pageX, pageY } = e;
    dot.current.style.top = `${pageY}px`;
    dot.current.style.left = `${pageX}px`;
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveCursor);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div ref={dot} className="cursor-dot"></div>
  );
};

export default Cursor;
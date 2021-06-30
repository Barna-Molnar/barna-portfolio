import React, { useRef } from 'react';
import ScrollBar from 'smooth-scrollbar-react';

export default function SmoothScrollbar({ children }) {
  const reference = useRef(null);
  return (
    <div ref={reference} damping="0.9">
      {children}
    </div>
  );
}

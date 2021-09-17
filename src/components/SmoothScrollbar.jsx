import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Scrollbar } from 'smooth-scrollbar-react';

export default function SmoothScrollbar({ children }) {
  const reference = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollbar = reference.current;

    scrollbar?.setPosition(0, 0);
  }, [pathname]);

  return (
    <Scrollbar ref={reference} damping="0.1">
      {children}
    </Scrollbar>
  );
}

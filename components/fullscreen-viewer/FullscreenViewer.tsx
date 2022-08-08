import React, { useEffect, useState } from 'react';

type FullscreenViewerProps = React.PropsWithChildren<{ withPointer: boolean }>;

export const FullscreenViewer = ({ children, withPointer }: FullscreenViewerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div>
      <div
        onClick={() => setIsOpen(true)}
        onKeyDown={() => setIsOpen(true)}
        aria-label="view image fullscreen"
        role="button"
        tabIndex={0}
        style={{ cursor: withPointer ? 'pointer' : 'inherit' }}
      >
        {children}
      </div>

      {isOpen && (
        <>
          <div style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2010 }}>
            {children}
          </div>
          <div
            onClick={() => setIsOpen(false)}
            onKeyDown={() => setIsOpen(true)}
            aria-label="view image fullscreen"
            role="button"
            tabIndex={0}
            style={{
              position: 'fixed',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, .75)',
              zIndex: 2000,
              cursor: 'pointer',
            }}
          />
        </>
      )}
    </div>
  );
};

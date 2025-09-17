import React, { useEffect, useRef, useState } from 'react';

function Drawer({ isOpen, onClose, children }) {
  const drawerRef = useRef(null);
  const [dragStartY, setDragStartY] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Detect outside clicks
  useEffect(() => {
    function handleClickOutside(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Touch Events
  const handleTouchStart = (e) => {
    setDragStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || dragStartY === null) return;
    const deltaY = e.touches[0].clientY - dragStartY;
    if (deltaY > 100) {
      onClose();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setDragStartY(null);
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    setDragStartY(e.clientY);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || dragStartY === null) return;
    const deltaY = e.clientY - dragStartY;
    if (deltaY > 100) {
      onClose();
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartY(null);
  };

  // Global mouse event listeners while dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" />
      )}

      {/* Drawer */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={drawerRef}
          className="bg-white rounded-t-xl shadow-xl max-h-[90vh] overflow-y-auto p-4 mx-auto w-full sm:w-[500px]"
        >
          {/* Drag Handle */}
          <div
            className="mx-auto mb-4 w-12 h-1.5 rounded-full bg-gray-400 cursor-grab"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />

          {children}
        </div>
      </div>
    </>
  );
}

export default Drawer;

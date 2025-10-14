"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { X } from '@phosphor-icons/react';

interface DropdownItem {
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'danger';
}

interface GSAPDropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: DropdownItem[];
  triggerRef?: React.RefObject<HTMLElement>;
}

export function GSAPDropdownMenu({ 
  isOpen, 
  onClose, 
  items, 
  triggerRef 
  
}: GSAPDropdownMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isOpen) {
      // Opening animation
      const tl = gsap.timeline();
      
      // Menu scale and fade in
      tl.fromTo(
        menuRef.current,
        { 
          opacity: 0, 
          scaleY: 0,
          y: -10,
        },
        { 
          opacity: 1, 
          scaleY: 1,
          y: 0,
          duration: 0.25, 
          ease: 'back.out(1.7)',
          transformOrigin: 'top'
        }
      );

      // Stagger menu items
      tl.fromTo(
        itemsRef.current.filter(Boolean),
        { 
          opacity: 0, 
          x: -10,
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 0.2,
          stagger: 0.05,
          ease: 'power2.out'
        },
        '-=0.1'
      );
    } else {
      // Closing animation
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(menuRef.current, { clearProps: 'all' });
        }
      });

      tl.to(itemsRef.current.filter(Boolean), {
        opacity: 0,
        x: -10,
        duration: 0.15,
        stagger: 0.03,
        ease: 'power2.in'
      });

      tl.to(
        menuRef.current,
        { 
          opacity: 0, 
          scaleY: 0,
          y: -10,
          duration: 0.2, 
          ease: 'power2.in',
          transformOrigin: 'top'
        },
        '-=0.1'
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="relative">
      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 min-w-[200px] z-50"
        style={{ transformOrigin: 'top right' }}
      >
        {items.map((item, index) => (
          <button
            key={index}
            ref={(el: HTMLButtonElement | null) => { itemsRef.current[index] = el }}
            onClick={() => {
              item.onClick();
              onClose();
            }}
            className={`
              w-full flex items-center gap-2.5 px-3 py-2
              transition-colors duration-150 text-left
              ${item.variant === 'danger' 
                ? 'hover:bg-red-50 text-red-600' 
                : 'hover:bg-gray-50 text-gray-700'
              }
            `}
          >
            {item.icon && <span className="text-lg">{item.icon}</span>}
            <span className="font-medium text-sm">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
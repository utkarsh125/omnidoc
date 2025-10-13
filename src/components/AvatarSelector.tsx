import { X, XIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface AvatarProps {
    currentAvatar: string;
    onAvatarChange: (avatar: string) => void;
    onClose: () => void;
}

const availableAvatars = [
    'vibrent_2.png',
    'vibrent_6.png',
    'vibrent_7.png',
    'vibrent_8.png',
    'vibrent_9.png',
    'vibrent_27.png'
  ];

export default function AvatarSelector({
    currentAvatar,
    onAvatarChange,
    onClose
}: AvatarProps){

    const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar);
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const avatarsRef = useRef<(HTMLButtonElement | null)[]>([]);

    const titleRef = useRef<HTMLHeadingElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);


    //GSAP Refs

    useEffect(() => {
        const ctx = gsap.context(() => {

            //overlay fade in
            gsap.from(overlayRef.current, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            //modal scale and fade in w/ bounce
            gsap.from(modalRef.current, {
                scale: 0.8,
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: "back.out(1.7)"
            });

            //title slide in from left
            gsap.from(titleRef.current, {
                y: -30,
                opacity: 0,
                duration: 0.6,
                delay: 0.2,
                ease: "power3.out"
            });

            //close button rotate in
            gsap.from(closeButtonRef.current, {
                rotate: -90,
                opacity: 0,
                duration: 0.4,
                ease: "back.out(2)"
            });

            //avatar stagger animation --pop in 1by1
            gsap.from(avatarsRef.current, {
                scale: 0,
                opacity: 0,
                rotation: 180,
                duration: 0.6,
                stagger: 0.08,
                delay: 0.4,
                ease: "back.out(1.7"

            });
        });

        return () => ctx.revert();
    }, []);

    const handleSelect = ( avatar: string ) => {
        setSelectedAvatar(avatar);

        //pulse animation on selection
        const selectedIndex = availableAvatars.indexOf(avatar);
        const element = avatarsRef.current[selectedIndex];

        if (element) {
            gsap.to(element, {
                scale: 1.2,
                duration: 0.2,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            });
        }

        onAvatarChange(avatar);
    }

    //handle close
    const handleClose=()=>{
        
        //exit animations
        gsap.to(modalRef.current, {
            scale: 0.8,
            opacity: 9,
            y: 50,
            duration: 0.3,
            ease: "power2.in"
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: onClose
        });

        gsap.to(titleRef.current, {
            y: -30,
        })
    }

    const handleAvatarHover = ( index: number, isHovering: boolean ) => {

        const element = avatarsRef.current[index];

        if(element){
            gsap.to(element, {
                scale: isHovering ? 1.15 : 1,
                rotation: isHovering ? 5: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };


    return (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50" 
          onClick={handleClose}
        >
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 ref={titleRef} className="text-2xl font-semibold">Choose Your Avatar</h2>
              <button 
                ref={closeButtonRef}
                onClick={handleClose} 
                className="hover:bg-gray-100 rounded-full p-2 transition-colors"
              >
                <XIcon size={24} />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {availableAvatars.map((avatar, index) => (
                <button
                  key={avatar}
                  ref={(el) => { avatarsRef.current[index] = el; }}
                  onClick={() => handleSelect(avatar)}
                  onMouseEnter={() => handleAvatarHover(index, true)}
                  onMouseLeave={() => handleAvatarHover(index, false)}
                  className={`relative rounded-full overflow-hidden transition-all duration-200 ${
                    selectedAvatar === avatar 
                      ? 'ring-4 ring-blue-500' 
                      : 'hover:ring-2 hover:ring-gray-300'
                  }`}
                >
                  <Image 
                    src={`/${avatar}`} 
                    width={80} 
                    height={80} 
                    alt={avatar}
                    className="rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      );

}
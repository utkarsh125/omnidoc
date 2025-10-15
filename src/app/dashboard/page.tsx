"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { SpotlightButton } from '@/components/ui/spotlight-button';
import { DotsThreeCircleIcon, PlusIcon, TrashIcon, GearFineIcon, SignOutIcon } from '@phosphor-icons/react';
import { GSAPDropdownMenu } from '@/components/dropdown-menu';
import Image from 'next/image';
import AvatarSelector from '@/components/AvatarSelector';
import DocumentList from '@/components/DocumentList';
import { SettingsModal } from '@/components/setting-modal';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface Document {
  id: string;
  title: string;
  content: string;
  description?: string;
  updatedAt: string;
  collaborators: Array<{
    id: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
  }>;
}

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem('userCache');
    if (cached) {
      setUser(JSON.parse(cached));
    }
    setMounted(true);
  }, []);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();


  useEffect(() => {
    fetchUserDetails();
    fetchDocuments();
  }, []);

  const fetchUserDetails = async () => {
    try {
      const response = await axios.get("/api/auth/user-details", {
        withCredentials: true,
      });
      if (response.data) {
        setUser(response.data);

        //caching user data in localStorage
        localStorage.setItem('userCache', JSON.stringify(response.data));
      }
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  };

  const fetchDocuments = async () => {
    try {
      const response = await axios.get("/api/documents", {
        withCredentials: true,
      });
      if (response.data) {
        setDocuments(response.data);
      }
    } catch (error) {
      console.error("Error fetching documents: ", error);
    } finally {
      setIsLoading(false);
    }
  };


  const handleCreateDocument = async () => {
    setIsCreating(true);
    try {
      const response = await axios.post("/api/documents", {
        title: "Untitled Document",
        content: "",
      }, {
        withCredentials: true,
      });
      
      if (response.data) {
        // Navigate to the collaborative editor with the new document
        router.push(`/collaborative?document=${response.data.id}`);
      }
    } catch (error) {
      console.error("Error creating document: ", error);
    } finally {
      setIsCreating(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await axios.post("/api/auth/signout", {}, { withCredentials: true });

      //clear cache on sign out
      localStorage.removeItem('userCache');
      router.push('/signin');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuIconRef.current && !menuIconRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const handleAvatarSelector = async (avatar: string ) => {
    try {
      
      const response = await axios.patch("/api/auth/user-details", 
        { avatar},
        { withCredentials: true}
      )

      if(response.data){
        setUser(response.data);

        //update cache with new avatar
        localStorage.setItem('userCache', JSON.stringify(response.data));
        setShowAvatarSelector(false);
      }
    } catch (error) {
      console.error("Error updating avatar: ",error);
    }
  }


  return (
    <div className="min-h-screen mt-52 mx-auto max-w-7xl p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* User Avatar */}
          <div 
            onClick={() => setShowAvatarSelector(true)}
            className="cursor-pointer hover:scale-110 transition-all duration-300 relative group"
          >
            {mounted && (
              <Image 
                src={user?.avatar ? `/${user.avatar}` : '/vibrent_2.png'} 
                width={48}
                height={48}
                className="rounded-full" 
                alt="User avatar"
                priority
              />
            )}
            <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-xs font-semibold">Edit</span>
            </div>
          </div>
          
          <div>
            <h1 className="text-5xl font-regular text-gray-900">
              {getGreeting()}, {user?.name || 'User'}...
            </h1>
          </div>
        </div>
        
        {/* Options Menu */}
        <div className="relative">
          <div 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <DotsThreeCircleIcon 
              className='w-12 h-12 !text-gray-900'
              style={{ 
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease'
              }}
            />
          </div>
          <GSAPDropdownMenu
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            items={[
              
              //TODO: Add notifications later
              // {
              //   label: 'Notifications',
              //   icon: <BellIcon weight="duotone" />,
              //   onClick: () => router.push('/notifications')
              // },
              {
                label: 'Settings',
                icon: <GearFineIcon weight="duotone" />,
                onClick: () => setIsSettingsOpen(true)
              },
              {
                label: 'Sign Out',
                icon: <SignOutIcon weight="duotone" />,
                onClick: handleSignOut,
                variant: 'danger'
              }
            ]}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className=" rounded-2xl p-8 min-h-[600px] relative overflow-hidden">
        {/* New Document Button */}
        <div className="flex justify-between mb-6">

          {/* Document Name Header */}
        <h2 className="text-3xl font-regular text-gray-800">Document Name</h2>
          <SpotlightButton 
            innerColor="rgb(215,240,255)"
            outerColor="rgb(100,180,255)"
            hoverInnerColor="rgb(190,230,255)"
            hoverOuterColor="rgb(80,160,255)"
            
            
            colorDuration={0.7}
          
            onClick={handleCreateDocument}
            disabled={isCreating}
            className="group transition-all duration-300"
          >
            <span className="flex items-center gap-2 tracking-tight text-sm font-medium text-gray-800">
              <PlusIcon size={16} weight="bold" className="hover:rotate-180 transition-all duration-500" />
              <span>{isCreating ? "Creating..." : "New Document"}</span>
            </span>
          </SpotlightButton>
        </div>

        

        {/* Documents List */}
        <DocumentList documents={documents} isLoading={isLoading} onRefresh={fetchDocuments}/>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          {/* Trash Icon */}
          <div className="gap-2 flex items-center cursor-pointer hover:text-red-500 justify-center">
            <TrashIcon size={35} weight="bold" className="text-black" />
            <h3 className='text-2xl font-regular text-gray-800'>Trash</h3>
          </div>
        </div>

        {/* Gradient Footer */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
          style={{
            background: `
            linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(219, 234, 254, 0.3) 30%,
                rgba(219, 234, 254, 0.8) 70%,
                rgba(219, 234, 254, 1) 100%
              )
            `
          }}
        />
      </div>

      {showAvatarSelector && (
        <AvatarSelector
          currentAvatar={user?.avatar || 'vibrent_2.png'}
          onAvatarChange={handleAvatarSelector}
          onClose={() => setShowAvatarSelector(false)}
        />
      )}

      {isSettingsOpen && (
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
}
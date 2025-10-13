"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { SpotlightButton } from '@/components/ui/spotlight-button';
import { Plus, DotsThreeVertical, Trash, PaperPlaneTilt, DotsThreeVerticalIcon, DotsThreeCircleIcon, PlusIcon } from '@phosphor-icons/react';
import Image from 'next/image';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface Collaborator {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface Document {
  id: string;
  title: string;
  content: string;
  description?: string;
  updatedAt: string;
  collaborators: Collaborator[];
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
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

  const handleDocumentClick = (documentId: string) => {
    router.push(`/collaborative?document=${documentId}`);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getCollaboratorColors = () => [
    'bg-red-500',
    'bg-blue-500', 
    'bg-yellow-500',
    'bg-green-500',
    'bg-purple-500'
  ];

  return (
    <div className="min-h-screen mt-52 mx-auto max-w-7xl p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {/* User Avatar */}
          
          <Image src={user?.avatar || '/vibrent_2.png'} width={48}
            height={48}
            className="rounded-full" alt={'User avatar'} />
            
          
          <div>
            <h1 className="text-5xl font-regular text-gray-900">
              {getGreeting()}, {user?.name || 'User'}...
            </h1>
          </div>
        </div>
        
        {/* Options Menu */}
        <div className="cursor-pointer hover:scale-110 transition-all duration-300">
          <DotsThreeCircleIcon className='w-12 h-12'/>
        </div>
      </div>

      {/* Main Content Area */}
      <div className=" rounded-2xl p-8 min-h-[600px] relative overflow-hidden">
        {/* New Document Button */}
        <div className="flex justify-end mb-6">
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

        {/* Document Name Header */}
        <h2 className="text-3xl font-regular text-gray-800 mb-6">Document Name</h2>

        {/* Documents List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="flex items-center tracking-tight justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-200"></div>
            </div>
          ) : documents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No documents yet. Create your first document!</p>
            </div>
          ) : (
            documents.slice(0, 4).map((doc, index) => (
              <div 
                key={doc.id}
                onClick={() => handleDocumentClick(doc.id)}
                className="flex items-center justify-between mx-5 cursor-pointer"
              >
                <div className="flex-1">
                  <h3 className="font-extralight text-gray-800 text-lg">
                    {doc.title || "Untitled Document"}
                  </h3>
                </div>

                {/* Collaborators */}
                <div className="flex items-center gap-3">
                  {doc.collaborators && doc.collaborators.length > 0 && (
                    <div className="flex -space-x-2">
                      {doc.collaborators.slice(0, 3).map((collaborator, collabIndex) => (
                        <div
                          key={collaborator.id}
                          className={`w-8 h-8 rounded-full ${getCollaboratorColors()[collabIndex % getCollaboratorColors().length]} flex items-center justify-center text-white text-xs font-semibold`}
                          title={collaborator.user.name}
                        >
                          {getInitials(collaborator.user.name)}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Document Options */}
                  <div className='cursor-pointer hover:scale-110 hover:bg-slate-100 rounded-full transition-all duration-300'>
                    <DotsThreeVerticalIcon className='w-5 h-5' />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
          {/* Trash Icon */}
          <div className="w-8 h-8 flex items-center justify-center">
            <Trash size={20} weight="bold" className="text-gray-400" />
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
    </div>
  );
}
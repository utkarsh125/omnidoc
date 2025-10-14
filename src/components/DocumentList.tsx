"use client";

import React, { useEffect, useRef, useState } from 'react';
import { DotsThreeVerticalIcon, PencilSimpleIcon, TrashIcon, TextTIcon } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import { GSAPDropdownMenu } from '@/components/dropdown-menu';
import axios from 'axios';

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

interface DocumentListProps {
  documents: Document[];
  isLoading: boolean;
}

export default function DocumentList({ documents, isLoading }: DocumentListProps) {
  const router = useRouter();
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

  const handleDocumentClick = (documentId: string) => {
    router.push(`/collaborative?document=${documentId}`);
  };

  const handleRename = async(documentId: string, currentTitle: string) => {

    //show a modal to rename the document
    const newTitle = prompt("Enter new Title: ", currentTitle);
    if(!newTitle) return;

    //call in the PUT request to update the docTitle
    await axios.put(`/api/documents/${documentId}`, 
      {title: newTitle},
      {withCredentials: true}
    )
    //refresh the doclist
    router.push(`/dashboard`);
  }

  const handleEdit = (documentId: string) => {
    router.push(`/collaborative?document=${documentId}`);
    setOpenDropdownIndex(null);
  };

  const handleDelete = async (documentId: string) => {
    // TODO: Implement delete functionality
    console.log('Delete document:', documentId);
    setOpenDropdownIndex(null);
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

  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdownIndex !== null) {
        const target = event.target as HTMLElement;
        if (!target.closest('.relative')) {
          setOpenDropdownIndex(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownIndex]);

  // Hover animation for each title
  const handleDocumentHover = (index: number, isEntering: boolean) => {
    const title = titleRefs.current[index];
    if (!title) return;

    if (isEntering) {
      gsap.to(title, {
        x: 10,
        color: '#3b82f6', //blue-500
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(title, {
        x: 0,
        color: '#1f2937', //gray-800
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };
  
  useEffect(() => {
    if(!isLoading && documents.length > 0){

      //get all document title elements
      const titles = document.querySelectorAll('[data-document-title]');

      gsap.fromTo(
        titles, 
        {
          opacity: 0,
          x: -20,
          scale: 0.95,
        }, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration : 0.4,
          stagger: 0.08,
          ease: 'back.out(1.2)'
        }
      )
    }
  }, [isLoading, documents.length]);


  
  return (
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
            onMouseEnter={() => handleDocumentHover(index, true)}
            onMouseLeave={() => handleDocumentHover(index, false)}
            className="flex items-center justify-between mx-5 cursor-pointer"
          >
            <div className="flex-1">
              <h3 
                ref={(el) => { titleRefs.current[index] = el }}
                data-document-title 
                className="font-extralight cursor-pointer text-gray-800 text-lg"
              >
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
              <div className='relative'>
                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                  }}
                  onMouseEnter={(e) => e.stopPropagation()}
                  onMouseLeave={(e) => e.stopPropagation()}
                  className='cursor-pointer hover:scale-110 hover:bg-slate-300 rounded-full transition-all duration-300 p-1'
                >
                  <DotsThreeVerticalIcon className='w-6 h-6 !text-gray-900' />
                </div>

                <div onClick={(e) => e.stopPropagation()}>
                  <GSAPDropdownMenu
                    isOpen={openDropdownIndex === index}
                    onClose={() => setOpenDropdownIndex(null)}
                    items={[
                    {
                      label: 'Rename',
                      icon: <TextTIcon weight="duotone" />,
                      onClick: () => handleRename(doc.id, doc.title)
                    },
                    {
                      label: 'Edit',
                      icon: <PencilSimpleIcon weight="duotone" />,
                      onClick: () => handleEdit(doc.id)
                    },
                    {
                      label: 'Delete',
                      icon: <TrashIcon weight="duotone" />,
                      onClick: () => handleDelete(doc.id),
                      variant: 'danger'
                    }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

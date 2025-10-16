'use client'

import { useState, useRef } from 'react'
import { DotsThreeCircleIcon, FloppyDiskBackIcon, PencilIcon, TrashIcon } from '@phosphor-icons/react'
import { GSAPDropdownMenu } from '@/components/dropdown-menu'
import gsap from 'gsap'

interface DocumentActionsProps {
  onSave: () => void
  onRename: (newName: string) => void
  onDelete: () => void
  showDelete?: boolean
}

export function DocumentActions({ onSave, onRename, onDelete, showDelete = true }: DocumentActionsProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const menuIconRef = useRef<HTMLDivElement>(null)

  // Toggle dropdown and animate icon
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    
    if (menuIconRef.current) {
      gsap.to(menuIconRef.current, {
        rotation: isDropdownOpen ? 0 : 90,
        duration: 0.3,
        ease: 'power2.out'
      })
    }
  }

  // Handle rename with prompt
  const handleRename = () => {
    const newName = window.prompt('Enter new document name:', 'Untitled Document')
    if (newName) {
      onRename(newName)
    }
  }

  // Handle delete with confirmation
  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this document?')
    if (confirmed) {
      onDelete()
    }
  }

  const dropdownItems = [
    {
      label: 'Save',
      icon: <FloppyDiskBackIcon size={20} />,
      onClick: onSave,
    },
    {
      label: 'Rename',
      icon: <PencilIcon size={20} />,
      onClick: handleRename,
    },
    ...(showDelete ? [{
      label: 'Delete',
      icon: <TrashIcon size={20} />,
      onClick: handleDelete,
      variant: 'danger' as const,
    }] : []),
  ]

  return (
    <div className="relative">
      <div
        ref={menuIconRef}
        onClick={toggleDropdown}
        className="cursor-pointer"
      >
        <DotsThreeCircleIcon
          size={30}
          className="text-gray-700 hover:text-blue-500 transition-colors"
        />
      </div>
      <GSAPDropdownMenu
        isOpen={isDropdownOpen}
        onClose={() => {
          setIsDropdownOpen(false)
          if (menuIconRef.current) {
            gsap.to(menuIconRef.current, {
              rotation: 0,
              duration: 0.3,
              ease: 'power2.out'
            })
          }
        }}
        items={dropdownItems}
      />
    </div>
  )
}


import { X } from "@phosphor-icons/react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({
    isOpen,
    onClose,
    title,
    children
} : ModalProps){

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[800px] max-w-[90vw] max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl mb-4 text-gray-900">{title}</h2>
            {children}
          </div>
        </div>
    );
} 
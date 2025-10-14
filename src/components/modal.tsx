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
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
            {children}
          </div>
        </div>
    );
} 
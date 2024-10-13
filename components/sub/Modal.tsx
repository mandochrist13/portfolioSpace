import React from 'react';
import Image from 'next/image';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
  }

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className=' inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='relative w-[80%] h-auto flex flex-col items-center bg-white p-4 rounded-lg'>
                <button className='text-black text-xl self-end' onClick={onClose}>X</button>
                <Image
                    src="/CV-mando.png"
                    priority
                    quality={100}
                    alt="image christo"
                    className=" object-contain w-full"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    );
}

export default Modal;

import { PlusIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import CreateDripModal from './CreateDripModal';

const CreateDripButton = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <>
            <button
                type="button"
                onClick={toggleModal}
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
                <PlusIcon className='mr-2 -ml-0.5 h-4 w-4'/>
                <span>New Drip</span>
            </button>

            {isModalOpen && <CreateDripModal />}
        </>
    );
};

export default CreateDripButton;

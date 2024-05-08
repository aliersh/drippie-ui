import { PlusIcon } from '@heroicons/react/24/solid'

const CreateDripButton = () => {
    return (
        <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            <PlusIcon className='mr-2 -ml-0.5 h-4 w-4'/>
            <span>New Drip</span>
        </button>
    );
};

export default CreateDripButton;

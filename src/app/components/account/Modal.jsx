import React from 'react'

function Modal({toggleModal, setToggleModal}) {
    return (
        toggleModal && (
            <div class="absolute z-10 inset-0 overflow-y-auto md:top-44 lg:top-44 sm:top-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>


                    {/* <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span> */}


                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <div class="mt-2">
                                        <p class="text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sequi, quod quidem dolorem ipsa earum reiciendis, voluptatibus est veniam alias sunt ullam distinctio nam doloribus reprehenderit perferendis labore ut. Laudantium.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button onClick={() => setToggleModal(!toggleModal)} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Fermer Modal
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default Modal

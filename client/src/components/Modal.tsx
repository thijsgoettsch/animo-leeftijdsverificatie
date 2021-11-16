/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useRef, useState} from "react";
import {Route, Switch, useLocation} from "react-router-dom";
import {Dialog, Transition} from "@headlessui/react";

import {Home} from "./Home";
import {Invitation} from "./Invitation";
import {Proof} from "./Proof";
import {Credential} from "./Credential";

function Modal() {
    const cancelButtonRef = useRef(null);
    let [isOpen, setOpen] = useState(true);
    const location = useLocation();

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"  />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="flex justify-center" aria-hidden="true">
            &#8203;
          </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all  md:w-auto h-auto">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="border-b-2 rounded-tl-lg rounded-tr-lg p-2 flex">
                                    <Dialog.Title className="flex-1 text-center text-lg leading-6 font-medium text-gray-900">
                                        Proof-verification
                                    </Dialog.Title>
                                    <div className="rounded-full h-3 w-3 circle bg-green">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                                            <span aria-hidden="true" onClick={() => setOpen(false)}>&times;</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                <div>
                                                    <Switch location={location} key={location.pathname}>
                                                        <Route path="/" exact>
                                                            <Home />
                                                        </Route>
                                                        <Route path="/invitation" exact>
                                                            <Invitation />
                                                        </Route>
                                                        <Route path="/credential" exact>
                                                            <Credential />
                                                        </Route>
                                                        <Route path="/proof" exact>
                                                            <Proof />
                                                        </Route>
                                                    </Switch>
                                                </div>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
export default Modal;

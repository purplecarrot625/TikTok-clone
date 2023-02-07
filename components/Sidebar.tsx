import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import GoogleLogin from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
    {/*const is from React Hooks const[The current state value, a fuction that allow you to update it] */ }
    const [showSidebar, setShowSidebar] = useState(true)
    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded'
    const userProfile = false

    return (
        <div>
            <div className="block xl:hidden m-2 ml-4 mt-3 text-xl" onClick={() => setShowSidebar((prev) => !prev)}> {/**call back function 与prev state不同的时候切换，这是react中的要求 */}
                {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}

                {/*for extra large device, sidebar hidden, the sidebar is only for small devices */}
            </div>
            {showSidebar && (
                <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
                    <div className="xl:border-b-2 border-gray-200 xl:pb-4">
                        <Link href="/"> 
                            <div className={normalLink}> 
                                <p className="text-2xl">
                                    <AiFillHome />
                                </p>
                                <span className="text-xl hidden xl:block">
                                    For you
                                </span>
                            </div>
                        </Link>
                    </div>
                    {/* {!userProfile && (
                        <div className="px-2 py-4 hidden xl:block">
                            <p className="text-gray-400">
                                Log in to like and comment on videos
                            </p>
                            <div className="pr-4">
                                <GoogleLogin clientId=""
                                    render={(renderProps) => (
                                        <button
                                            className="bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997] cursor-pointer"
                                            onClick={renderProps.onClick}
                                            disabled={renderProps.disabled}
                                        >
                                            Log in
                                        </button>

                                    )}
                                    onSuccess={() => { }}
                                    onFailure={() => { }}
                                    cookiePolicy='single_host_origin'
                                />
                            </div>
                        </div>
                    )} */}
                    {/* components */}
                    <Discover />
                    <SuggestedAccounts />
                    <Footer />
                </div>
            )}

        </div>
    );
};

export default Sidebar;

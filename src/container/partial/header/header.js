import React, { useState } from 'react'
import NavBrand from '../../../static/assets/images/nav_brand.png'
import SampleProfile from '../../../static/assets/images/sample_profile.png'
import './header.css'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {logOut} from '../../../redux/authentication/actionCreator'

let Asd = (DisplayState, DisplaySetstate) => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.auth);

    const history = useHistory();

    const LogoutHandler = async (values) => {
        dispatch(logOut(history))
    };

    if(DisplayState === true){
        return(
            <div id="profile-popup-modal" onMouseLeave={() => DisplaySetstate(false)} className="flex fixed flex-col w-32 h-52 pl-2 pr-2 pt-16 bg-white rounded shadow-lg border-2 border-primeOrange" style={{zIndex: -10, top:6, right:6}}>
                <a href="#" className="grid grid-cols-12 group cursor-pointer hover:bg-gray-200 rounded">
                    <div className="col-span-3">
                        <svg className="h-5 w-5 mt-2 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="text-shadyGray group-hover:text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <div className="col-span-9">
                        <p className="my-1 ml-2 text-lg font-bold text-shadyGray group-hover:text-primeGray">Profile</p>
                    </div>
                </a>
                <a href="#" className="grid grid-cols-12 group cursor-pointer hover:bg-gray-200 rounded">
                    <div className="col-span-3">
                        <svg className="h-6 w-6 mt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="text-shadyGray group-hover:text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path className="text-shadyGray group-hover:text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="col-span-9">
                        <p className="my-1 ml-2 text-lg font-bold text-shadyGray group-hover:text-primeGray">Settings</p>
                    </div>
                </a>
                <hr className="my-1"/>
                <a onClick={LogoutHandler} className="grid grid-cols-12 group cursor-pointer hover:bg-gray-200 rounded">
                    <div className="col-span-3">
                        <svg className="h-6 w-6 mt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path className="text-shadyGray group-hover:text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                    </div>
                    <div className="col-span-9">
                        <p className="my-1 ml-2 text-lg font-bold text-shadyGray group-hover:text-primeGray">Logout</p>
                    </div>
                </a>
            </div>
        )
    }
}

function Header(){
    const [DisplayState, DisplaySetstate] = useState(false)
    
    return(
        <>
            <div className="flex flex-row justify-between items-center w-full px-4 h-20 bg-white shadow-lg">
                <a href="/dashboard" className="no-underline"><img className="h-12" src={NavBrand} alt="brand-logo"/></a>
                <div className="flex relative justify-center items-center h-12 w-12 rounded-full bg-primeOrange" style={{zIndex:100}}>
                    <div id="profile-popup-anchor" onMouseEnter={() => DisplaySetstate(true)} className="h-12 w-12 rounded-full">
                        <button className="w-full h-full focus:outline-none rounded-full">
                            <img className="w-full h-full border-primeOrange border-2 rounded-full" src={SampleProfile} alt="sample profile"/>
                        </button>
                    </div>

                    {/* user on hover popup */}
                    {
                        DisplayState ? Asd(DisplayState, DisplaySetstate) : Asd(DisplayState, DisplaySetstate)
                    }
                </div>
            </div>
        </>
    )
}

export default Header
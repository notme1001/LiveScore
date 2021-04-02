import React, {useRef, useState} from 'react'
import LogoLive from '../../static/assets/icons/logolive.png'
import {Link} from 'react-router-dom'

const Navigation = () => {
    const navigationMobileRef = useRef(null)
    const mobileIconRef = useRef(null)
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    const toggleMobileNavigation = () => {
        navigationMobileRef.current.classList.add('touched')
        navigationMobileRef.current.classList.toggle('translate-x-full')
        setMobileNavOpen(!mobileNavOpen)
    }

    return(
        <>
            <nav className="flex items-center justify-between flex-wrap bg-grey-darkest w-full pin-t p-8">
                <div className="flex items-center justify-end px-4">
                    <Link to="/">
                    <img
                        src={LogoLive}
                        alt="Soccerr right img"
                        className="lazyautosizes lazyloaded"
                    />
                    </Link>
                </div>

                <div className="lg:hidden">
                    <button id="nav-toggle" className="flex items-center px-3 py-2 border-0 rounded text-grey text-white text-bold">
                        <div
                            ref={mobileIconRef}
                            onClick={toggleMobileNavigation}
                            className="iconNav order-3 h-6 w-5 cursor-pointer relative"
                            >
                            <span
                                className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-white dark:bg-orange rounded-lg left-0 ${
                                mobileNavOpen ? 'rotate-135 top-2' : 'rotate-0'
                                }`}
                            ></span>
                            <span
                                className={`absolute transition duration-300 ease-in-out h-1 w-full bg-white dark:bg-orange rounded-lg left-0 top-2 ${
                                mobileNavOpen ? 'opacity-0 -left-40' : 'opacity-100'
                                }`}
                            ></span>
                            <span
                                className={`transform transition duration-300 ease-in-out absolute h-1 w-full bg-white dark:bg-orange rounded-lg left-0 ${
                                mobileNavOpen ? '-rotate-135 top-2' : 'rotate-0 top-4'
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>

                <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${!mobileNavOpen ? 'hidden' : 'py-5'} lg:block lg:pt-0`} id="nav-content">
                    <ul ref={navigationMobileRef} className="list-reset lg:flex justify-end flex-1 items-center">
                        <li className="mr-3">
                            <Link to="/" className="inline-block py-2 px-4 text-white no-underline" href="#">
                                <div className="flex items-center justify-center flex-1 h-full py-1 px-6 bg-gray-800 rounded-xl">
                                    <p className="text-lg font-semibold text-white">Home</p>
                                </div>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">
                                <p className="text-lg font-medium text-white">Player</p>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">
                                <p className="text-lg font-medium text-white">Fifa Ranking</p>
                            </Link>
                        </li>
                        <li className="mr-3">
                            <Link className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4" href="#">
                                <p className="text-lg font-medium text-white">Season</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation
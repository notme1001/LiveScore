import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHome, faCity, faClipboard, faClinicMedical, faHouseUser, faBell } from '@fortawesome/free-solid-svg-icons'


function styleHandler(menuTitle){
    let currentPathname = window.location.pathname
    return currentPathname === menuTitle ? "active-menu" : "idle-menu"
}

function Sidebar(){

    const { role, token, } = useSelector(state => {
		return {
			// isLoggedIn: state.auth.login,
			role: state.auth.role,
		};
	});

    styleHandler()
    return(
        <>
            <div className="flex flex-col w-64 relative bg-primeOrange" style={{minHeight:"87.6vh"}}>
                <Link id="sidebar-menu-dashboard" className={styleHandler("/dashboard")} to="/dashboard">
                    <FontAwesomeIcon icon={faHome} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Dashboard</p>
                </Link>
                <Link id="sidebar-menu-rekap" className={styleHandler("/rekap")} to="/rekap">
                    <FontAwesomeIcon icon={faClipboard} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Rekap Data</p>
                </Link>
                <Link id="sidebar-menu-notifikasi" className={styleHandler("/notifikasi")} to="/notifikasi">
                    <FontAwesomeIcon icon={faBell} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Notifikasi</p>
                </Link>
                <Link id="sidebar-menu-users" className={styleHandler("/users")} to="/users">
                    <FontAwesomeIcon icon={faUsers} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Manajemen Kader</p>
                </Link>
                <Link id="sidebar-menu-kelurahan" className={styleHandler("/kelurahan")} to="/kelurahan">
                    <FontAwesomeIcon icon={faCity} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Manajemen Kelurahan</p>
                </Link>
                <Link id="sidebar-menu-kecamatan" className={styleHandler("/kecamatan")} to="/kecamatan">
                    <FontAwesomeIcon icon={faHouseUser} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Manajemen Kecamatan</p>
                </Link>
                <Link id="sidebar-menu-dinkes" className={styleHandler("/dinkes")} to="/dinkes">
                    <FontAwesomeIcon icon={faClinicMedical} style={{color:"#fff"}}/>
                    <p className="ml-3 text-white font-bold">Manajemen Dinkes</p>
                </Link>
                {role === "admin" && (<Link id="sidebar-menu-admin" className={styleHandler("/admin")} to="/admin">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="ml-3 text-white font-bold">Admin</p>
                </Link>)}
                {/* <Link id="sidebar-menu-tadal" className={styleHandler("/tadal")} to="/tadal">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path className="text-primeGray" d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path className="text-primeGray" fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-primeGray font-bold">Data Lapor</p>
                </Link>
                <Link id="sidebar-menu-notfi" className={styleHandler("/notfi")} to="/notfi">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <p className="ml-3 text-primeGray font-bold">Notifikasi</p>
                </Link>
                <Link id="sidebar-menu-bastik" className={styleHandler("/bastik")} to="/bastik">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <p className="ml-3 text-primeGray font-bold">Angka Bebas Jentik</p>
                </Link>
                <Link id="sidebar-menu-rewa" className={styleHandler("/rewa")} to="/rewa">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <p className="ml-3 text-primeGray font-bold">Reward</p>
                </Link>
                <Link id="sidebar-menu-inkas" className={styleHandler("/inkas")} to="/inkas">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path className="text-primeGray" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="ml-3 text-primeGray font-bold">Input Kasus BSD</p>
                </Link> */}
                
            </div>
        </>
    )
}

export default Sidebar
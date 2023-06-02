import React from 'react'
import "./Navbar.css"
import logo from "./logo.png"
import SearchBar from './SearchBar/SearchBar'
import { RiVideoAddLine } from "react-icons/ri";
import { BiUserCircle } from "react-icons/bi"
import { IoMdNotificationsOutline } from "react-icons/io";

function Navbar() {
    // const CurrentUser = null;
    const CurrentUser = {
        result: {
            email: "xyz@gmail.com",
            joinedOn: "2222-07-15T09:57:23.4892",
        },
    };
    return (
        <div className="container_Navbar">
            <div className="Burger_Logo_Navbar">
                <div className="burger">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className='logo_div_Navbar'>
                    <img src={logo} alt="" />
                    <p className='logo_title_navbar'>YouTube</p>
                </div>
            </div>
            <SearchBar />
            <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
            <div className="apps_Box">
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
            </div>
            <IoMdNotificationsOutline size={22} className="vid_bell_Navbar" />
            <div className="Auth_cont_Navbar">
                {
                    CurrentUser ? (
                        <>
                            <div className="Chanel_logo_App">
                                <p className="fstChar_logo_App">
                                    {
                                        CurrentUser?.result.name ? (
                                            <>
                                                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                                            </>
                                        ):(<>
                                            {CurrentUser?.result.email.charAt(0).toUpperCase()}
                                        </>)
                                    }
                                </p>
                            </div>
                        </>
                    ) : (
                        <>

                            <p className="Auth_Btn">
                                <BiUserCircle size={22} />
                                <b>Sign in</b>
                            </p>
                        </>
                    )}
            </div>
        </div>
    );
}

export default Navbar
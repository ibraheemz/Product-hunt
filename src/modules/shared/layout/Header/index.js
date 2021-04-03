import { useState } from 'react'
import { ThreeDots, Search } from 'react-bootstrap-icons'
import LoginModal from '../../../login&signup/LoginModal'
import SignUpModal from '../../../login&signup/SignUpModal'
import SiteLogo from '../../../../assests/images/gaming-logo.png'
import $ from 'jquery'
const Header = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    console.log($(window).width())
    // Open the full screen search box
    function openSearch() {
        document.getElementById('searchOverlay').style.display = 'block'
    }

    // Close the full screen search box
    function closeSearch() {
        document.getElementById('searchOverlay').style.display = 'none'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm">
                <div className="container">
                    <img
                        className="navbar-brand"
                        src={SiteLogo}
                        href="/"
                        alt="app-logo"
                        width="50"
                        height="54"
                    ></img>

                    <form className="d-flex input-group-sm col-4">
                        {$(window).width() <= 768 ? (
                            <div onClick={() => openSearch()}>
                                <Search />
                            </div>
                        ) : (
                            <input
                                className="form-control me-2 nav-search-sm"
                                type="search"
                                placeholder={
                                    'Discover your new favorite thing...'
                                }
                                aria-label="Search"
                            ></input>
                        )}
                    </form>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Discussion
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Deals
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Jobs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Ship
                                </a>
                            </li>
                            <div className="nav-item dropdown">
                                <button
                                    className="btn btn-white"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <ThreeDots />
                                </button>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <a className="dropdown-item" href="#">
                                        Advertise
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Collections
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Mentors
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="login-form d-flex align-items-center">
                        <button
                            className="btn btn-outline-secondary m-2 btn-sm"
                            onClick={() => setShowLogin(true)}
                        >
                            LOG IN
                        </button>
                        <button
                            className="btn btn-danger m-2 btn-sm"
                            onClick={() => setShowSignUp(true)}
                        >
                            SIGN UP
                        </button>
                    </div>
                    <LoginModal
                        show={showLogin}
                        onHide={() => setShowLogin(false)}
                    />
                    <SignUpModal
                        show={showSignUp}
                        onHide={() => setShowSignUp(false)}
                    />
                </div>
            </nav>
            <div id="searchOverlay" className="overlay">
                <span
                    className="closebtn"
                    onClick={() => closeSearch()}
                    title="Close Overlay"
                >
                    x
                </span>
                <div className="overlay-content">
                    <div className="search-icon-span">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="bi bi-search"></i>
                        </span>
                    </div>
                    <input
                        type="text"
                        placeholder="Discover your new favorite thing..."
                        name="search"
                        className="overlay-search"
                    ></input>
                </div>
            </div>
        </div>
    )
}
export default Header

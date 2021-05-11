import { useState } from 'react'
import { ThreeDots, Search } from 'react-bootstrap-icons'
import SearchResults from './SearchResults'
import LoginModal from '../../../login&signup/LoginModal'
import SignUpModal from '../../../login&signup/SignUpModal'
import ProductHuntLogo from '../../../../assests/images/product-hunt-vertical-logo-red.png'
import $ from 'jquery'
const Header = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    const [value, setValue] = useState('')
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
            <nav className="navbar navbar-expand-sm navbar-light bg-white shadow-sm fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img
                            src={ProductHuntLogo}
                            alt="app-logo"
                            width="50"
                            height="54"
                        ></img>
                    </a>

                    <form className="d-flex input-group-sm col-4">
                        {$(window).width() <= 768 ? (
                            <div onClick={() => openSearch()}>
                                {/* <Search /> */}
                                <input
                                    className="form-control me-2 no-border"
                                    type="search"
                                    placeholder={'Search Here ...'}
                                    aria-label="Search"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                ></input>
                            </div>
                        ) : (
                            <input
                                className="form-control me-2 nav-search-sm no-border"
                                type="search"
                                placeholder={
                                    'Discover your new favorite thing...'
                                }
                                aria-label="Search"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                onClick={() => openSearch()}
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
                                    href="/discussion?ref=header_nav"
                                >
                                    Discussion
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/deals?ref=header_nav"
                                >
                                    Deals
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/jobs?ref=header_nav"
                                >
                                    Jobs
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="/ship?ref=header_nav"
                                >
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
                                    <a
                                        className="dropdown-item"
                                        href="/advertise?ref=header_nav"
                                    >
                                        Advertise
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="collections?ref=header_nav"
                                    >
                                        Collections
                                    </a>
                                    <a
                                        className="dropdown-item"
                                        href="mentors?ref=header_nav"
                                    >
                                        Mentors
                                    </a>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="login-form d-flex align-items-center">
                        <button
                            id="grey-border"
                            className="btn m-2 btn-sm"
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
            <div
                id="searchOverlay"
                className="overlay"
                onClick={(e) => {
                    $(e.target).hasClass('result') ||
                    $(e.target).hasClass('list-item-image-container') ||
                    $(e.target).hasClass('list-item-image') ||
                    $(e.target).hasClass('list-item-desc') ||
                    $(e.target).prop('nodeName') === 'SPAN' ||
                    $(e.target).prop('nodeName') === 'A'
                        ? console.log('search-result div clicked')
                        : closeSearch()
                }}
            >
                <div className="overlay-content">
                    <SearchResults value={value} />
                </div>
            </div>
        </div>
    )
}
export default Header

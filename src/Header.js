import { useState } from 'react'
import { ThreeDots } from 'react-bootstrap-icons'
import LoginModal from './LoginModal'
const Header = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <img
                        class="navbar-brand"
                        src="https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/make-a-gaming-logo/gaming-logo-maker-for-an-rpg-guild.png"
                        href="/"
                        alt="app-logo"
                        width="50"
                        height="54"
                    ></img>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="#"
                                >
                                    Discussion
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Deals
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Jobs
                                </a>
                            </li>
                            <li>
                                <a class="nav-link" href="#">
                                    Ship
                                </a>
                            </li>
                            <div class="dropdown">
                                <button
                                    class="btn btn-light dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <ThreeDots />
                                </button>
                                <div
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                >
                                    <a class="dropdown-item" href="#">
                                        Advertise
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        Collections
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        Mentors
                                    </a>
                                </div>
                            </div>
                        </ul>
                        <form class="d-flex">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            ></input>
                            <button
                                class="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="login-form">
                        <button
                            className="btn btn-outline-secondary m-2"
                            onClick={() => setShowLogin(true)}
                        >
                            LOG IN
                        </button>
                        <button
                            className="btn btn-danger m-2"
                            onClick={() => setShowSignUp(true)}
                        >
                            SIGN UP
                        </button>
                    </div>
                    <LoginModal
                        show={showLogin}
                        onHide={() => setShowLogin(false)}
                    />
                    <LoginModal
                        show={showSignUp}
                        onHide={() => setShowSignUp(false)}
                    />
                </div>
            </nav>
        </div>
    )
}
export default Header

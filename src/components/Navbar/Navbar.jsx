import React from 'react';

const Navbar = () => {
    const myclassName = 'class-name';
    const containerp2 = 'container-p2';

    return (
        <nav>
            <div className={myclassName}>
                This is a class name. from Navbar
            </div>
            <div id="myId">
                This is an ID.
            </div>
            <div className={containerp2}>
                <a href="/">
                    <img src="src/assets/images/logo2PNG2.webp" alt="Spanish with Alex" className="logo" />
                </a>
                <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span><i className="fas fa-bars" style={{ color: "rgb(49, 38, 38)",  fontSize: "28px"  }} ></i></span> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item inactive">
                            <a className="nav-link" href="/">
                                <i className="fas fa-home"></i>
                                Home
                            </a>
                        </li>
                        <div className="dropdown">
                            <li className="nav-item inactive">
                                <a className="nav-link" href="/materials">
                                    <i className="fas fa-book"></i>
                                    Materials
                                </a>
                            </li>
                            <div className="dropdown-content">
                                {/* <!--<a href="/materials">Podcasts</a> */}
                                <a href="/#">Videos</a>
                                <a href="/#">Courses</a>
                                {/* --> */}
                            </div>
                        </div>
                        <li className="nav-item inactive">
                            <a className="nav-link" href="/contact">
                                <i className="fas fa-envelope"></i>
                                Contact
                            </a>
                        </li>
                        {/* {{!--
            <li className="nav-item">
              <a className="nav-link" href="/policy">
                <i className="fas fa-envelope"></i>
                Policy
              </a>
            </li>
            --}} */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
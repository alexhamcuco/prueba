
import styles from "./navbar.module.css"; 
 
const Navbar = () => {
  return (
<nav >
    <div className={myclassName}>
    	this is a className
    </div>
    <div id='myId'>
        this is a id
    </div>
    <div className={containerp2}>
        <a href="/"><img src="../images/logo2PNG2.webp" alt="Spanish with Alex" className="logo" />
        </a>
        {/* <a className="navbar-brand "> {{{ title }}} </a> */}
        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span><i className="fas fa-bars" style={{ color: "rgb(49, 38, 38)",  fontSize: "28px"  }} ></i></span> */}
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item inactive">
                    <a className="nav-link" href="/"><i className="fas fa-home"></i> Home</a>
                </li>

                {/* {{!-- <li className="nav-item">
                    <a className="nav-link" href="/materials"><i className="fas fa-book"></i> Materials</a>
                </li> --}} */}

                <div className="dropdown">
                    <li className="nav-item inactive">
                        <a className="nav-link" href="/materials"><i className="fas fa-book"></i> Materials</a>
                    </li>
                    <div className="dropdown-content">
                        {/* <!--<a href="/materials">Podcasts</a> */}
                       <a href="/#">Videos</a>
                        <a href="/#">Courses</a>-->
                    </div>
                </div>




                <li className="nav-item inactive">
                    <a className="nav-link" href="/contact"><i className="fas fa-envelope"></i> Contact</a>
                </li>
                {/* {{!--
                <li className="nav-item">
                    <a className="nav-link" href="/policy"><i className="fas fa-envelope"></i> Policy</a>
                </li> --}} */}
            </ul>
        </div>
    </div>
</nav>
  )


export default Navbar }

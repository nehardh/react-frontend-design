import { CiUser, CiPhone } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    "Home",
    "Listings",
    "Members",
    "Blog",
    "Pages",
    "Contact"
  ];

  return (
    <nav className="navbar">
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <FaHome />
                {/* <img src="/logo.svg" alt="logo" className="logo-icon" /> */}
                <span className="logo-text">JustHome</span>
            </div>

            <div className="navbar-center">
                {navItems.map((item, index) => (
                    <div className="nav-item" key={index}>
                    {item}
                    <span className="dropdown-arrow">▼</span>
                    </div>
                ))}
            </div>

            <div className="navbar-right">
                <div className="contact">
                    <CiPhone size={18} />
                    <span>+68 685 88666</span>
                </div>
                <div className="user-icon">
                    <CiUser size={20} />
                </div>
                <button className="add-property-btn ">Add Property</button>
            </div>
        </div>
    </nav>

  );
};

export default Navbar;

import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search_icon.svg';
import bell_icon from '../../assets/bell_icon.svg';
import profile_img from '../../assets/profile_img.png';
import caret_icon from '../../assets/caret_icon.svg';
import { logout, auth } from '../../firebase';  // make sure auth is exported
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {

  const navRef = useRef();
  const [open, setOpen] = useState(false);
  const [ showSearch, setShowSearch ] = useState(false);
  const [query, setQuery] = useState("");            // ✅ search text
  const [ userName, setUserName ] = useState("user");
  const [ menuOpen, setMenuOpen ] = useState(false);
  const navigate = useNavigate();

  const languages = ["English", "Hindi", "Telugu", "Tamil", "Korean", "Spanish"];

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (window.scrollY >= 80) {
          navRef.current.classList.add("nav-dark");
        } else {
          navRef.current.classList.remove("nav-dark");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  // ✅ Listen to auth state to get user name
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "user"); // fallback if displayName not set
      } else {
        setUserName("user"); // not logged in
      }
    });
    return () => unsubscribe();
  }, []);


  // 🔹 Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      navigate(`/search/${query.toLowerCase()}`);  // ✅ route to search results page
      setShowSearch(false); // hide after searching
      setQuery("");
    }
  };


  return (
    <div ref={navRef} className='navbar'>

      <div className="navbar-left">
        <img src={logo} alt="" />
        <span className='menu-btn' onClick={() => setMenuOpen(!menuOpen)}>☰</span>
        <ul className={menuOpen ? "show" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/tvshows">TV Shows</Link></li>   {/* ✅ route added */}
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/new">New & Popular</Link></li>
          <li><Link to="/mylist">My List</Link></li>
          <li
            className={`drop-list ${open ? "open" : ""}`}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <span className="dropdown-toggle" onClick={() => setOpen(!open)}>Browse by Languages ▾</span>
            {open && (
              <ul className="dropdown-menu">
                {languages.map((lang) => (
                    <li key={lang}>
                      <Link to={`/languages/${lang.toLowerCase()}`}>{lang}</Link>
                    </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search" className='icons' onClick={() => setShowSearch(!showSearch)} style={{ cursor: "pointer" }} />
        {/* 🔹 Search Input Field */}
        {showSearch && (
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search by alphabets..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
              autoFocus
            />
          </form>
        )}
        <Link to="/genre/10751" className='children-link'>
          <p>Children</p>
        </Link>
        <img src={bell_icon} alt="" className='icons' />

        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile' />
          <img src={caret_icon} alt="" />

          <div className="dropdown">
            <h3>Hello!, {userName}</h3>
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Navbar
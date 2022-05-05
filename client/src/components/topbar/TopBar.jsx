import './TopBar.css';
import { Link } from 'react-router-dom';

function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-telegram"></i>
        <i className="topIcon fa-brands fa-whatsapp"></i>
        <i className="topIcon fa-solid fa-at"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              خانه
            </Link>
          </li>
          <li className="topListItem">
            {' '}
            <Link to="/write" className="link">
              نوشتن
            </Link>{' '}
          </li>
          <li className="topListItem">
            {' '}
            <Link to="/" className="link">
              تماس
            </Link>{' '}
          </li>
          <li className="topListItem">
            {' '}
            <Link to="/" className="link">
              درباره من
            </Link>{' '}
          </li>
          <li className="topListItem"> {user && 'LOGOUT'} </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="H.jpg" alt="logo"></img>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                ورود
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                عضویت
              </Link>
            </li>
          </ul>
        )}
        <i className="topMenuBar fa-solid fa-bars"></i>
        <img className="topImg" src="H.jpg" alt="logo"></img>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;

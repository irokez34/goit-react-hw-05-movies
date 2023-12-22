import { Outlet, NavLink } from 'react-router-dom';
import './styleComponents/Layout.css';
export const Layout = () => {
  return (
    <div className="container">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="nav-links">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

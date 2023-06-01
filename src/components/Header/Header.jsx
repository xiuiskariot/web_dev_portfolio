import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const setActive = ({ isActive }) => ({
  color: isActive ? "var(--color-active)" : "var(--color-not_active)",
});

export const Header = () => {
  return (
    <>
      <header>
        <ul className={s.container}>
          <li>_ksusha_voronina</li>
          <li>
            <NavLink to="/" style={setActive}>
              _hello
            </NavLink>
          </li>
          <li>
            <NavLink to="about" style={setActive}>
              _about
            </NavLink>
          </li>
          <li>
            <NavLink to="projects" style={setActive}>
              _projects
            </NavLink>
          </li>

          <li>
            <NavLink to="contact_me" style={setActive}>
              _contact_me
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

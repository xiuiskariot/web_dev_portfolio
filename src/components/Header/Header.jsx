
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"

const setActive = ({ isActive }) => ({
  color: isActive ? "var(--color-active)" : "var(--color-not_active)",
});

export const Header = ({ children}) => {
  return (
    <>
      <header>
        <ul className={s.container}>
          <li>micheal-weaver</li>
          <li>
            <NavLink to="/" style={setActive}>_hello</NavLink>
          </li>
          <li>
            <NavLink to="about" style={setActive}>_about</NavLink>
          </li>
          <li>_projects</li>
          <li>_contact_me</li>
        </ul>
      </header>
    </>
  );
}


//         <Link to="/">home</Link>
 //       <Link to="about">about</Link>
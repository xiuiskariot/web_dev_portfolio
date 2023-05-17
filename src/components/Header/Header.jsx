
import { Link } from 'react-router-dom'
import s from "./Header.module.css"

export const Header = ({ children}) => {
  return (
    <>
      <header>
        <ul className={s.container}>
          <li>micheal-weaver</li>
          <li>
            <Link to="/">_hello</Link>
          </li>
          <li>
            <Link to="about">_about</Link>
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
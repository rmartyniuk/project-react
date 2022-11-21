import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <a className={styles.toggler_icon} href='/'>
          <i className='fa fa-tasks'></i>
        </a>
        <ul className={styles.navbar_links}>
          <li>
            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
              to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/favorite'>
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/about'>
              About
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar;
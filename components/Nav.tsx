import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'


const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>LinkedIn</Link>
                </li>
                <li>
                    <Link href='/'>Github</Link>
                </li>
                <li>
                    <Link href='/'>Twitter</Link>
                </li>
                <li>
                    <Link href='/'>Email</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav

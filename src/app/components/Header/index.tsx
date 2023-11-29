import { HeaderProps } from './types'
import Link from 'next/link'
import styles from './index.module.scss'

const Header: React.FC<HeaderProps> = ({ menu }) => {
    return (
        <header className={styles.header}>
            <span>Malan Gunaratne</span>
            <nav className={styles.nav}>
                {
                    menu.map((item) => (
                        <Link 
                            key={item.label}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))
                }
            </nav>
        </header>
    )
}

export default Header
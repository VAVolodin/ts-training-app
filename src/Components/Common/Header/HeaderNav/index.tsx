import React from 'react';
import s from './HeaderNav.module.scss';

class HeaderNav extends React.PureComponent {
    render() {
        return (
            <>
                <nav className={s.nav}>
                    <ul className={s.nav_list}>
                        <li className={s.nav_item}>
                            <a href="#s" className={s.link}>
                                About us
                            </a>
                        </li>
                        <li className={s.nav_item}>
                            <a href="#s" className={s.link}>
                                Main
                            </a>
                        </li>
                        <li className={s.nav_item}>
                            <a href="#s" className={s.link}>
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default HeaderNav;

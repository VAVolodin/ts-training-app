import React from 'react';
import s from './HeaderNav.module.scss';

class HeaderNav extends React.PureComponent {
    render() {
        return (
            <>
                <nav className={s.header_nav}>
                    <ul className={s.nav_list}>
                        <li>About us</li>
                        <li>Main</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default HeaderNav;

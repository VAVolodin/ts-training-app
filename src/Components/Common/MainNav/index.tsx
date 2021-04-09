import React from 'react';
import s from './MainNav.module.scss';

class MainNav extends React.PureComponent {
    render() {
        const linksList = [
            { title: 'Profile', link: '#Profile' },
            { title: 'Messages', link: '#Messages' },
            { title: 'News', link: '#News' },
            { title: 'Music', link: '#Music' },
            { title: 'Settings', link: '#Settings' },
        ];

        return (
            <>
                <section className={s.nav}>
                    <h3> MainNav</h3>
                    <nav className={s.navmenu}>
                        {linksList.map((listitem) => (
                            <li className={s.item}>
                                <a href={listitem.link}> {listitem.title} </a>
                            </li>
                        ))}
                    </nav>
                </section>
            </>
        );
    }
}

export default MainNav;

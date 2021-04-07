import React from 'react';
import s from './Header.module.scss';
import HeaderNav from './HeaderNav';

class Header extends React.PureComponent {
    render() {
        return (
            <>
                <section className={s.header}>
                    <header className={s.header_wrapper}>
                        <div>Logo</div>
                        <HeaderNav />
                        <div>userInfo</div>
                    </header>
                </section>
            </>
        );
    }
}

export default Header;

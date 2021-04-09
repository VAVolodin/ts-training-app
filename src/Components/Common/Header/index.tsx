import React from 'react';
import s from './Header.module.scss';
import HeaderNav from './HeaderNav';
import logo from '../../../assets/image/Wander_Over_Yonder.svg';

class Header extends React.PureComponent {
    render() {
        return (
            <>
                <section className={s.header}>
                    <header className={s.header_wrapper}>
                        <div>
                            <img className={s.logo} src={logo} alt="logo" />
                        </div>
                        <HeaderNav />
                        <div>userInfo</div>
                    </header>
                </section>
            </>
        );
    }
}

export default Header;

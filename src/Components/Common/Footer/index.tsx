import React from 'react';
import s from './Footer.module.scss';
import FtrBar from './FtrBar';

class Footer extends React.PureComponent {
    render() {
        return (
            <>
                <section className={s.footer}>
                    <div className={s.wrapper}>
                        {/* <div className={s.clmn}>
                            <div className={s.row}>
                                <a href="#S" className={s.logo}>
                                    <img src="" alt="logo" />
                                </a>
                            </div>
                            <div className={s.row}>Address</div>
                            <div className={s.row}>Phone</div>
                            <div className={s.row}>E-mail</div>
                        </div> */}
                        <FtrBar
                            row1={
                                <a href="#S" className={s.logo}>
                                    <img
                                        src="E:\React\ts-training-app\src\asses\image\logo.png"
                                        alt="logo"
                                    />
                                </a>
                            }
                        />
                        <FtrBar title="About Us" />
                        <FtrBar title="Main" />
                        <FtrBar title="Blog" />
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;

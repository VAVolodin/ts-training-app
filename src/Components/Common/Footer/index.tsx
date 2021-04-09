import React from 'react';
import s from './Footer.module.scss';
import FtrBar from './FtrBar';
import logo from '../../../assets/image/logo.png';

class Footer extends React.PureComponent {
    render() {
        return (
            <>
                <section className={s.footer}>
                    <div className={s.wrapper}>
                        <FtrBar
                            rowsList={[
                                <a href="#S" className={s.logo}>
                                    <img src={logo} alt="logo" />
                                </a>,
                            ]}
                        />
                        <FtrBar
                            title="Contacts"
                            rowsList={[
                                'Address: Russian Federation, Moscow, Varshavskaya st, 4',
                                'Phone',
                                'E-mail',
                            ]}
                        />
                        {/* row1="Address" row2="Phone" row3="E-mail" /> */}
                        <FtrBar
                            title="About Us"
                            rowsList={[
                                'we try to try better than others, because the main thing for us is to try our best, so we always try to try better than anyone',
                            ]}
                        />
                        <FtrBar title="Main" />
                        <FtrBar title="Blog" />
                    </div>
                </section>
            </>
        );
    }
}

export default Footer;

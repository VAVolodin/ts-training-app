import React from 'react';
import Header from '../Common/Header';
import s from './MainPageWrapper.module.scss';
import '../../asses/style/main.scss';
import Footer from '../Common/Footer';

class MainPageWrapper extends React.PureComponent {
    render() {
        return (
            <>
                <div className={s.main_page_wrapper}>
                    <Header />
                    <Footer />
                </div>
            </>
        );
    }
}

export default MainPageWrapper;

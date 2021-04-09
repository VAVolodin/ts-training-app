import React from 'react';
import Header from '../Common/Header';
import s from './MainPageWrapper.module.scss';
import '../../assets/style/main.scss';
import Footer from '../Common/Footer';
import MainArticle from '../Common/MainArticle';
import MainNav from '../Common/MainNav';
import SideBar from '../Common/SideBar';
import imgs from '../../assets/avatars/Wander_Happy.png';

class MainPageWrapper extends React.PureComponent {
    render() {
        return (
            <>
                <div className={s.wrapper}>
                    <Header />
                    <div className={s.content}>
                        <MainNav />
                        <MainArticle
                            userName="Max Edington"
                            avatar={imgs}
                            birthDate="21.09.1982"
                            city="Boston"
                            education="Yell 2012"
                            web="sfksfkgnsfksjn"
                        />
                        <SideBar />
                    </div>
                    <Footer />
                </div>
            </>
        );
    }
}

export default MainPageWrapper;

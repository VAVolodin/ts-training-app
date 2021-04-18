import React from 'react';
import MainArticle from '../Common/MainArticle';
import MainNav from '../Common/MainNav';
import SideBar from '../Common/SideBar';
import imgs from '../../assets/avatars/Wander_Happy.png';
import PageWrapper from '../PageWrapper';
import s from './MainPage.module.scss';

const MainPage = () => {
    return (
        <>
            <PageWrapper>
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
            </PageWrapper>
        </>
    );
};

export default MainPage;

import React, { FC } from 'react';
import s from './PageWrapper.module.scss';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import '../../assets/style/main.scss';

interface IProps {
    children: React.ReactNode;
}

const PageWrapper: FC<IProps> = ({ children }: IProps) => {
    return (
        <>
            <div className={s.wrapper}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default PageWrapper;

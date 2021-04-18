import React, { FC } from 'react';
import AuthForm from './AuthForm';
import PageWrapper from '../PageWrapper';
// import s from './AuthPage.module.scss';

const AuthPage: FC = () => {
    return (
        <>
            <PageWrapper>
                <div />
                <AuthForm />
                <div />
            </PageWrapper>
        </>
    );
};

export default AuthPage;

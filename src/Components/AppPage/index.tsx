import React from 'react';
import '../../assets/style/main.scss';
import MainPage from '../MainPage';
import AuthContainer from '../../Containers/AuthContainer';
import PageWrapper from '../PageWrapper';
import RegPageContainer from '../../Containers/RegPageContainer';

class AppPage extends React.PureComponent {
    render() {
        return (
            <>
                <PageWrapper>
                    <MainPage />
                    <AuthContainer />
                    <RegPageContainer />
                </PageWrapper>
            </>
        );
    }
}

export default AppPage;

import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import MainPage from '../../Components/MainPage';
import AuthContainer from '../AuthContainer';
import RegPageContainer from '../RegPageContainer';

function App() {
    return (
        <>
            <Switch>
                <Route path="/auth" component={AuthContainer} />
                <Route path="/registration" component={RegPageContainer} />
                <Route exact path="/" component={AuthContainer} />
                <Route path="/main" component={MainPage} />
                <Redirect to="/404" />
            </Switch>
        </>
    );
}

export default App;

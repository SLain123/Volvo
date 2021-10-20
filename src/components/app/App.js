import React from 'react';
import { Logo } from 'vcc-ui';
import FooterMenu from '../footerMenu';
import { Switch, Route } from 'react-router-dom';
import Main from '../main';

import Styles from './App.module.scss';

function App() {
    return (
        <div className={Styles.container}>
            <header className={Styles.header}>
                <Logo type='spreadmark' height={10} />
            </header>
            <Switch>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route path='/car'>121242354353</Route>
            </Switch>
            <footer>
                <FooterMenu />
            </footer>
        </div>
    );
}

export default App;

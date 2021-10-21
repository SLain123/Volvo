import React from 'react';
import Header from '../header';
import Car from '../car';
import FooterMenu from '../footerMenu';
import Alarm from '../alarm';
import { Switch, Route } from 'react-router-dom';
import Main from '../main';

import Styles from './App.module.scss';

function App() {
    return (
        <div className={Styles.container}>
            <Switch>
                <Route exact path='/'>
                    <>
                        <Header />
                        <Main />
                        <FooterMenu />
                    </>
                </Route>
                <Route path='/car'>
                    <>
                        <Header />
                        <Car />
                        <FooterMenu />
                    </>
                </Route>
                <Route path='/alarm'>
                    <Alarm />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

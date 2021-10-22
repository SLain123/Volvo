import React, { useState, useEffect } from 'react';
import Header from '../header';
import Car from '../car';
import FooterMenu from '../footerMenu';
import Alarm from '../alarm';
import Support from '../support';
import Modal from '../modal';
import { Switch, Route } from 'react-router-dom';
import Main from '../main';

import Styles from './App.module.scss';

function App() {
    const [alarmList, setAlarmList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => setAlarmList([...alarmList, new Date()]), 1000);
        setTimeout(() => setShowModal(true), 10000);
    }, []);

    return (
        <div className={Styles.container}>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <Switch>
                <Route exact path='/'>
                    <>
                        <Header />
                        <Main alarmList={alarmList} />
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
                <Route path='/support'>
                    <>
                        <Header />
                        <Support />
                        <FooterMenu />
                    </>
                </Route>
                <Route path='/alarm'>
                    <Alarm alarmList={alarmList} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

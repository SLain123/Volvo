import React, { useState, useEffect } from 'react';
import Header from '../header';
import Car from '../car';
import FooterMenu from '../footerMenu';
import Alarm from '../alarm';
import Support from '../support';
import Modal from '../modal';
import Web from '../web';
import Archive from '../archive';
import { Switch, Route } from 'react-router-dom';
import Main from '../main';

import Styles from './App.module.scss';

function App() {
    const [alarmList, setAlarmList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('');

    useEffect(() => {
        setTimeout(() => setAlarmList([...alarmList, new Date()]), 15000);
        setTimeout(() => setShowModal(true), 15000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={Styles.container}>
            <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                mode={modalMode}
                setMode={setModalMode}
            />
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
                <Route path='/web'>
                    <Web
                        setModalMode={setModalMode}
                        setShowModal={setShowModal}
                    />
                </Route>
                <Route path='/archive'>
                    <Archive />
                </Route>
                <Route path='/alarm'>
                    <Alarm alarmList={alarmList} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

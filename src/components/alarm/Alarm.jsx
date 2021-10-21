import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Alarm.module.scss';
import closeIcon from '../../img/crose.svg';

const Alarm = ({ messageList }) => {
    return (
        <div className={Styles.alarm_container}>
            <div className={Styles.title}>Уведомления</div>
            {messageList ? null : (
                <>
                    <div className={Styles.subtitle}>Новостей нет</div>
                    <div className={Styles.subtitle}>
                        Здесь будут советы, предложения и напоминания
                    </div>
                </>
            )}

            <Link to='/' className={Styles.alarm_close_btn}>
                <img src={closeIcon} alt='close' />
            </Link>
        </div>
    );
};

export default Alarm;

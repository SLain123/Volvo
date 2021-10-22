import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Styles from './Alarm.module.scss';
import closeIcon from '../../img/crose.svg';

const Alarm = ({ alarmList }) => {
    return (
        <div className={Styles.alarm_container}>
            <div className={Styles.title}>Уведомления</div>
            {alarmList.length > 0 ? (
                alarmList.map((data) => (
                    <div key={data}>
                        <div className={Styles.data_container}>
                            <span>{moment(data).format('l')}</span>
                            <span>{moment(data).format('LT')}</span>
                        </div>
                        <p className={Styles.mes_title}>
                            Подозрительная активность
                        </p>
                        <p className={Styles.mes_subtitle}>
                            Зафиксирована подозрительная активность возле
                            машины.
                        </p>
                        <Link to='/web' className={Styles.check_btn}>
                            Подключиться к видеокамере
                        </Link>
                    </div>
                ))
            ) : (
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

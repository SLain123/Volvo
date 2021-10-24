import React from 'react';

import Styles from './Support.module.scss';
import supportIcon from '../../img/support.svg';
import trackIcon from '../../img/track.svg';
import bestIcon from '../../img/best.svg';

const Support = () => {
    return (
        <div className={Styles.support}>
            <div className={Styles.container}>
                <span className={Styles.title}>
                    Чем мы можем Вам помочь, Артем?
                </span>
            </div>
            <ul className={Styles.info_list}>
                <li className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={supportIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>Наши контакты</span>
                        <span className={Styles.info_blue}>Свяжитесь с нами</span>
                    </div>
                </li>
                <li className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={trackIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>Получить помощь</span>
                        <span className={Styles.info_blue}>Работает круглосуточно</span>
                    </div>
                </li>
                <li className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={bestIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>Premium Club</span>
                        <span className={Styles.info_blue}>Избранные партнеры</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Support;

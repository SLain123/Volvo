import React from 'react';

import Styles from './Car.module.scss';
import headerPic from '../../img/car_head.png';
import toolsIcon from '../../img/tools.svg';
import bookIcon from '../../img/book.svg';
import speedIcon from '../../img/speed.svg';
import carIcon from '../../img/car_menu.svg';

const Car = () => {
    return (
        <div className={Styles.info}>
            <div className={Styles.head}>
                <img src={headerPic} alt='header' />
            </div>
            <div className={Styles.info_block}>
                <div className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={toolsIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>Обслуживание</span>
                        <span className={Styles.info_blue}>Все в норме</span>
                    </div>
                </div>

                <div className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={bookIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>Журнал поездок</span>
                        <span className={Styles.info_blue}>Включено</span>
                    </div>
                </div>

                <div className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={speedIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>Статистика</span>
                        <span className={Styles.info_blue}>9,9 л/100 км</span>
                        <span className={Styles.info_grey}>
                            Средний расход топлива
                        </span>
                        <span className={Styles.info_blue}>2650 км</span>
                        <span className={Styles.info_grey}>Пробег</span>
                    </div>
                </div>

                <div className={Styles.info_item}>
                    <img
                        className={Styles.info_icon}
                        src={carIcon}
                        alt='icon'
                    />
                    <div className={Styles.info_text_block}>
                        <span className={Styles.info_grey}>
                            Сведения об автомобиле
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;

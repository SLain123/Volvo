import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Main.module.scss';
import lockIcon from '../../img/lock.svg';
import cullerIcon from '../../img/culler.svg';
import webIcon from '../../img/web.svg';
import gasIcon from '../../img/gas.svg';
import progressIcon from '../../img/progress_bar.svg';
import alert from '../../img/alert.svg';
import car from '../../img/car.png';

const Main = () => {
    return (
        <div className={Styles.car_container}>
            <div className={Styles.head}>
                <h1 className={Styles.title}>XC40</h1>
                <Link to='/alarm' className={Styles.link}>
                    <img src={alert} alt='alarm' />
                </Link>
            </div>
            <div className={Styles.temp_container}>
                <span className={Styles.temp_text}>Температура</span>
                <span className={Styles.temp_num}>2 C</span>
            </div>
            <div className={Styles.gas_container}>
                <img className={Styles.gas_icon} src={gasIcon} alt='gas' />
                <img
                    className={Styles.gas_icon}
                    src={progressIcon}
                    alt='progess'
                />
                <span className={Styles.gas_text}>220 км</span>
            </div>
            <div className={Styles.car_block}>
                <div className={Styles.car_control_panel}>
                    <span className={Styles.link}>
                        <img src={lockIcon} alt='icon_btn' />
                    </span>
                    <span className={Styles.link}>
                        <img src={cullerIcon} alt='icon_btn' />
                    </span>
                    <Link to='/web' className={Styles.link}>
                        <img src={webIcon} alt='icon_btn' />
                    </Link>
                </div>

                <img src={car} alt='car_photo' />
            </div>
        </div>
    );
};

export default Main;

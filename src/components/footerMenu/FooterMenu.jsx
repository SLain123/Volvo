import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Styles from './FooterMenu.module.scss';
import homeIcon from '../../img/home.svg';
import homeActiveIcon from '../../img/home_active.svg';
import mapIcon from '../../img/map.svg';
import carIcon from '../../img/car_menu.svg';
import carActiveIcon from '../../img/car_menu_active.svg';
import messageIcon from '../../img/message.svg';
import messageActiveIcon from '../../img/message_active.svg';
import userIcon from '../../img/user.svg';

const FooterMenu = () => {
    const location = useLocation();
    const currentURL = location.pathname;

    const menuData = [
        {
            icons: [homeIcon, homeActiveIcon],
            status: currentURL === '/',
            link: '/',
        },
        { icons: [mapIcon, mapIcon], status: true },
        {
            icons: [carIcon, carActiveIcon],
            status: currentURL === '/car',
            link: '/car',
        },
        {
            icons: [messageIcon, messageActiveIcon],
            status: currentURL === '/support',
            link: '/support',
        },
        { icons: [userIcon, userIcon], status: true },
    ];

    const getItem = (icons, status, link) => {
        return (
            <Link to={link ? link : '/'} className={Styles.link} key={icons[0]}>
                <img src={status ? icons[1] : icons[0]} alt='icon_btn' />
            </Link>
        );
    };

    return (
        <div className={Styles.footer}>
            {menuData.map(({ icons, status, link }) =>
                getItem(icons, status, link),
            )}
        </div>
    );
};

export default FooterMenu;

import React from 'react';
import { Logo } from 'vcc-ui';

import Styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={Styles.header}>
            <Logo type='spreadmark' height={10} />
        </header>
    );
};

export default Header;

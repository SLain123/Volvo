import React from 'react';
import { Link } from 'react-router-dom';

import Styles from './Archive.module.scss';
import closeIcon from '../../img/crose.svg';
import videoPic from '../../img/video_pic.png';
import playIcon from '../../img/play.svg';

const Archive = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.title}>Архив видеозаписей</div>
            <ul className={Styles.list}>
                <li className={Styles.item}>
                    <p className={Styles.item_title}>23.10.2021</p>
                    <p className={Styles.item_subtitle}>Запись 11:00 - 11:02</p>
                    <Link to='/web' className={Styles.item_video}>
                        <img
                            src={videoPic}
                            alt='video'
                            className={Styles.img}
                        />
                        <img
                            src={playIcon}
                            alt='play'
                            className={Styles.play}
                        />
                    </Link>
                </li>
                <li className={Styles.item}>
                    <p className={Styles.item_title}>23.10.2021</p>
                    <p className={Styles.item_subtitle}>Запись 10:31 - 10:42</p>
                    <Link to='/web' className={Styles.item_video}>
                        <img
                            src={videoPic}
                            alt='video'
                            className={Styles.img}
                        />
                        <img
                            src={playIcon}
                            alt='play'
                            className={Styles.play}
                        />
                    </Link>
                </li>
                <li className={Styles.item}>
                    <p className={Styles.item_title}>22.10.2021</p>
                    <p className={Styles.item_subtitle}>Запись 22:10 - 22:16</p>
                    <Link to='/web' className={Styles.item_video}>
                        <img
                            src={videoPic}
                            alt='video'
                            className={Styles.img}
                        />
                        <img
                            src={playIcon}
                            alt='play'
                            className={Styles.play}
                        />
                    </Link>
                </li>
                <li className={Styles.item}>
                    <p className={Styles.item_title}>22.10.2021</p>
                    <p className={Styles.item_subtitle}>Запись 21:00 - 21:12</p>
                    <Link to='/web' className={Styles.item_video}>
                        <img
                            src={videoPic}
                            alt='video'
                            className={Styles.img}
                        />
                        <img
                            src={playIcon}
                            alt='play'
                            className={Styles.play}
                        />
                    </Link>
                </li>
            </ul>

            <Link to='/' className={Styles.close_btn}>
                <img src={closeIcon} alt='close' />
            </Link>
        </div>
    );
};

export default Archive;

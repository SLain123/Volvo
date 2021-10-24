import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Styles from './Web.module.scss';
import backIcon from '../../img/back_arrow.svg';
import leftIcon from '../../img/left_arrow.svg';
import rightIcon from '../../img/right_arrow.svg';

const Web = ({ setModalMode, setShowModal }) => {
    const [slide, setSlide] = useState(0);

    const uncreaseSlide = () => {
        if (slide < 2) {
            setSlide(slide + 1);
        } else setSlide(0);
    };

    const decreaseSlide = () => {
        if (slide === 0) {
            setSlide(2);
        } else setSlide(slide - 1);
    };

    return (
        <div className={Styles.container}>
            <Link to='/' className={Styles.back_link}>
                <img src={backIcon} alt='back' />
            </Link>
            <button
                type='button'
                className={Styles.left_btn}
                onClick={decreaseSlide}
            >
                <img src={leftIcon} alt='left_arrow' />
            </button>
            <button
                type='button'
                className={Styles.right_btn}
                onClick={uncreaseSlide}
            >
                <img src={rightIcon} alt='right_arrow' />
            </button>
            <video
                width={360}
                height={650}
                autoPlay
                className={`${Styles.video} ${slide === 0 && Styles.visible}`}
                key={0}
                loop
            >
                <source
                    src={
                        'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1KfNbix0F70VUy6zraWECqmzEv-zxVrDt'
                    }
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
            </video>
            <video
                width={360}
                height={650}
                autoPlay
                className={`${Styles.video} ${slide === 1 && Styles.visible}`}
                key={1}
                loop
            >
                <source
                    src='https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1LqcHsaYTMz2paGdRCDHUvTDMgCCdPS-W'
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
            </video>
            <video
                width={360}
                height={650}
                autoPlay
                className={`${Styles.video} ${slide === 2 && Styles.visible}`}
                key={2}
                loop
            >
                <source
                    src='https://drive.google.com/uc?export=download&confirm=no_antivirus&id=19C1hkSK1CLa2NRAY6YbUyo_x79CvgFMd'
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
            </video>
            <div className={Styles.sos_block}>
                <button
                    type='button'
                    className={Styles.sos_btn}
                    onClick={() => {
                        setModalMode('volvo');
                        setShowModal(true);
                    }}
                >
                    ЦЕНТР VOLVO
                </button>
                <button
                    type='button'
                    className={Styles.sos_btn}
                    onClick={() => {
                        setModalMode('112');
                        setShowModal(true);
                    }}
                >
                    ВЫЗОВ 112
                </button>
            </div>
        </div>
    );
};

export default Web;

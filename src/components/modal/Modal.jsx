import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Styles from './Modal.module.scss';
import croseIcon from '../../img/crose.svg';

const Modal = ({ showModal, setShowModal }) => {
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (timer !== 0 && showModal) {
            setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        } else setShowModal(false);
    }, [timer, showModal]);

    return (
        showModal && (
            <div className={Styles.container}>
                <div className={Styles.modal_window}>
                    <p className={Styles.modal_title}>
                        Подозрительная активность!
                    </p>
                    <p className={Styles.modal_subtitle}>
                        Зафиксирована подозрительная активность возле машины.
                    </p>
                    <div className={Styles.modal_btn_block}>
                        <button
                            type='button'
                            className={Styles.grey_btn}
                            onClick={() => setShowModal(false)}
                        >
                            Закрыть ({timer})
                        </button>
                        <Link to='/web' className={Styles.blue_btn}>
                            Подробнее
                        </Link>
                    </div>

                    <button
                        type='button'
                        className={Styles.close_btn}
                        onClick={() => setShowModal(false)}
                    >
                        <img src={croseIcon} alt='close' />
                    </button>
                </div>
            </div>
        )
    );
};

export default Modal;

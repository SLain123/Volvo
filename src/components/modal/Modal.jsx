import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Styles from './Modal.module.scss';
import croseIcon from '../../img/crose.svg';

const Modal = ({ showModal, setShowModal, mode, setMode }) => {
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        if (timer !== 0 && showModal) {
            setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        } else setShowModal(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer, showModal]);

    if (mode === 'volvo') {
        return (
            <div className={Styles.container}>
                <div className={Styles.modal_window}>
                    <p className={Styles.modal_title}>Уведомление</p>
                    <p className={Styles.modal_subtitle}>
                        Ваше обращение отправлено в центр безопасности Вольво
                    </p>
                    <button
                        type='button'
                        className={Styles.close_btn}
                        onClick={() => {
                            setMode('');
                            setShowModal(false);
                        }}
                    >
                        <img src={croseIcon} alt='close' />
                    </button>
                </div>
            </div>
        );
    }

    if (mode === '112') {
        return (
            <div className={Styles.container}>
                <div className={Styles.modal_window}>
                    <p className={Styles.modal_title}>Вызов номера 112</p>
                    <p className={Styles.modal_subtitle}>
                        Ожидайте соединение со службой помощи 112...
                    </p>
                    <button
                        type='button'
                        className={Styles.close_btn}
                        onClick={() => {
                            setMode('');
                            setShowModal(false);
                        }}
                    >
                        <img src={croseIcon} alt='close' />
                    </button>
                </div>
            </div>
        );
    }

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
                            onClick={() => {
                                setMode('');
                                setShowModal(false);
                            }}
                        >
                            Закрыть ({timer})
                        </button>
                        <Link
                            to='/web'
                            className={Styles.blue_btn}
                            onClick={() => {
                                setMode('');
                                setShowModal(false);
                            }}
                        >
                            Подробнее
                        </Link>
                    </div>

                    <button
                        type='button'
                        className={Styles.close_btn}
                        onClick={() => {
                            setMode('');
                            setShowModal(false);
                        }}
                    >
                        <img src={croseIcon} alt='close' />
                    </button>
                </div>
            </div>
        )
    );
};

export default Modal;

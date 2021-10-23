import React from 'react';

import Styles from './Web.module.scss';

const Web = () => {
    return (
        <div className={Styles.container}>
            <video
                width={360}
                height={650}
                controls='controls'
                autoplay
                className={Styles.video}
            >
                <source
                    src='https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1WLZSqUx6eCF7SARf8TkVfWQJexeUS9tg'
                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
            </video>
        </div>
    );
};

export default Web;

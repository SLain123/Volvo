import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StyleProvider>
                <ThemePicker variant='light'>
                    <App />
                </ThemePicker>
            </StyleProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

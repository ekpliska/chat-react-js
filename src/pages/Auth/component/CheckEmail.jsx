import React, { useState, useEffect } from 'react';

import { Result, Button } from 'antd';

import { userAPI } from '../../../utils/api';

import { Panel } from '../../../components';

const renderMessage = (hash, verified) => {
    if (hash) {
        if (verified) {
            return {
                status: 'success',
                message: 'Аккуант успешно подтвержден'
            };
        } else {
            return {
                status: 'error',
                message: 'Ошибка при подтверждении регистрации'
            };
        }
    } else {
        return {
            status: 'info',
            message: 'На адрес, указанный при регистрации, было отправлено письмо для подтверждения регистрации'
        };
    }
}

const CheckEmail = (props) => {
    const { location, history } = props;
    const hash = location.search.split('hash=')[1];

    const [verified, setVerified] = useState(false);

    const message = renderMessage(hash, verified);

    useEffect(() => {
        if (hash) {
            userAPI.verify(hash)
                .then(({ data }) => {
                    if (data.success) {
                        setVerified(true);
                    }
                });
        }
    })
    return (
        <Panel>
            <Result
                status={ message.status }
                title="Подтверждение регистрации!"
                subTitle={ message.message }
                extra={
                    message.status === 'success' && verified && (
                        <Button type="primary" onClick={() => history.push('/login')}>
                            Войти
                        </Button>
                    )
                }
            />
        </Panel>
    )
}

export default CheckEmail;
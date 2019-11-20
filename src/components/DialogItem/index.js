import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import './DialogItem.scss';
import { DateTime, CheckMessIcon } from '../';

const getUserPtoho = (photoPath, username) => {
    if (photoPath) {
        return <img src={photoPath} alt={`${username}`} />;
    }
    return 'NOT';
}

const getMessageTime = (date) => {
    if (isToday(date)) {
        return format(date, 'HH:mm');
    } else {
        return format(date, 'dd.mm.yyyy');
    }
}

const DialogItem = ({ message, user, unreaded, incoming }) => {
    return (
        <div className={classNames('dialogs__item', {
            'dialogs__item--online': user.isOnline
        })}>
            <div className="dialogs__item-photo">
                {getUserPtoho(user.photo, user.fullname)}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(message.date)}
                        {/* <DateTime date={message.date} /> */}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>
                        {message.text}
                    </p>
                    {
                        !incoming && <CheckMessIcon incoming={false} isReaded={false} />
                    }
                    {
                        unreaded > 0 && (
                            <div className="dialogs__item-info-bottom-count">
                                {unreaded}
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    user: PropTypes.object,
    message: PropTypes.object,
}

export default DialogItem;
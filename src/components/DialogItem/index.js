import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './DialogItem.scss';
import { DateTime, CheckMessIcon } from '../';

const getUserPtoho = (photoPath, username) => {
    if (photoPath) {
        return <img src={photoPath} alt={`${username}`} />;
    }
    return 'NOT';
}

const DialogItem = ({ user = {
    fullname: 'Ivan IVANOV', 
    photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png',
    isOnline: true}, 
    message = {
        text: '___text in in a distant faraway galaxy, suddenly',
        date: new Date(),
    },
    unreaded = 10}) => {
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
                        17:00
                        {/* <DateTime date={message.date} /> */}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{message.text}</p>
                    <CheckMessIcon incoming={false} isReaded={!false} />
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
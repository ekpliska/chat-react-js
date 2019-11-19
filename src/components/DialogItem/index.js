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
    fullname: 'Ivan IV', 
    photo: 'https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png'}, 
    message = {
        text: '___text',
        date: new Date(),
    } }) => {
    return (
        <div className="dialog__items">
            <div className="dialog__items-photo">
                {getUserPtoho(user.photo, user.fullname)}
            </div>
            <div className="dialog__items-info">
                <div className="dialog__items-info-top">
                    <b>{user.fullname}</b>
                    <span><DateTime date={message.date} /></span>
                </div>
                <div className="dialog__items-info-bottom">
                    <p>{message.text}</p>
                    <CheckMessIcon incoming={false} isReaded={false} />
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
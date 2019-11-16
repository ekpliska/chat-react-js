import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru';
import './Message.scss';

const Message = ({ photo, user, text, date, incoming }) => {
    return (
        <div className="message">
            <div className="message__photo">
                <img src={photo} alt={`Photo ${user.fullName}`} />
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">
                        {text}
                    </p>
                </div>
                <span className="message__date">
                    {formatDistanceToNow(date, {includeSeconds: true, addSuffix: true, locale: ru})}
                </span>
            </div>
        </div>
    )
}

Message.defaultProps = {
    user: {},
}

Message.propTypes = {
    photo: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    incoming: PropTypes.bool,
}

export default Message;
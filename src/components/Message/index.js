import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';

import { DateTime, CheckMessIcon } from '../';

const Message = ({ photo, user, text, date, incoming, isReaded, attachments, isTyping }) => {
    return (
        <div className={classNames('message', {
            'message--incoming': !incoming,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
        })}>
            <div className="message__content">
                <CheckMessIcon incoming={incoming} isReaded={isReaded} />
                <div className="message__photo">
                    <img src={photo} alt={`Photo ${user.fullName}`} />
                </div>
                <div className="message__info">
                    {
                        (text || isTyping) && (
                            <div className="message__bubble">
                                {text && <p className="message__text">{text}</p>}
                                {isTyping && (
                                    <div className="message__typing">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                )}
                            </div>
                        )
                    }

                    <div className="message__attachments">
                        {
                            attachments && attachments.map((file, index) => (
                                <div className="message__attachments-item" key={index}>
                                    <img src={file.url} atl={file.filename} />
                                </div>
                            ))
                        }
                    </div>
                    {
                        date &&
                        <span className="message__date">
                            <DateTime date={date} />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

Message.defaultProps = {
    user: {},
}

Message.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.string,
    text: PropTypes.string,
    // date: PropTypes.string,
    user: PropTypes.object,
    incoming: PropTypes.bool,
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
}

export default Message;
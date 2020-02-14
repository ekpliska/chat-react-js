import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { format, parseISO } from 'date-fns';
import { isToday } from 'date-fns';

import './DialogItem.scss';
import { CheckMessIcon, UserPhoto } from '../';

const getMessageTime = (createdAt) => {
    if (isToday(createdAt)) {
        return format(createdAt, 'HH:mm');
    } else {
        return format(createdAt, 'dd.M.yyyy');
    }
}

const DialogItem = ({ _id, incoming, currentDialogId, lastMessage, partner, userId }) => {
    return (
        <Link to={`/dialog/${_id}`}>
            <div className={classNames('dialogs__item', {
                    'dialogs__item--online': partner.isOnline,
                    'dialogs__item--selected': currentDialogId === _id,
                    })} 
            >
                <div className="dialogs__item-photo">
                    <UserPhoto user={partner} />
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{partner.fullname}</b>
                        <span>
                            {getMessageTime(parseISO(lastMessage.createdAt))}
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>
                            {lastMessage.user._id === userId ? `Вы: ${lastMessage.text}` : lastMessage.text}
                        </p>
                        {
                            !incoming && <CheckMessIcon incoming={incoming} isReaded={lastMessage.readed} />
                        }
                        {
                            lastMessage.undread > 0 && (
                                <div className="dialogs__item-info-bottom-count">
                                    {lastMessage.unreaded > 9 ? '+9' : lastMessage.undread}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

DialogItem.propTypes = {
    lastMessage: PropTypes.object,
}

export default DialogItem;
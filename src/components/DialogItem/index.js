import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import format from 'date-fns/format';
import isToday from 'date-fns/isToday';

import './DialogItem.scss';
import { CheckMessIcon, UserPhoto } from '../';

const getMessageTime = (created_at) => {
    if (isToday(created_at)) {
        return format(created_at, 'HH:mm');
    } else {
        return format(created_at, 'dd.M.yyyy');
    }
}

const DialogItem = ({ _id, unreaded, incoming, currentDialogId, lastMessage }) => {
    return (
        <Link to={`/dialog/${_id}`}>
            <div className={classNames('dialogs__item', {
                    'dialogs__item--online': lastMessage.user.isOnline,
                    'dialogs__item--selected': currentDialogId === _id,
                    })} 
            >
                <div className="dialogs__item-photo">
                    <UserPhoto user={lastMessage.user} />
                </div>
                <div className="dialogs__item-info">
                    <div className="dialogs__item-info-top">
                        <b>{lastMessage.user.fullname}</b>
                        <span>
                            %todo
                            {/* {getMessageTime(message.created_at)} */}
                        </span>
                    </div>
                    <div className="dialogs__item-info-bottom">
                        <p>
                            {lastMessage.text}
                        </p>
                        {
                            !incoming && <CheckMessIcon incoming={incoming} isReaded={lastMessage.readed} />
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
        </Link>
    )
}

DialogItem.propTypes = {
    lastMessage: PropTypes.object,
}

export default DialogItem;
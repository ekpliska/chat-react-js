import React from 'react';
import PropTypes from 'prop-types';
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

const DialogItem = ({ _id, message, user, unreaded, incoming, onSelect }) => {
    return (
        <div className={classNames('dialogs__item', {
            'dialogs__item--online': user.isOnline
        })} onClick={ onSelect.bind(this, _id) }>
            <div className="dialogs__item-photo">
                <UserPhoto user={user} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        %todo
                        {/* {getMessageTime(message.created_at)} */}
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
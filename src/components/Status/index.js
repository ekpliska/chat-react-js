import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './Status.scss';

const Status = ({ isOnline, fullname }) => {
    return (
        <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">
                { fullname }
            </b>
            <div className="chat__dialog-header-status">
                <div className={classNames('status', { 'status--online': isOnline })}>
                    { isOnline ? 'В сети' : 'Офлайн' }
                </div>
            </div>
        </div>

    )
}

Status.propTypes = {
    isOnline: PropTypes.bool
};

export default Status;
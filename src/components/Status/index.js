import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './Status.scss';

const Status = ({ isOnline }) => {
    return (
        <div className="chat__dialog-header-status">
            <div className={classNames('status', { 'status--online': isOnline })}>
                Online
            </div>
        </div>
    )
}

Status.propTypes = {
    isOnline: PropTypes.bool
};

export default Status;
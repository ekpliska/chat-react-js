import React from 'react';
import './Panel.scss';
import classNames from 'classnames';

const Panel = ({ children, className }) => {
    return (
        <div className={classNames('panel', className)}>
            {children}
        </div>
    )
}

export default Panel;
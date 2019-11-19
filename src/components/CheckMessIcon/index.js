import React from 'react';
import PropTypes from 'prop-types';
import readedSvg from '../../asset/readed.svg';
import noRreadedSvg from '../../asset/noreaded.svg';

const CheckMessIcon = ({ incoming, isReaded }) => (
    !incoming &&
    (isReaded
        ? <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
        : <img className="message__icon-readed message__icon-readed--no" src={noRreadedSvg} alt="NoReaded icon" />
    )
);

CheckMessIcon.propTypes = {
    incoming: PropTypes.bool,
    isReaded: PropTypes.bool,
}


export default CheckMessIcon;
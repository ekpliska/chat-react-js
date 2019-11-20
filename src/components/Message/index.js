import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';

import { DateTime, CheckMessIcon } from '../';

import waveSvg from '../../asset/wave.svg';
import playSvg from '../../asset/play.svg';
import pauseSvg from '../../asset/pause.svg';

const Message = ({ photo, user, text, date, audio, incoming, isReaded, attachments, isTyping }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className={classNames('message', {
            'message--incoming': !incoming,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--is-audio': audio,
        })}>
            <div className="message__content">
                <CheckMessIcon incoming={incoming} isReaded={isReaded} />
                <div className="message__photo">
                    <img src={photo} alt={`Photo ${user.fullName}`} />
                </div>
                <div className="message__info">
                    {
                        (audio || text || isTyping) && (
                            <div className="message__bubble">
                                {text && <p className="message__text">{text}</p>}
                                {
                                    isTyping && (
                                        <div className="message__typing">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                )}
                                {
                                    audio && (
                                        <div className="message__audio">
                                            <div className="message__audio-progress"></div>
                                            <div className="message__audio-info">
                                                <div className="message__audio-btn">
                                                    <button>
                                                        {
                                                            isPlaying 
                                                            ? <img src={pauseSvg} alt="Pause icon" />
                                                            : <img src={playSvg} alt="Play icon" />
                                                        }
                                                        
                                                    </button>
                                                </div>
                                                <div className="message__audio-wave">
                                                    <img src={waveSvg} alt="Audio" />
                                                </div>
                                                <span className="message__audio-duration">
                                                    00:00
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }


                    {
                        attachments && (
                            <div className="message__attachments">
                                {
                                    attachments.map((file, index) => (
                                        <div className="message__attachments-item" key={index}>
                                            <img src={file.url} atl={file.filename} />
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }

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
    date: PropTypes.string,
    audio: PropTypes.string,
    user: PropTypes.object,
    incoming: PropTypes.bool,
    isReaded: PropTypes.bool,
    attachments: PropTypes.array,
    isTyping: PropTypes.bool,
}

export default Message;
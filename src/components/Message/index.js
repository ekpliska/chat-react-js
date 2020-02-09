import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popover, Button } from 'antd';
import { Emoji } from 'emoji-mart';
import reatStringReplace from 'react-string-replace';

import { DateTime, CheckMessIcon, UserPhoto } from '../';

import { convertCurrentTime } from '../../utils/helpers';

import waveSvg from '../../asset/wave.svg';
import playSvg from '../../asset/play.svg';
import pauseSvg from '../../asset/pause.svg';

import './Message.scss';

const AudioMessage = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElement = useRef(null);

    useEffect(() => {
        audioElement.current && audioElement.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false,
        );
        audioElement.current && audioElement.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false,
        );
        audioElement.current && audioElement.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false,
        );
        audioElement.current && audioElement.current.addEventListener(
            'timeupdate',
            () => {
                const duration = audioElement.current.duration || 0;
                setCurrentTime(audioElement.current.currentTime);
                setProgress((audioElement.current.currentTime / duration) * 100);
            },
            false,
        );
    }, []);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    };
    return (
        <div className="message__audio">
            <audio src={audio} ref={audioElement} preload="auto"></audio>
            <div className="message__audio-progress" style={{ width: `${progress}%` }}></div>
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
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
                    {convertCurrentTime(currentTime)}
                </span>
            </div>
        </div>
    )
}

const Message = ({ photo, user, text, date, audio, incoming, isReaded, attachments, isTyping, onRemoveMessage }) => {
    return (
        <div className={classNames('message', {
            'message--incoming': incoming,
            'message--is-typing': isTyping,
            'message--image': attachments && attachments.length === 1,
            'message--is-audio': audio,
        })}>
            <div className="message__content">
                <CheckMessIcon incoming={!incoming} isReaded={isReaded} />
                <Popover
                    content={
                        <div>
                            <Button onClick={onRemoveMessage}>Удалить сообщение</Button>
                        </div>
                    }
                    trigger="click">
                    <div className="message__icon-actions">
                        <Button type="link" shape="circle" icon="ellipsis" />
                    </div>
                </Popover>
                <div className="message__photo">
                    <UserPhoto user={user} />
                </div>
                <div className="message__info">
                    {
                        (audio || text || isTyping) && (
                            <div className="message__bubble">
                                {text && (
                                    <p className="message__text">
                                        { reatStringReplace(text, /:(.+?):/g, (match, i) => (
                                            <Emoji key={i} emoji={match} set="apple" size={16} />
                                        )) }
                                    </p>
                                )}
                                {
                                    isTyping && (
                                        <div className="message__typing">
                                            <span />
                                            <span />
                                            <span />
                                        </div>
                                    )}
                                {audio && <AudioMessage audio={audio} />}
                            </div>
                        )
                    }


                    {
                        attachments && (
                            <div className="message__attachments">
                                {
                                    attachments.map((file, index) => (
                                        <div className="message__attachments-item" key={index}>
                                            <img src={file.url} alt={`${file.filename}`} />
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
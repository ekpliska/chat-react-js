import React, { useState, useEffect } from 'react';

import { Button, Input } from 'antd';

import { UploadField } from "@navjobs/upload";

import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const { TextArea } = Input;

const ChatInput = (props) => {
    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const { onSendMessage, currentDialogId } = props;


    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    }

    const handleSendMessage = (e) => {
        if (e.keyCode === 13) {
            onSendMessage(currentDialogId, value);
            setValue('');
        }
    }

    const setEmojiToInput = ({ colons }) => {
        setValue(`${value} ${colons}`);
    }

    /** Миссклик по кнопке открытия смайлов */
    const handleOutSideClick = (htmlElement, event) => {
        if (htmlElement && !htmlElement.contains(event.target)) {
            setShowEmojiPicker(false);
        }
    }

    /** Миссклик по кнопке открытия смайлов */
    useEffect(() => {
        const htmlElement = document.querySelector('.chat-input__smile-btn');
        document.addEventListener('click', handleOutSideClick.bind(this, htmlElement));
        return () => {
            document.removeEventListener('click', handleOutSideClick.bind(this, htmlElement));
        }
    }, []);

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible && (
                    <div className="chat-input__emoji-picker">
                        <Picker onSelect={ (emojiTag) => setEmojiToInput(emojiTag)} set="emojione" />
                    </div>
                )}
                <Button onClick={toggleEmojiPicker} type="link" icon="smile" />
            </div>

            <TextArea 
                size="large" 
                placeholder="Введите ваше сообщение..." 
                value={ value }
                onChange={ e => setValue(e.target.value) } 
                onKeyUp={ handleSendMessage}
                autoSize={{ minRows: 1, maxRows: 5 }}
            />

            <div className="chat-input__actions">
                <UploadField
                    onFiles={files => console.log(files) }
                    containerProps={{
                        className: 'chat-input__actions-upload-btn'
                    }}
                    uploadProps={{
                        accept: '.jpg,.jpeg,.png',
                    }}
                >
                <Button type="link" icon="camera" />
                </UploadField>
                { value
                    ? <Button type="link" icon="audio" />
                    : <Button type="link" icon="enter" />
                }
            </div>
        </div>
    )
}

export default ChatInput;
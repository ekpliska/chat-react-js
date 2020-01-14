import React, { useState } from 'react';

import { Button, Input } from 'antd';

import { UploadField } from "@navjobs/upload";

import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = () => {
    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    }

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible && (
                    <div className="chat-input__emoji-picker">
                        <Picker set="emojione" />
                    </div>
                )}
                <Button onClick={toggleEmojiPicker} type="link" icon="smile" />
            </div>
            <Input size="large" placeholder="Введите ваше сообщение..." onChange={ e => setValue(e.target.value) } />
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
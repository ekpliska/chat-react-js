import React, { useState } from 'react';

import { Button, Input } from 'antd';

import { UploadField } from "@navjobs/upload";

import './ChatInput.scss';

const ChatInput = () => {
    const [value, setValue] = useState('');

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" icon="smile" />
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
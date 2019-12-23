import React, { useState } from 'react';

import { Button, Input } from 'antd';

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
                <Button type="link" icon="camera" />
                { value
                    ? <Button type="link" icon="audio" />
                    : <Button type="link" icon="enter" />
                }
            </div>
        </div>
    )
}

export default ChatInput;
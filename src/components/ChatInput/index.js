import React, { Fragment } from 'react';

import { Button, Input } from 'antd';

import { UploadField } from "@navjobs/upload";

import { Picker } from 'emoji-mart';

import { UploadFiles } from '../';

import './ChatInput.scss';

const { TextArea } = Input;

const ChatInput = ({
    value,
    setValue,
    emojiPickerVisible,
    toggleEmojiPicker,
    setEmojiToInput,
    handleSendMessage,
    sendMessage,
    attachments,
    onSelectFiles,
    isRecording,
    onHideRecording,
    isLoading,
    onRecord }) => {

    console.log('value', value);
    return (

        <Fragment>
            <div className="chat-input">
                <div className="chat-input__smile-btn">
                    {emojiPickerVisible && (
                        <div className="chat-input__emoji-picker">
                            <Picker onSelect={(emojiTag) => setEmojiToInput(emojiTag)} set="emojione" />
                        </div>
                    )}
                    <Button onClick={toggleEmojiPicker} type="link" icon="smile" />
                </div>

                {isRecording
                    ? (
                        <div className="chat-input__record-status">
                            <i className="chat-input__record-status-bubble"></i>
                            Идет запись...
                            <Button type="link" shape="circle" icon="close" className="stop-recording" onClick={onHideRecording} />
                        </div>
                    ) : (
                        <TextArea
                            size="large"
                            placeholder="Введите ваше сообщение..."
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            onKeyUp={handleSendMessage}
                            autoSize={{ minRows: 1, maxRows: 5 }}
                        />
                    )
                }


                <div className="chat-input__actions">
                    <UploadField
                        onFiles={onSelectFiles}
                        containerProps={{
                            className: 'chat-input__actions-upload-btn'
                        }}
                        uploadProps={{
                            accept: '.jpg,.jpeg,.png',
                        }}
                    >
                        <Button type="link" icon="camera" />
                    </UploadField>
                    {isRecording || value
                        ? <Button type="link" icon="enter" onClick={sendMessage} />
                        : (
                            <div className="chat-input__record-btn">
                                <Button type="link" icon="audio" onClick={onRecord} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="chat-input__attachments">
                <UploadFiles attachments={attachments} />
            </div>
        </Fragment>
    )
}

export default ChatInput;
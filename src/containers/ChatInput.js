import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ChatInput as ChatInputBase } from '../components';

import { messagesActions } from '../redux/actions';

import { uploadFilesAPI } from '../utils/api';

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {

    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const [attachments, setAttachments] = useState([]);

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    }

    const handleSendMessage = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }

    const sendMessage = () => {
        fetchSendMessage(currentDialogId, value, attachments.map(file => file.uid));
        setValue('');
        setAttachments([]);
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

    const onSelectFiles = async files => {
        let uploaded = [];
        for (let i = 0; i < files.length; i++)  {
            const uid = Math.round(Math.random() * 1000);
            const file = files[i];
            uploaded = [
                ...uploaded,
                {
                    uid,
                    name: file.name,
                    status: 'uploading'
                }
            ];

            setAttachments(uploaded);
            // eslint-disable-next-line no-loop-func
            await uploadFilesAPI
                .upload(file)
                .then(({ data }) => {
                    uploaded = uploaded.map(item => {
                        if (item.uid === uid) {
                            return {
                                status: 'done',
                                uid: data.file._id,
                                name: data.file.filename,
                                url: data.file.url,
                            };
                        }
                        return item;
                    });
                });
        }
        setAttachments(uploaded);
    }

    if (!currentDialogId) {
        return null;
    }

    return (
        <ChatInputBase
            value={value}
            setValue={setValue}
            emojiPickerVisible={emojiPickerVisible}
            toggleEmojiPicker={toggleEmojiPicker}
            setEmojiToInput={setEmojiToInput}
            handleSendMessage={handleSendMessage}
            sendMessage={sendMessage}
            currentDialogId={currentDialogId}
            attachments={attachments}
            onSelectFiles={onSelectFiles}
        />
    )
}

export default connect(
    ({ dialogs }) => ({
        currentDialogId: dialogs.currentDialogId
    }),
    messagesActions
)(ChatInput);
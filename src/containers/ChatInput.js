import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { ChatInput as ChatInputBase } from '../components';

import { messagesActions, filesActions } from '../redux/actions';

import { uploadFilesAPI } from '../utils/api';

const ChatInput = (props) => {
    const {
        dialogs: { currentDialogId },
        attachments,
        fetchSendMessage,
        setAttachments,
        removeAttachment,
        user,
    } = props;

    const [value, setValue] = useState('');
    const [isRecording, setIsRecording] = useState('');
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [emojiPickerVisible, setShowEmojiPicker] = useState(false);
    const [isLoading, setLoading] = useState(false);

    window.navigator.getUserMedia =
        window.navigator.getUserMedia ||
        window.navigator.mozGetUserMedia ||
        window.navigator.msGetUserMedia ||
        window.navigator.webkitGetUserMedia;

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    }

    const handleSendMessage = (e) => {
        if (e.keyCode === 13) {
            sendMessage();
        }
    }

    const sendMessage = () => {
        if (isRecording) {
            mediaRecorder.stop();
        } else if (value || attachments.length) {
            fetchSendMessage({
                text: value,
                dialogId: currentDialogId,
                attachments: attachments.map(file => file.uid),
            });
            setValue('');
            setAttachments([]);
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

    const onSelectFiles = async files => {
        let uploaded = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const uid = Math.round(Math.random() * 1000);
            uploaded = [
                ...uploaded,
                {
                    uid,
                    name: file.name,
                    status: 'uploading',
                },
            ];
            setAttachments(uploaded);
            // eslint-disable-next-line no-loop-func
            await uploadFilesAPI.upload(file).then(({ data }) => {
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
    };

    const onRecord = () => {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: true }, onRecording, onError);
        }
    };

    const onRecording = stream => {
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.start();

        recorder.onstart = () => {
            setIsRecording(true);
        };

        recorder.onstop = () => {
            setIsRecording(false);
        };

        recorder.ondataavailable = e => {
            const file = new File([e.data], 'audio.webm');
            setLoading(true);
            uploadFilesAPI.upload(file).then(({ data }) => {
                sendAudio(data.file._id).then(() => {
                    setLoading(false);
                });
            });
        };
    };

    const sendAudio = audioId => {
        return fetchSendMessage({
            text: null,
            dialogId: currentDialogId,
            attachments: [audioId],
        });
    };

    const onHideRecording = () => {
        setIsRecording(false);
    };

    const onError = err => {
        console.log('Во время записи произошла следующая ошибка: ' + err);
    };

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
            sendMessage={sendMessage }
            onSelectFiles={onSelectFiles}
            attachments={attachments}
            isRecording={isRecording}
            onRecord={onRecord}
            onHideRecording={onHideRecording}
            isLoading={isLoading}
        />
    )
}

export default connect(
    ({ dialogs, attachments, user }) => ({
        dialogs,
        attachments: attachments.items,
        user: user.data,
    }),
    { ...messagesActions, ...filesActions }
)(ChatInput);
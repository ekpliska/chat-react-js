import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Empty, Spin, Modal } from "antd";

import { Message } from '..';

import './Messages.scss';

// incoming - входящее сообщение
const Messages = ({ blockRef, isLoading, items, user, onRemoveMessage, previewImage, setPreviewImage, onClosePreviewModal }) => {
    return (
        <div className="chat__dialog-messages" style={{ height: 'calc(100% - 220px)' }}>
            <div ref={blockRef} className={classNames("messages", { "messages--loading": isLoading })}>
                {
                    isLoading && !user
                        ? (
                            <Spin tip="Загрузка..." />
                        )
                        : items && !isLoading
                            ? (
                                items.length > 0 ? (
                                    items.map((item, index) => (
                                        <Message
                                            key={index}
                                            {...item}
                                            incoming={user._id === item.user._id}
                                            onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                                            setPreviewImage={setPreviewImage}
                                        />
                                    ))
                                ) : (
                                        <Empty description="Данный диалог не содержит сообщений" />
                                    )
                            ) : (
                                <Empty description="Выберите диалог" />
                            )
                }
                <Modal
                    visible={!!previewImage}
                    onCancel={onClosePreviewModal}
                    footer={null}
                >
                    <img src={previewImage} alt="Загруженное изображение" style={{ width: '100%' }} />
                </Modal>
            </div>
        </div>
    )
}

Messages.prototype = {
    items: PropTypes.array
};

export default Messages;
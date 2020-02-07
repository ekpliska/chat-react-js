import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Empty, Spin } from "antd";

import { Message } from '..';

import './Messages.scss';

// incoming - входящее сообщение
const Messages = ({ blockRef, isLoading, items, user, onRemoveMessage }) => {
    return (
        <div className="chat__dialog-messages">
            <div ref={ blockRef } className={ classNames("messages", { "messages--loading": isLoading }) }>
                {
                    isLoading
                        ? (
                            <Spin tip="Загрузка..." />
                        )
                        : items && !isLoading 
                            ? (
                                items.length > 0 ? (
                                    items.map((item, index) => (
                                        <Message 
                                            key={ index } 
                                            {...item} 
                                            incoming={ user._id === item.user._id } 
                                            onRemoveMessage={ onRemoveMessage.bind(this, item._id) }
                                        />
                                    ))
                                ) : (
                                    <Empty description="Данный диалог не содержит сообщений" />
                                )
                            ) :  (
                                <Empty description="Выберите диалог" />
                            )
                    }
            </div>
        </div>
    )
    //     <div>
    //         { items.map((item, index) => <Message {...item} />) }
    //         {/* <Message
    //             photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
    //             text="__text"
    //             date={new Date(2019, 9, 30)}
    //             incoming={true}
    //             attachments={[
    //                 {
    //                     url: "https://source.unsplash.com/100x100/?random=1,nature,water",
    //                     filename: "File name",
    //                 },
    //                 {
    //                     url: "https://source.unsplash.com/100x100/?random=1,nature,water",
    //                     filename: "File name",
    //                 }
    //             ]}
    //         />

    //         <Message
    //             photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
    //             text="__text 2"
    //             date={new Date(2019, 9, 30)}
    //             incoming={false}
    //             isReaded={false}
    //         />

    //         <Message
    //             photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
    //             incoming={true} isTyping
    //         />

    //         <Message
    //             photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
    //             incoming={true}
    //             attachments={[
    //                 {
    //                     url: "https://source.unsplash.com/100x100/?random=1,nature,water",
    //                     filename: "File name",
    //                 },
    //             ]}
    //         />

    //         <Message
    //             photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
    //             date={new Date(2019, 9, 30)}
    //             incoming={true}
    //             audio="https://notificationsounds.com/soundfiles/f4be00279ee2e0a53eafdaa94a151e2c/file-sounds-1080-cheerful-2.mp3"
    //         /> */}
    //     </div>
    // ) : (
    //         <Empty description="Нет сообщений" />
    //     )
}

Messages.prototype = {
    items: PropTypes.array
};

export default Messages;
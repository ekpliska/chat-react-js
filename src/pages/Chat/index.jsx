import React from 'react';

import { Icon, Input } from 'antd';

import { Message, Dialogs, Status } from '../../components';

import './Chat.scss';

const Chat = () => {
    return (
        <section className="chat-page">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Icon type="team" />
                            <span>Список диалогов</span>
                        </div>
                        <Icon type="form" />
                    </div>
                    <div className="chat__sidebar-search">
                        <Input.Search
                            placeholder="Поиск среди контактов"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs
                            userId={1}
                            items={[
                                {
                                    _id: 1,
                                    text: '___text in in a distant faraway galaxy, suddenly',
                                    created_at: new Date('10-10-2018'),
                                    user: {
                                        _id: 'qwe',
                                        fullname: 'Petr Ivanov',
                                        photo: null,
                                        isOnline: true
                                    },
                                    unreaded: 10
                                },
                                {
                                    _id: 2,
                                    text: '___text in in a distant faraway galaxy, suddenly',
                                    created_at: new Date(),
                                    user: {
                                        _id: 'asd',
                                        fullname: 'Petr Ivanov',
                                        photo: null,
                                        isOnline: true
                                    },
                                    unreaded: 0
                                }
                            ]} 
                        />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">User name</b>
                            <Status isOnline />
                        </div>
                        <Icon type="ellipsis" style={{ fontSize: '22px' }} />
                    </div>
                    <div className="chat__dialog-messages">
                        <Message
                            photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                            text="__text"
                            date={new Date(2019, 9, 30)}
                            incoming={true}
                            attachments={[
                                {
                                    url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                                    filename: "File name",
                                },
                                {
                                    url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                                    filename: "File name",
                                }
                            ]}
                        />

                        <Message
                            photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                            text="__text 2"
                            date={new Date(2019, 9, 30)}
                            incoming={false}
                            isReaded={false} 
                        />

                        <Message
                            photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                            incoming={true} isTyping 
                        />

                        <Message
                            photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                            incoming={true}
                            attachments={[
                                {
                                    url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                                    filename: "File name",
                                },
                            ]} 
                        />

                        <Message
                            photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                            date={new Date(2019, 9, 30)}
                            incoming={true}
                            audio="https://notificationsounds.com/soundfiles/f4be00279ee2e0a53eafdaa94a151e2c/file-sounds-1080-cheerful-2.mp3" 
                        />

                    </div>
                </div>
            </div>
            {/* 
            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                text="__text"
                date={new Date(2019, 9, 30)}
                incoming={true}
                attachments={[
                    {
                        url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                        filename: "File name",
                    },
                    {
                        url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                        filename: "File name",
                    }
                ]} />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                text="__text 2"
                date={new Date(2019, 9, 30)}
                incoming={false}
                isReaded={false} />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                incoming={true} isTyping />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                incoming={true}
                attachments={[
                    {
                        url: "https://source.unsplash.com/100x100/?random=1,nature,water",
                        filename: "File name",
                    },
                ]} />

            <Message
                photo="https://static-cdn.jtvnw.net/jtv_user_pictures/61763701-db95-45b3-8622-25c1ca38e1c1-profile_image-70x70.png"
                date={new Date(2019, 9, 30)}
                incoming={true}
                audio="https://notificationsounds.com/soundfiles/f4be00279ee2e0a53eafdaa94a151e2c/file-sounds-1080-cheerful-2.mp3" /> */}

        </section>
    )
}

export default Chat;
import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';

import { Dialogs, Messages, ChatInput, Status, SideBar } from '../../containers';

import './Chat.scss';

const Chat = ({ user }) => {
    return (
        <section className="chat-page">
            <div className="chat">
                <div className="chat__sidebar">
                    <SideBar />
                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={ user && user._id } />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header"><div />
                        <Status isOnline />
                        <Button type="link" icon="ellipsis" style={{ fontSize: '22px' }} />
                    </div>
                    <Messages />
                    <ChatInput />
                </div>
            </div>
        </section>
    )
}

export default connect(
    ({ user }) => ({
        user: user.data
    }),
    null
)(Chat);
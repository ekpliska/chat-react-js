import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'antd';

import { Status } from '../../components';
import { Dialogs, Messages, ChatInput } from '../../containers';

import './Chat.scss';

const Chat = ({ user }) => {
    return (
        <section className="chat-page">
            <div className="chat">
                <div className="chat__sidebar">
                    <div className="chat__sidebar-header">
                        <div>
                            <Button type="link" icon="team" />
                            <span>Список диалогов</span>
                        </div>
                        <Button type="link" icon="form" />
                    </div>
                    <div className="chat__sidebar-dialogs">
                        <Dialogs userId={1} />
                    </div>
                </div>
                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">
                                { user.fullname }
                            </b>
                            <Status isOnline />
                        </div>
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
import React from 'react';

import { Icon, Button, Modal, Select, Input, Form } from 'antd';

import './SideBar.scss';

const { Option } = Select;
const { TextArea } = Input;

const SideBar = ({
    users,
    isOpen, onShowModal, onHideModal, onAddDialog,
    inputValue, handleChangeInput,
    handleSearch, onSelectUser, selectedUserId,
    isLoading,
    messageValue, onChangeTextArea }) => {

    const options = users.map(user => <Option key={user._id}>{user.fullname}</Option>);

    return (
        <div className="chat__sidebar-header">
            <Icon type="team" />
            <span>Список диалогов</span>
            <Button type="link" icon="form" onClick={onShowModal} />
            <Modal
                title="Новый диалог"
                visible={isOpen}
                onOk={onAddDialog}
                onCancel={onHideModal}
                confirmLoading={isLoading}
                footer={[
                    <Button key="back" onClick={onHideModal}>
                        Отмена
                    </Button>,
                    <Button
                        disabled={!messageValue}
                        key="submit"
                        type="primary"
                        loading={isLoading}
                        onClick={onAddDialog}
                    >
                        Создать
                    </Button>,
                ]}
            >
                <Form className="add-dialog-form">
                    <Form.Item label="Введите имя пользователя или e-mail">
                        <Select
                            showSearch
                            value={inputValue}
                            placeholder="Имя пользователя"
                            style={{ width: '100%' }}
                            defaultActiveFirstOption={false}
                            showArrow={false}
                            filterOption={false}
                            onSearch={handleSearch}
                            onSelect={onSelectUser}
                            onChange={handleChangeInput}
                            notFoundContent={null}
                        >
                            {options}
                        </Select>
                    </Form.Item>
                    {selectedUserId && (
                        <Form.Item label="Введите текст сообщения">
                            <TextArea
                                placeholder="Текст сообщения..."
                                autoSize={{ minRows: 4, maxRows: 5 }}
                                onChange={onChangeTextArea}
                                value={messageValue}
                            />
                        </Form.Item>
                    )}
                </Form>


            </Modal>
        </div>
    )
}

SideBar.defaultProps = {
    users: [],
}

export default SideBar;
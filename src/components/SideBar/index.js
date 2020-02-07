import React, { useState } from 'react';

import { Icon, Button, Modal } from 'antd';

const SideBar = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    }
    
    return (
        <div className="chat__sidebar-header">
            <div>
                <Icon type="team" />
                <span>Список диалогов</span>
            </div>
            <Button type="link" icon="form" onClick={showModal} />
            <Modal
                title="Новый диалог"
                visible={isOpen}
                onOk={hideModal}
                onCancel={hideModal}
            >
                <p>...</p>
            </Modal>
        </div>
    )
}

export default SideBar;
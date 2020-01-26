import React from 'react';

import { Form, Icon, Input } from 'antd';

import { validateField } from '../../utils/helpers';

const FormField = ({ type = 'text', name, values, placeholder, handleChange, handleBlur, icon, touched, errors }) => {
    return (
        <Form.Item validateStatus={validateField(name, touched, errors)} hasFeedback
            help={ !touched[name] ? "" : errors[name] }>
            <Input
                type={ type }
                id={ name } name={ name } value={ values[name] }
                onChange={ handleChange }
                onBlur={ handleBlur }
                prefix={<Icon type={ icon } style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={ placeholder } size="large" />
        </Form.Item>
    )
}

export default FormField;
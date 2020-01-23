import { notification } from 'antd';

export default ({ title, description, type = 'info', duration = 2 }) => notification[type]({
    message: title,
    description: description,
    duration: duration
  });
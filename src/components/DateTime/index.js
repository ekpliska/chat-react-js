import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru';

const DateTime = ({ date }) => {
    return formatDistanceToNow(date, { includeSeconds: true, addSuffix: true, locale: ru })
}

DateTime.propTypes = {
    date: PropTypes.string,
}

export default DateTime;
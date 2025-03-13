const formatDate = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
    const moment = require('moment'); 
    return moment(date).format(format);
};

module.exports = formatDate;

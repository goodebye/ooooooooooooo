var dateFormat = require('dateformat');

exports.fmtPublishDate = function(date) {
    return dateFormat(date, "mm\ndd\nyyyy");
}

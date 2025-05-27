const mj = require('jalali-moment');

const toPersianDate = (date, format='YYYY/MM/DD') => {
    return mj(date).locale('fa').format(format)
}


module.exports = {toPersianDate}

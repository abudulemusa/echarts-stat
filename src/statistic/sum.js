define(function (require) {

    var array = require('../util/array');
    var isArray = array.isArray;
    var number = require('../util/number');
    var isNumber = number.isNumber;

    /**
     * Is a method for computing the sum of a list of numbers,
     * which will filter other data types.
     * @param  {Array.<number>} data
     * @return {number}
     */
    function sum(data) {

        if (!isArray(data)) {
            throw new Error('Invalid data type, you should input an array');
        }

        if (data.length === 0) {
            return 0;
        }

        var sumData = 0;
        for (var i = 0; i < data.length; i++) {
            if (isNumber(data[i])) {
                sumData += data[i];
            }
        }
        return sumData;
    }

    return sum;

});
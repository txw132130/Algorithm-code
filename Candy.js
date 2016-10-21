/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var length = ratings.length;
    var frontside= new Array(length);
    var backside = new Array(length);

    frontside[0] = 1;
    backside[length-1] = 1;
    for ( i = 1; i < length; i++) {
        if (ratings[i] > ratings[i-1]){
        	frontside[i] = frontside[i-1] + 1;
        }else{
        	frontside[i] = 1;
        }
    }

    for ( i = length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) {
        	backside[i] = backside[i+1] + 1;
        }else{
        	backside[i] = 1;
        }
    }
    var result = 0;
    for ( i = 0; i < length; i++) {
        result += Math.max(frontside[i], backside[i]);
    }

    return result;
};

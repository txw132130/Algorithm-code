var reverse = function(x) {
    if(x>=(Math.pow(2,31))) return 0;
    var a = (""+x);
    var reverseNumber = parseInt(a.replace('-','').split('').reverse().join(''));
    if(reverseNumber>=(Math.pow(2,31))){
    	return 0;
    }else{
    	return reverseNumber*(x<0?-1:1);
    }
};

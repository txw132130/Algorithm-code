var wordBreak = function(s, wordD) {
	  var arr = [];

	  var findWords = function(current, inputString){
	    if (inputString.length === 0){
	      arr.push(current.join(' '));
	      return;
	    }
       var input;
	    for (var i = 0; i < wordD.length; i++){
	      if (inputString.indexOf(wordD[i]) === 0){
	        current.push(wordD[i]);
	        input = inputString.slice(wordD[i].length);
	        findWords(current, input );
	        current.pop();
	      }
	    }
	  }
	  findWords([], s);
	  return arr;
	};

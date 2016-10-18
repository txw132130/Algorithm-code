/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    var  matrix = [], count=1;

		 if(!n){
		    	matrix = [];
		 }else {
		   for(var i = 0; i < n; i++){
			       	 matrix[i] = [];
			       	 
			     for(var j = 0; j < n; j++){
			            matrix[i].push(0);
		        } 
		   }
	    	for(var x=0; 2*x<n; x++){
	    	    
		        for( i=0+x; i<n-1-x; i++){
		            matrix[x][i] = count;
		            count++;
		        }
		        for(i=0+x; i<n-1-x; i++){
		            matrix[i][n-1-x] = count;
		            count++;
		        }
		        for(i=n-1-x; i>0+x; i--){
		        	matrix[n-1-x][i] = count;
		        	count++
		        }
		        for(i=n-1-x; i>0+x; i--){
		        	matrix[i][x] = count;
		        	count++
		        }
	    	}
	    	if(n%2===1){
	    	matrix[(n-1)/2][(n-1)/2] = n*n;
	    	}
		 }
	    	return matrix;

};

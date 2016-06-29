
var compute = function(dna1, dna2){
var counter = 0;
if (dna1.length == dna2.length){
 for(var i = 0; i < dna1.length; i++) {
   if(dna1.charAt(i) !== dna2.charAt(i)){
      counter += 1;
		console.log(counter)
   }
 } return counter;

} else{
  return "DNA strands must be of equal length."
};


};

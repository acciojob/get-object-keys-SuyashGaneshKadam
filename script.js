//your JS code here. If required.
let student = {
	name: "Suyash"
}

Object.prototype.getKeys = function(){
	let ans = [];
	for(i in student){
		ans.push(i);
	}
	return ans;
}
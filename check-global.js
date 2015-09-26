var test = []
if(typeof window !== "undefined" && window.self){
	test.push("if(self === o) return true;");
}

if(typeof global !== "undefined"){
	test.push("if(global === o) return true;");
}
test.push("return false;")

module.exports = new Function("o", test.join("\n"))
test= null

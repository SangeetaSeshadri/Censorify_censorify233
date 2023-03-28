var censoredWords=["sad","mad","bad"];
var customCensoredWords=[];
function censor(text){
	for( words in censoredWords)
		text=text.replace(censoredWords[words],"****");
	for( words in censoredWords)
		text=text.replace(customCensoredWords[words],"****");
		
	return text;
}
function addCensoredWord(word){
	customCensoredWords.push(word);
}
function getCensoredWords(){
	return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensoredWords;
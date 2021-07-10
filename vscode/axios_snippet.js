{
	// Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Example:
	// "Print to console": {
	// 	"scope": "javascript,typescript",
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"a
	// }

	"Axios Post Request": {
		"scope": "javascript,typescript",
		"prefix": "_axios_post",
		"body": [
			"axios.post('$1', '')",
			".then(response => {",
			" if (response.status == 200) {",
			"  console.warn(response.data);",
			"}",
			"})",
			".catch(error => {",
			"console.error(error);",
			"})",
			".then(() => {",
			"console.warn('$2');",
			"});",
		],
		"description": "Axios Post Request"
	},
	"Axios GET Request": {
		"scope": "javascript,typescript",
		"prefix": "_axios_get",
		"body": [
			"axios.get('$1')",
			".then(response => {",
			" if (response.status == 200) {",
			"  console.warn(response.data);",
			"}",
			"})",
			".catch(error => {",
			"console.error(error);",
			"})",
			".then(() => {",
			"console.warn('$2');",
			"});",
		],
		"description": "Axios Get Request"
	}


}

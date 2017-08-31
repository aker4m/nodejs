var path = require("path");

var directories = ["Users", "aker", "Documents"];
var docsDirectory = directories.join(path.sep);
console.log("문서 디렉토리 : %s", docsDirectory);

var curPath = path.join("/Users/aker", "hadoop");
console.log("파일 패스 : %s", curPath);

var filename = "/Users/aker/hadoop";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log("디렉토리 : %s, 파일이름 : %s, 확장자 : %s", dirname, basename, extname);

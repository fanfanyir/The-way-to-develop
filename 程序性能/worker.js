// Web worker
// Worker 对象
var loader = new Worker("../ES6/webpack.config.js");
loader.postMessage("file.txt");
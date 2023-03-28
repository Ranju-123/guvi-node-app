const os=require("os");
console.log("free mem",os.freemem()/1024/1024/1024);
console.log("total mem",os.totalmem()/1024/1024/1024);
console.log("version",os.version());
console.log("cpu",os.cpus());
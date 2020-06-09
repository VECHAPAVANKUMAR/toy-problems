const spawn = require("child_process").spawn;

var spawnProc = spawn('python', ['G:\\Github\\Software_App_Development\\toy-problems\\LRU\\LRUTest.py']);     
spawnProc.stdout.on('data', function(msg){         
    console.log(msg.toString())
});

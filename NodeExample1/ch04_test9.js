var fs = require('fs');

fs.open('./output.txt', 'r', function(err, fd){
    if(err) throw err;

    var buf = new Buffer(20);
    console.log('버퍼 타입 : %s', Buffer.isBuffer(buf));

    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
        if(err) throw err;

        var inStr = buffer.toString('utf8');
        console.log('inStr : %s', inStr);

        console.log('err:'+err, 'bytesRead:'+bytesRead, 'buffer:'+buffer);

        fs.close(fd, function(){
            console.log('파일 열고 읽기')
        });
    });
});
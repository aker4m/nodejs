//버퍼 객체 크기 지정 후 쓰기
var output = '안녕하세요.1';
var buffer1 = new Buffer(20);
var len = buffer1.write(output, 'utf8');
console.log('buffer1.toString() : '+buffer1.toString());

//문자열 이용하여 버퍼 객체 만들기
var buffer2 = new Buffer('안녕하세요.2', 'utf8');
console.log('buffer2.toString() : '+buffer2.toString());

//타입 확인
console.log('Buffer.isBuffer(buffer1) : '+Buffer.isBuffer(buffer1));

//버퍼 객체의 데이터를 문자열로 만들기
var byteLen = Buffer.byteLength(output);
var str1 = buffer1.toString('utf8', 0, byteLen);
var str2 = buffer2.toString('utf8');
console.log('str1 : '+str1);
console.log('str2 : '+str2);

//버퍼 객체의 문자열 복사하기
buffer1.copy(buffer2, 0, 0, len);
console.log('buffer2.toString() : %s', buffer2.toString('utf8'));

//버퍼 붙이기
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3.toString() : %s', buffer3.toString('utf8'));

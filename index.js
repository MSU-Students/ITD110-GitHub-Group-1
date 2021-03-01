const level = require('level');

const db = connectToDatabase ("./test-db");

var studentStatus = ['Applying', 'Under Interview', 'Exam Pending', 'Admitted', 'Probationary'];

(async function() {
    await acceptStudent('201811942', 'Anisah I. Dayaan', 21, 'Marawi City LDS');
}());


function connectToDatabase(db){
    return level(db, { valueEncoding: 'json' });   
}

async function acceptStudent(id, fullName, age, address){
    
    console.log('Student Admission');
    const student = { ID: id, Name: fullName, Age: age, Address: address, Status : studentStatus[0]};
    await db.put(id, student);
    console.log(student);
}
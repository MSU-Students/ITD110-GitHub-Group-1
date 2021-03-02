const level = require('level');

const db = connectToDatabase ("./test-db");

var studentStatus = ['Applying', 'Under Interview', 'Exam Pending', 'Admitted', 'Probationary'];

(async function() {
    await acceptStudent('201811942', 'Anisah I. Dayaan', 21, 'Marawi City LDS');
    var scheduleDate = 'February 28, 2021';
    await scheduleInterview('201811942', scheduleDate);
}());

function connectToDatabase(db){
    return level(db, { valueEncoding: 'json' });   
}

async function acceptStudent(id, fullName, age, address){
    console.log('\nStudent Admission');
    const student = { ID: id, Name: fullName, Age: age, Address: address, Status : studentStatus[0]};
    await db.put(id, student);
    console.log(student);
}

async function scheduleInterview(id, scheduleDate){
    var student = await db.get(id);
    console.log('\nSchedule of the Interview');
    student.Status = studentStatus[1];
    student.InterviewSchedule = scheduleDate;
    await db.put(id, student);
    console.log(student);
}
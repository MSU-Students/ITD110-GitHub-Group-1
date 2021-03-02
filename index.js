const level = require('level');

const db = connectToDatabase ("./test-db");

var studentStatus = ['Applying', 'Under Interview', 'Exam Pending', 'Admitted', 'Probationary'];

(async function() {
    await acceptStudent('201811942', 'Anisah I. Dayaan', 21, 'Marawi City LDS');
    var scheduleDate = 'February 28, 2021';
    var scheduleDateExam = 'March 08, 2021';
    var examScore = Math.random() * (180 - 50) + 50;
    examScore = examScore.toFixed();
    await scheduleInterview('201811942', scheduleDate);
    await scheduleExam('201811942', scheduleDateExam);
    await rateEntranceExam('201811942', examScore);
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

async function scheduleExam(id, scheduleDateExam){
    var student = await db.get(id);
        console.log('\nSchedule of the Exam');
        student.Status = studentStatus[2];
        student.ExamSchedule = scheduleDateExam;
        await db.put(id, student);
        console.log(student);
}

async function rateEntranceExam(id, examScore){
    var student = await db.get(id);
    console.log('\nRate of Entrance Exam');
        student.Status = studentStatus[3];
        student.RateExam = examScore;
        await db.put(id, student);
        console.log(student);
}


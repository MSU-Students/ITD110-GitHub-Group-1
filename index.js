var level = require('level');

var db = level("./test-db");

var student_status = ['Applying', 'Under Interview', 'Exam Pending', 'Admitted', 'Probationary'];

accept_student('201811942', ' Anisah Indar Dayaan', 21, ' Marawi City LDS');

function accept_student(id, fullName, age, address){
    db.put(id, [id, fullName, age, address], function(err){
        //The output of 201811942 = ['201811942', 'Anisah Indar Dayaan', 22, 'Marawi City LDS']
    })
    db.get(id, function(err, value){
        console.log("\nStudent Profile");
        console.log(value + '\nStatus: ' + student_status[0]); 
    })
    scheduleInterview(id, '2021/02/25');
}

async function scheduleInterview(id, scheduleDate){
    await db.get(id, function(err, value){
        console.log('');
        console.log('Schedule of the Interview');
        console.log('ID Number: ' + id + '\nStatus: ' + student_status[1]);
        console.log('Interview Schedule: ' + scheduleDate);
    })
    scheduleExam(id, scheduleDate);
}

async function scheduleExam(id, scheduleDate){
    await db.get(id, function(err, value){
        console.log('');
        console.log('Schedule of the Exam');
        var examDate = '2021/03/07';
        console.log('ID Number: ' + id + '\nStatus: ' + student_status[2]);
        console.log('Exam Schedule: ' + examDate);
    })
    rateStudentExam(id, student_status);
}

async function rateStudentExam(id, student_status){
    console.log('');
    console.log('Rate of Entrance Exam');
    var examScore = Math.random() * (180 - 100) + 100;
    examScore = examScore.toFixed();
    await db.get(id, function(err, value){
        if(examScore >= 80){
            console.log('\nRate: ' + examScore);
            console.log('ID Number: ' + id + '\nStatus: ' + student_status[3]);
        } else{
            console.log('\nRate: ' + examScore);
            console.log('ID Number: ' + id + '\nStatus: ' + student_status[4]);
        }
    })
}
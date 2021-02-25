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
    scheduleInterview(id, '20210225');
}

async function scheduleInterview(id, scheduleDate){
    await db.get(id, function(err, value){
        console.log('');
        console.log('ID Number: ' + id + '\nStatus: ' + student_status[1]);
        console.log('Interview Schedule: ' + scheduleDate);
    })
    scheduleExam(id, scheduleDate);
}
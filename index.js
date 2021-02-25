var level = require('level');

var db = level("./test-db");

var student_status = ['Applying'];

accept_student('201811942', ' Anisah Indar Dayaan', 21, ' Marawi City LDS');

function accept_student(id, fullName, age, address){
    console.log("Student Profile");
    db.put(id, [id, fullName, age, address], function(err){
        //The output of 201811942 = ['201811942', 'Anisah Indar Dayaan', 22, 'Marawi City LDS']
    })
    db.get(id, function(err, value){
        console.log(value, student_status); 
    })
}
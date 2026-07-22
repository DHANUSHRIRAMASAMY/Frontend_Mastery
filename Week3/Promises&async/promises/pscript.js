const loadBtn = document.getElementById("loadBtn");
const errorBtn = document.getElementById("errorBtn");
const clearBtn = document.getElementById("clearBtn");

const studentList = document.getElementById("studentList");
const message = document.getElementById("message");

// Student Data
const students = [
    {
        name: "Dhanu",
        age: 21,
        course: "JavaScript"
    },
    {
        name: "Priya",
        age: 22,
        course: "Python"
    },
    {
        name: "Arun",
        age: 20,
        course: "Java"
    }
];

// Promise Function
function loadStudents(){

    return new Promise(function(resolve,reject){

        message.textContent = "Loading Students...";

        setTimeout(function(){

            resolve(students);

        },2000);

    });

}

// Display Students
loadBtn.addEventListener("click",function(){

    studentList.innerHTML="";

    loadStudents()

    .then(function(data){

        message.textContent="Students Loaded Successfully";

        data.forEach(function(student){

            studentList.innerHTML += `
            
            <div class="student-card">

                <h3>${student.name}</h3>

                <p>Age : ${student.age}</p>

                <p>Course : ${student.course}</p>

            </div>

            `;

        });

    })

    .catch(function(error){

        message.textContent=error;

    })

    .finally(function(){

        console.log("Loading Finished");

    });

});

// Reject Example
errorBtn.addEventListener("click",function(){

    studentList.innerHTML="";

    message.textContent="Loading Students...";

    new Promise(function(resolve,reject){

        setTimeout(function(){

            reject("Unable to load student data.");

        },2000);

    })

    .then(function(data){

        console.log(data);

    })

    .catch(function(error){

        message.textContent=error;

    })

    .finally(function(){

        console.log("Request Finished");

    });

});

// Clear Data
clearBtn.addEventListener("click",function(){

    studentList.innerHTML="";

    message.textContent="";

});
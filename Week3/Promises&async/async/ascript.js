const loadBtn = document.getElementById("loadBtn");
const errorBtn = document.getElementById("errorBtn");
const clearBtn = document.getElementById("clearBtn");

const message = document.getElementById("message");
const studentList = document.getElementById("studentList");

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

function getStudents() {

    return new Promise(function(resolve) {

        setTimeout(function() {

            resolve(students);

        }, 2000);

    });

}

async function loadStudents() {

    studentList.innerHTML = "";
    message.textContent = "Loading Students...";

    try {

        const data = await getStudents();

        message.textContent = "Students Loaded Successfully";

        data.forEach(function(student) {

            studentList.innerHTML += `
            
            <div class="student-card">
                <h3>${student.name}</h3>
                <p>Age : ${student.age}</p>
                <p>Course : ${student.course}</p>
            </div>

            `;

        });

    }

    catch(error) {

        message.textContent = error;

    }

    finally {

        console.log("Loading Finished");

    }

}

loadBtn.addEventListener("click", loadStudents);



// Error Example

function showError() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            reject("Unable to load student data.");

        }, 2000);

    });

}

async function displayError() {

    studentList.innerHTML = "";
    message.textContent = "Loading Students...";

    try {

        await showError();

    }

    catch(error) {

        message.textContent = error;

    }

    finally {

        console.log("Request Finished");

    }

}

errorBtn.addEventListener("click", displayError);

// Clear Button

clearBtn.addEventListener("click", function() {

    studentList.innerHTML = "";
    message.textContent = "";

});

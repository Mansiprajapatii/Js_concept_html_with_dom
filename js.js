const courses = [
    {
        name : "Operting FileSystem",
        lecture : "8",
    },
    {
        name : "Python",
        lecture : "3",
    },
    {
        name : "Analysis and Design of Algorithems",
        lecture : "9",
    },
    {
        name : "Environment Management System ",
        lecture : "5",
    },
    {
        name : "Machine Learning with R Language",
        lecture : "6",
    },
    {
        name : "DataBase Management System",
        lecture : "7",
    }
    
];

function generateList() {
    const ui = document.querySelector(".list");
     ui.innerHTML = "";
    courses.forEach( (course) => {
    
        const li = document.createElement("li");
        li.classList.add("list-item");
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("lecture-number");
        const lecture = document.createTextNode(course.lecture);
        span.appendChild(lecture);

        li.appendChild(span)

        ui.appendChild(li);
    })
}

generateList();
// also call  by event listener
window.addEventListener("load" , generateList);

const button = document.querySelector(".sort-button");
button.addEventListener("click" , () => {
    courses.sort( (a,b) => (a.lecture-b.lecture));
    generateList();
})


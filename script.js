// TODO: add code here

window.addEventListener("load", function(response) {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json();
    }).then(function(json) {
        console.log(json);
        const container = document.getElementById("container")
        let astronauts = ""
        for (astronaut of json) {
            astronauts += `<div class="astronaut">
            <div class="bio">
            <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
            <ul>
            <li>${astronaut.hoursInSpace}</li>
            <li>${astronaut.active}</li>
            <li>${astronaut.skills}</li>
            </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>`
        }
        
        container.innerHTML = astronauts
    })
})


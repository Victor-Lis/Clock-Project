const ponteiro = document.querySelector("#ponteiro")

function getHours(){
    let hours = new Date().getHours()   
    let min = new Date().getMinutes()
    ponteiro.style.transform = `rotate(${(hours+(min/60))*30}deg)`
}

setInterval(() => {
    getHours()
}, 1000)
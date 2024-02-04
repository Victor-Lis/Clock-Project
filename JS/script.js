const ponteiro = document.querySelector("#ponteiro")

function getHours(){
    let hours = new Date().getHours()   
    ponteiro.style.transform = `rotate(${Math.abs(parseInt(hours))*30}deg)`
}

setInterval(() => {
    getHours()
}, 1000)
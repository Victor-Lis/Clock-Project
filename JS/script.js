const ponteiro = document.querySelector("#ponteiro")
const time = document.querySelector("#time")

function getHours(){
    let hours = new Date().getHours()   
    let min = new Date().getMinutes()
    time.innerText = `${formatNumber(hours)}:${formatNumber(min)}`
    ponteiro.style.transform = `rotate(${(hours+(min/60))*30}deg)`
}

const formatNumber = (n) => n < 10? "0"+n : n

setInterval(() => {
    getHours()
}, 1000)
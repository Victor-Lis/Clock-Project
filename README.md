
# Clock Project

Esse projeto é um tanto quanto simples, mas achei interessante tentar desenvolver a lógica para representar o horário no relógio sozinho, pois considerei como interessante trabalhar com graus para tentar representar a hora.

Eu vi essa ideia a partir de um projeto muito bacana do meu amigo [Pedro-Henrique](https://github.com/PedroHenriqueMoraesSamsonas)

## HTML
```html
<body>  
    <div class="background">
        <p class="tempo-digital" id="time">00:00</p>
        <div class="ponteiro-body" id="ponteiro">
            <div class="ponteiro"></div>
        </div>
        <div class="texts">
            <h3 class="twelve">12</h3>
            <h3 class="one">01</h3>
            <h3 class="two">02</h3>
            <h3 class="three">03</h3>
            <h3 class="four">04</h3>
            <h3 class="five">05</h3>
            <h3 class="six">06</h3>
            <h3 class="seven">07</h3>
            <h3 class="eight">08</h3>
            <h3 class="nine">09</h3>
            <h3 class="ten">10</h3>
            <h3 class="eleven">11</h3>
        </div>
    </div>
</body>
```

## CSS
```css
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-family: sans-serif;
}

body {
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
}

.background {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  background-color: #fff;
  position: absolute;
}

.ponteiro-body {
  width: 10px;
  height: 125px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.ponteiro {
  width: 100%;
  height: 50%;
  background-color: #000;

  margin: 0 auto;
}

.texts {
  position: absolute;
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .one {
    position: absolute;
    color: #fff;
    height: 200px;
    z-index: 1;
    transform: rotate(30deg);
  }

  ...

  > .twelve {
    position: absolute;
    color: #fff;
    height: 200px;
    width: 20px;
    z-index: 1;
  }
}

.tempo-digital{
    position: absolute;
    top: -25vh;
    font-size: 2rem;
    color: #fff;
    border: 2px solid #fff;
    padding: 5px 10px;
    text-align: center;
}
```

## JS
Embora o projeto tenha começado com a ideia de desenvolver minha lógica, essa foi a parte mais fácil:
```js
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
```

## Screenshots

## Autores

- [@Victor-Lis](https://www.github.com/Victor-Lis)


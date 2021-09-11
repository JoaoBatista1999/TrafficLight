const traficLight = document.querySelector('#image');
const switches = document.querySelector('#button-container');
let newMode;
let colorIndex = 0;

switches.addEventListener('click', (event) => {
    clearPrevious();   
    instructions[event.target.id](); 
});

const instructions = {
    off: () => traficLight.src = './Images/off.png',
    green: () => traficLight.src = './Images/green.png',
    yellow: () => traficLight.src = './Images/yellow.png',
    red: () => traficLight.src = './Images/red.png',
    auto: () => newMode = setInterval(automaticLights, 1500),
    low: () => newMode = setInterval(automaticLights, 2700),
    medium: () => newMode = setInterval(automaticLights, 1000),
    high: () => newMode = setInterval(automaticLights, 200)
}

const automaticLights = () => {
    const nextColor = () => colorIndex<2? colorIndex++ : colorIndex=0;    
    const colors = ['green', 'yellow', 'red'];
    traficLight.src = `./Images/${colors[colorIndex]}.png`;  
    nextColor()
};

const clearPrevious = () => {clearInterval(newMode)};

function changeMode(){
    changeClasses()
    changeText()
}

function changeClasses(){
    botão.classList.toggle(DarkModeClass);
    h1.classList.toggle(DarkModeClass);
    body.classList.toggle(DarkModeClass);
    footer.classList.toggle(DarkModeClass);
}

function changeText(){
    const lightMode = "Light-Mode";
    const darkMode = "Dark-Mode";

    if (body.classList.contains(DarkModeClass)){
        botão.innerHTML=lightMode;
        h1.innerHTML = darkMode+" ON";
        return;
    }

    botão.innerHTML = darkMode;
    h1.innerHTML = lightMode +" ON";

}

const DarkModeClass = "Dark-Mode"
const botão = document.getElementById("Mode-Selector");
const h1 = document.getElementById("page-title");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botão.addEventListener("click",changeMode);

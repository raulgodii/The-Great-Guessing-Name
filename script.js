// main
window.onload = () => {
    easyModeEvent = document.getElementById("easyMode");
    hardModeEvent = document.getElementById("hardMode");

    // Solution
    solution = document.getElementById("solution");
    solution.innerHTML = generateRandomColor();

    // Default Level
    easyMode = true;
    hardMode = false;

    easyModeEvent.addEventListener("click", (e)=>{
        easyMode = true;
        hardMode = false;
        easyModeEvent.style = "background-color: blue;"
        hardModeEvent.style = "background-color: white;"
    });

    hardModeEvent.addEventListener("click", (e)=>{
        easyMode = false;
        hardMode = true;
        easyModeEvent.style = "background-color: white;"
        hardModeEvent.style = "background-color: blue;"
    });

    // Paint Divs
    paintDivs(easyMode, hardMode);

}

function modeEvent(e){
    
}

function generateRandomColor(){
    res = "RGB(";

    for(let i=0; i<3; i++){
        res += (Math.floor(Math.random()*256));
        if(i!=2) res += ", ";
    }

    res += ")";

    return res;
}

function paintDivs(easyMode, hardMode){
    if(easyMode) n=3; else n=6;

    color = document.getElementsByClassName("color");
    console.log(color);
    for(let i=0; i<n; i++){
        color[i].style = ("background-color: " + generateRandomColor() + ";");
    }
}
// main
window.onload = () => {
    easyModeEvent = document.getElementById("easyMode");
    hardModeEvent = document.getElementById("hardMode");
    color = document.getElementsByClassName("color");

    // Solution
    solution = document.getElementById("solution");
    solutionColor = generateRandomColor();
    solution.innerHTML = solutionColor;

    // Default Level
    easyMode = true;
    hardMode = false;

    easyModeEvent.addEventListener("click", (e)=>{
        easyMode = true;
        hardMode = false;
        easyModeEvent.style = "background-color: blue;"
        hardModeEvent.style = "background-color: white;"
        solutionColor = generateRandomColor();
    solution.innerHTML = solutionColor;
        paintDivs();
    });

    hardModeEvent.addEventListener("click", (e)=>{
        easyMode = false;
        hardMode = true;
        easyModeEvent.style = "background-color: white;"
        hardModeEvent.style = "background-color: blue;"
        solutionColor = generateRandomColor();
    solution.innerHTML = solutionColor;
        paintDivs();
    });

    // Paint Divs
    paintDivs();

    color.forEach(element => {
        element.addEventListener("click", checkSolution());
    });


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

function paintDivs(){
    if(easyMode){
        for(let i=3; i<6; i++){
            color[i].style = ("background-color: white;");
        }
        n=3;
    } else{
        n=6;
    }

    for(let i=0; i<n; i++){
        color[i].style = ("background-color: " + generateRandomColor() + ";");
    }

    random = Math.floor(Math.random()*(n));
    color[random].style = ("background-color: " + solutionColor + "; border:4px solid black;");
}

function checkSolution(e){
    console.log(e.target.style.background-color);
}
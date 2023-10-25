// main
window.onload = () => {
    easyModeEvent = document.getElementById("easyMode");
    hardModeEvent = document.getElementById("hardMode");
    color = document.getElementsByClassName("color");
    header = document.getElementById("header");

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
        easyModeEvent.style = "background-color: #002f83;color: white;"
        hardModeEvent.style = "background-color: white; color: black;"
        solutionColor = generateRandomColor();
        solution.innerHTML = solutionColor;
        paintDivs();
    });

    hardModeEvent.addEventListener("click", (e)=>{
        easyMode = false;
        hardMode = true;
        easyModeEvent.style = "background-color: white; color: black;"
        hardModeEvent.style = "background-color: #002f83;color: white;"
        solutionColor = generateRandomColor();
        solution.innerHTML = solutionColor;
        paintDivs();
    });

    // Paint Divs
    paintDivs();

    for(let i=0; i<color.length; i++){
        color[i].addEventListener("click", checkSolution);
    }

    newColors = document.getElementById("newColors");
    newColors.addEventListener("click", (e) =>{
        solutionColor = generateRandomColor();
        solution.innerHTML = solutionColor;
        paintDivs();
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
            color[i].style = ("background-color: #0e1a2cf; box-shadow:none;");
        }
        n=3;
    } else{
        n=6;
    }

    for(let i=0; i<n; i++){
        color[i].style = ("background-color: " + generateRandomColor() + ";");
    }

    random = Math.floor(Math.random()*(n));
    color[random].style = ("background-color: " + solutionColor + ";");

    header.style.backgroundColor = "#002f83";
}

function checkSolution(e){
    bgColor = e.target.style.backgroundColor;
    if(solutionColor.toLowerCase()==bgColor){
        document.getElementById("header").style.backgroundColor = bgColor;
        for(let i=0; i<6; i++){
            color[i].style = ("background-color: #0e1a2c; box-shadow:none;");
        }
        e.target.style.backgroundColor = bgColor;
    } else {
        e.target.style.backgroundColor = "#0e1a2c";
    }

}
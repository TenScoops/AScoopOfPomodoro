let workPanel = document.getElementById('work');
let breakPanel = document.getElementById('break');

//buttons
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

//alarms
let sound1 = document.getElementById("breaktime");
sound1.volume = 0.16;

let sound2 = document.getElementById("timetowork");
sound2.volume = 0.16;

let soundClick = document.getElementById("click");
soundClick.volume = 0.32;

let playClick = document.getElementById("joy")
playClick.volume = 0.32

let workTime = 25;
let breakTime = 10;

let workSeconds = "00";
let breakSeconds = "00";


function makeMeTwoDigits(n){//add 0s to clock where needed
    return(n < 10 ? "0" : "") + n;
}

//display
window.onload = () => {
    document.getElementById('minutes').innerHTML = makeMeTwoDigits(workTime);
    document.getElementById('seconds').innerHTML = workSeconds;

    workPanel.classList.add('active');
}

let time;// stores reference to timer variable

//start button
start.addEventListener('click', function(){
//click sound
playClick.play();

    //start timer
    if(time === undefined){//if it hasnt been clicked
        if(workPanel.classList.contains('active')){
            if(workSeconds == "00"){
                workSeconds = 59;
                workTime--;
            }
            //change circle background color
            document.getElementById("circle").style.backgroundColor = "rgb(125, 182, 50)";
            
            time = setInterval(timer, 1000);
        }
    }

    //start timer
    if(time === undefined){//if it hasnt been clicked
        if(breakPanel.classList.contains('active')){
            if(breakSeconds == "00"){
                breakSeconds = 59;
                breakTime--;
            }
            //change circle background color
            document.getElementById('circle').style.backgroundColor = "#f1a043";
            time = setInterval(timer, 1000);
        }
    }
    //display pause and reset buttons
    document.getElementById('start').style.display = "none";
    // document.getElementById('reset').style.display = "block";
    document.getElementById('pause').style.display = "block";
   
})

//pause button
pause.addEventListener('click', function(){
    //click sound
    soundClick.play();

    clearInterval(time);
    time = undefined;

    document.getElementById('start').style.display = "block";
    document.getElementById("pause").style.display = "none";
    document.getElementById("circle").style.backgroundColor = "#438ff1";
    
})

//reset button
reset.addEventListener("click", function(){
    //click sound
    soundClick.play();

    workTime = 25;
    workSeconds = "00";
    breakTime = 10;
    breakSeconds = "00";
    document.getElementById('minutes').innerHTML = makeMeTwoDigits(workTime);
    document.getElementById('seconds').innerHTML = workSeconds;
    clearInterval(time);
    time = undefined;
    document.getElementById('start').style.display = "block";
    document.getElementById("pause").style.display = "none";
    
    workPanel.classList.add('active');
    breakPanel.classList.remove('active');
    document.getElementById("circle").style.backgroundColor = "#438ff1";

    
})

//break panel
breakPanel.addEventListener('click', function(){
    clearInterval(time);
    time = undefined;
    document.getElementById('minutes').innerHTML = makeMeTwoDigits(breakTime);
    document.getElementById('seconds').innerHTML = breakSeconds;

    workPanel.classList.remove('active');
    breakPanel.classList.add('active');

    document.getElementById('circle').style.backgroundColor = "#438ff1";
    

    document.getElementById('start').style.display = "block";
    document.getElementById("pause").style.display = "none";
    
})

//work panel
workPanel.addEventListener('click', function(){
    clearInterval(time);
    time = undefined;
    //display work timer
    document.getElementById('minutes').innerHTML = makeMeTwoDigits(workTime);
    document.getElementById('seconds').innerHTML = workSeconds;

    workPanel.classList.add('active');
    breakPanel.classList.remove('active');

    document.getElementById('circle').style.backgroundColor = "#438ff1";

    document.getElementById('start').style.display = "block";
    document.getElementById("pause").style.display = "none";
})

function timer(){
    //update the time
    document.getElementById('minutes').innerHTML = makeMeTwoDigits(workTime);
    document.getElementById('seconds').innerHTML = makeMeTwoDigits(workSeconds);

    if(workPanel.classList.contains('active')){
        //work timer
        if(workSeconds !== 0){
            workSeconds--;
        }else if(workTime !== 0 && workSeconds === 0){
            workSeconds = 59;
            workTime--;
        }else if(workTime === 0 && workSeconds === 0){
            sound1.play();
            clearInterval(time);
            time = undefined;
        }
    }

    else if(breakPanel.classList.contains('active')){
        //update the time
        document.getElementById('minutes').innerHTML = makeMeTwoDigits(breakTime);
        document.getElementById('seconds').innerHTML = makeMeTwoDigits(breakSeconds);


        //break timer
        if(breakSeconds !== 0){
            breakSeconds--;
        }else if(breakTime !== 0 && breakSeconds === 0){
            breakSeconds = 59;
            breakTime--;
        }else if(breakTime === 0 && breakSeconds === 0){
            sound2.play();
            clearInterval(time);
            time = undefined;
        }
    }
}


//store info and use 

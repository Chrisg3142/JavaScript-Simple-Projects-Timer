var inputHour;
var inputMinute;
var inputSecond;
var outputHour = document.getElementById("outputHour");
var outputMinute = document.getElementById("outputMinute");
var outputSecond = document.getElementById("outputSecond");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var timerApp;
var outputContainer = document.getElementById("outputContainer");
var inputContainer = document.getElementById("inputContainer");

//function that uses format function and gets value from input and starts clokc with
//values then subracts from each number
function StartClock()
{
    inputHour = Number(document.getElementById("inputHour").value);
    inputMinute = Number(document.getElementById("inputMinute").value);
    inputSecond = Number(document.getElementById("inputSecond").value);

    if(inputHour > 0 || (inputMinute > 0 && inputMinute < 60)|| (inputSecond > 0 && inputSecond < 60))
    {
        outputHour.innerHTML = FormatTime(inputHour);
        outputMinute.innerHTML = FormatTime(inputMinute);
        outputSecond.innerHTML = FormatTime(inputSecond);
        outputContainer.style.display = "flex";
        inputContainer.style.display = "none";
        startBtn.style.display = "none";
        stopBtn.style.display = "inline-block";
        timerApp = setInterval(myClock, 1000);
    }
    else
    {
        document.getElementById("inputHour").value = "";
        document.getElementById("inputMinute").value = "";
        document.getElementById("inputSecond").value = "";
        alert("Enter valid time.");
    }
}

function StopClock()
{
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    outputHour.innerHTML = "00";
    outputMinute.innerHTML = "00";
    outputSecond.innerHTML = "00";
    clearInterval(timerApp);
}

function ResetClock()
{
    StopClock();
    outputContainer.style.display = "none";
    inputContainer.style.display = "flex";
    document.getElementById("inputHour").value = "";
    document.getElementById("inputMinute").value = "";
    document.getElementById("inputSecond").value = "";
    outputHour.innerHTML = "00";
    outputMinute.innerHTML = "00";
    outputSecond.innerHTML = "00";
    inputHour = 0;
    inputMinute = 0;
    inputSecond = 0;
}
    
function myClock()
{  
    //starts with seconds and constantly changes the time when not equal to zero
    if(inputSecond > 0){
        inputSecond--;
        outputSecond.innerHTML = FormatTime(inputSecond);
    }else{ //next goes to minutes
        if(inputMinute > 0){
            inputMinute--;
            outputMinute.innerHTML = FormatTime(inputMinute);
            inputSecond = 59;
            outputSecond.innerHTML = FormatTime(inputSecond);
        }else{ //next goes to hours
            if(inputHour > 0){
                inputHour--;
                outputHour.innerHTML = FormatTime(inputHour);
                inputMinute = 59;
                outputMinute.innerHTML = FormatTime(inputMinute);
                inputSecond = 59;
                outputSecond.innerHTML = FormatTime(inputSecond);
            }else{//when the timer ends it stops the clock and plays a sound
                StopClock();
                new Audio('./beep.mp3').play();
                inputContainer.style.display = "flex"; //show the original input container when timer ends
                outputContainer.style.display = "none"
                return;
            }
        }
    }
}

//function to put time into proper format
function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time.toString();
    }
    return formatedTime
}


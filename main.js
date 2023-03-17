var inputHour;
var inputMinute;
var inputSecond;
var outputHour = document.getElementById("outputHour");
var outputMinute = document.getElementById("outputMinute");
var outputSecond = document.getElementById("outputSecond");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var stopWatch;
var outputContainer = document.getElementById("outputContainer");

function SetTimerValue()
{
    inputHour = Number(document.getElementById("inputHour").value);
    inputMinute = Number(document.getElementById("inputMinute").value);
    inputSecond = Number(document.getElementById("inputSecond").value);
}

function StartClock()
{
    if(inputHour > 0 || inputMinute > 0 || inputSecond > 0)
    {
        outputHour.innerHTML = FormatTime(inputHour);
        outputContainer.style.display = "flex";
        startBtn.style.display = "none";
        stopBtn.style.display = "inline-block";
        stopWatch = setInterval(myClock, 1000);
    }
}

function StopClock()
{
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";

    clearInterval(stopWatch);
}

function ResetClock()
{
    StopClock();
    outputContainer.style.display = "none";
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
    if(inputSecond > 0){
        inputSecond--;
        outputSecond.innerHTML = FormatTime(inputSecond);
    }else{
        if(inputMinute > 0){
            inputMinute--;
            outputMinute.innerHTML = FormatTime(inputMinute);
            inputSecond = 59;
            outputSecond.innerHTML = FormatTime(inputSecond);
        }else{
            if(inputHour > 0){
                inputHour--;
                outputHour.innerHTML = FormatTime(inputHour);
                inputMinute = 59;
                outputMinute.innerHTML = FormatTime(inputMinute);
                inputSecond = 59;
                outputSecond.innerHTML = FormatTime(inputSecond);
            }else{
                StopClock();
                new Audio('./beep.mp3').play()
                return;
            }
        }
    }
}

function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time;
    }
    return formatedTime
}
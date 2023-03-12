var inputHour;
var inputMinute;
var inputSecond;
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
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
        hour.innerHTML = FormatTime(inputHour);
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
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    inputHour = 0;
    inputMinute = 0;
    inputSecond = 0;
}
    
function myClock()
{      
    if(inputSecond <= 0)
    {
        if(inputMinute <= 0)
        {
            if(inputHour == 0 && inputMinute == 0 && inputSecond ==0)
            {
                StopClock();
                new Audio('./beep.mp3').play()
                return;
            }
            else
            {
                inputHour--;
            }
            hour.innerHTML = FormatTime(inputHour);
            inputMinute = 60;
        }
        inputMinute--;
        minute.innerHTML = FormatTime(inputMinute);
        inputSecond = 60;
    }
    inputSecond--;
    second.innerHTML = FormatTime(inputSecond);
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
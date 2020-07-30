var time=prompt("Enter time for stopwatch in sec");
const m=document.getElementById("1");
const mn=document.getElementById("MN");
m.innerText="Stop Watch For "+time+" seconds";
function timer(){
    if(time>0){
        time=time-1;
        mn.innerText=time;
        // console.log(time);
        return time;
    }
    else{
        mn.innerText="Time up !!!";
        stop;
    }    
}


setInterval(timer,1000);

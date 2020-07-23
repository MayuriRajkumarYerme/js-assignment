
const Ctime=document.getElementById('time');
//console.log(Ctime);

function Time(){
    let d=new Date();
    let time=d.toLocaleTimeString();
    Ctime.innerText=time;
    //console.log(t);
}
setInterval(Time,1000);

var nm=prompt("Enter your name");
document.write(`<br><h3>Welcome ${nm}<br></h3>`);
var i=0;
function changeColor(){
   
    //const bn=document.getElementById('btn');
    if(i%2==0){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';

        i++;
        //console.log(bn);
    }
    else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        i++;
    }
}
// const dcolor=document.getElementById('btn');
// dcolor.changeColor();

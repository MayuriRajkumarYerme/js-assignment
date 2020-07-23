let color=['background-color:red;','background-color:yellow;','background-color:skyblue;','background-color:green;','background-color:pink;','background-color:orange;'];
var i;
const attr=document.getElementById("Qs");

var n=0;
function hello(){
    console.log(n);
    attr.setAttribute('style',color[n]);
    n++;
    if(n>5){
        n=0;
    }
}
hello();
setInterval(hello,5000) ;
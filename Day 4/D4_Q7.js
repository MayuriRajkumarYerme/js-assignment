var n=prompt("Enter a number");
var i,j,flag;
for(j=1;j<n;j++)
{
    for(i=2;i<=j;i++)
    {
        if(j%i==0)
        {
            break;
        }
    }
    if(j==i){
        console.log(j);
    }

}

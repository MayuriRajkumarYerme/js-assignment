
for(i=0;i<=100;i++)
{
    if(i%3==0)
    {
        console.log(`${i} Multiple of 3 - output is fizz`);
    }
    if(i%5==0)
    {
        console.log(`${i} Multiple of 5 - output is buzz`);
    }
    if(i%3==0 && i%5==0)
    {
        console.log(`${i} Multiple of 3 & 5 - output is fizzbuzz`);
    }

}
cosnsole.log("Out");
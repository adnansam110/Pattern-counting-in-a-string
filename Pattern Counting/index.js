var str =prompt("Enter a string");
var count = 0;
var arr = str.split("");
var checking = (arr) =>{
    for (var i=0;i<arr.length;i++)
    {
        if (arr[i]==='a' || arr[i]==='A')
        {
            if (arr[i+4]==='b' || arr[i-4]==='b')
            
            count=count+1;
        }
        else if (arr[i]==='b' || arr[i]==='B')
        {
            if (arr[i+4]==='a' || arr[i-4]==='A')
            
            count=count+1;
        }
    }
    return count;
}
var show = checking(arr);
document.write(show);
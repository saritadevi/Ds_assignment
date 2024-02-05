function checkString(s1, s2, indexFound, Size)
{
    for(let i = 0; i < Size; i++)
    {
     
        //check whether the character is equal or not
        if(s1[i] != s2[(indexFound + i) % Size])return false;
         
        // %Size keeps (indexFound+i) in bounds, since it ensures it's value is always less than Size
    }
 
    return true;
}
 
// driver code
let s1 = "abcd";
let s2 = "cdab";
 
if(s1.length != s2.length)
{
    document.write("s2 is not a rotation on s1");
}
else
{
     
    let indexes = []; //store occurrences of the first character of s1
    let Size = s1.length;
    let firstChar = s1[0];
    for(let i = 0; i < Size; i++)
    {
        if(s2[i] == firstChar)
        {
            indexes.push(i);
        }
    }
 
    let isRotation = false;
 
    // check if the strings are rotation of each other for every occurrence of firstChar in s2
    for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);
 
        if(isRotation)
            break;
    }
 
    if(isRotation)document.write("s2 is rotation of s1")
    else document.write("s2 is not a rotation of s1")
}

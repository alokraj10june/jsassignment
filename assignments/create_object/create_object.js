function CreateObject(arr) {
    // Write your code here
    di={};
    for(let i=0;i<arr.length;i+=2)di[arr[i]]=arr[i+1];
    return di

}

module.exports = CreateObject;

var arr = [i=0,i<=101,i++];
function removeDuplicates(data){
    return data.filter((value,index)=> data.indexOf(value)=== index);

};
console.log(removeDuplicates(arr));
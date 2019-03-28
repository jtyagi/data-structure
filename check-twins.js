/*
corner cases are not checked 
*/
twins =(a,b)=>{ 
   let isTwins = true;
    let i=0;
    while(b){
    debugger;
    if((ind = b.indexOf(a[i]))>=0){
       b= b.replace(a[i],'');
    
    }else{
        isTwins = false;
        break;
    }
    i++
    
     }
     return isTwins;

}

console.log(twins(silent,listen))
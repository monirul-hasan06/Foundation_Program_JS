let obj ={
    name : "Mr. X",
    age : 24,
    adress: "Dhaka",
};

for(let ele in obj){
    console.log(ele, obj[ele]);
}

let marks = 50;

for(let i = marks; i<100; i++){
    if(i>60){
        break;
    }else{
        console.log(i)
    }
};

for(let i = 1; i<=15; i++){
    if(i%2!=0){
        continue;
    }
    console.log(i);
}
let student = {
    name : "Rahim",
    id: 20255103087,
    marks : {
        Bangla : 55,
        English : 56,
        Math : 73,
    }
};

let totalmarks = 0;
let totalsubject = 0;

for(const sub in student.marks){
    totalmarks += totalmarks + student.marks[sub];
    totalsubject++;
}

let avg = totalmarks/totalsubject;

console.log(avg.toFixed(2));


// // Student Grade & Performance Analytics Dashboard
//Filtering (Using filter): Automatically separate the class into two distinct groups—Top Performers 
//(those who scored 90+) and Students Needing Improvement (scores below 50).
const students = [
    { name: "ALI", scores: 80 },
    { name: "Faizan", scores: 60 },
    { name: "hamad", scores: 75 }
];
students.forEach((student) => {
   if (student.scores >=75){
    console.log(student.name + " :Great job")
   }else{console.log(student.name + ":Need Improvement")}
});

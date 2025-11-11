  
  //  A Grade , B Grade , c Grade
  
  let scores=[
               { name  : "naveen"    ,  score : 70   },

               { name  : "vinay"     ,  score : 0    },

               { name  : "harish"    ,  score : 35   },        // don't taken above 70 score
           ]

for(let i=0;i<scores.length;i++){

    let student=scores[i];

    console.log("Student :",student.name);
    console.log("score :" ,student.score);

    if(student.score>=70){
        console.log("A Grade");

    }else if(student.score >34){
        console.log("B Grade");

    }else{
        console.log("c Grade");
    }
}
console.log("-----------------------");



 let persons=[
               { name  : " Subbu "    ,  score : 70   },

               { name  : " "     ,  score : 0    },

               { name  : "harish"    ,  score : 35   },        // don't taken above 70 score
           ]
           
for(let i=0;i<scores.length;i++){

    let student=scores[i];

    console.log("Student :",student.name);
    console.log("score :" ,student.score);

    if(student.score>=70){
        console.log("A Grade");

    }else if(student.score >34){
        console.log("B Grade");

    }else{
        console.log("c Grade");
    }
}
console.log("-----------------------");


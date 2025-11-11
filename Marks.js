
     // pass    or   fail

let marks=[
           {   name :  "Ganesh"  , marks  : 23  },
           {   name :  "Harish"  , marks  : 62  },
           {   name :  "Ashok"   , marks  : 92  },
         ]

marks.push({name: "Vinay", marks: 75});                 // Using the push

for(let i=0;i<marks.length;i++){
    let student=marks[i];
    console.log("Student :",student.name);
    console.log("marks :",student.marks)
    if(student.marks>=35){
        console.log("pass");
    }else{
        console.log("fail");
    }
}

console.log("-----------------------");

// using if and if else statments


let person= {
               name  : " jagadeesh "  ,
               marks   : 92                             // if and if else statment  Only
                                        
           };                                  
       
       if(person.marks>90){
       console.log(person.marks  ,  "jagadesh is a 1st class");
  
        } else if(person.marks>55){
        console.log(person.marks , "jagadesh is a 2nd class");
   }
   else if (person.marks>35){
   console.log(person.marks , "jagadesh is a 3rd class");
   }
   else{
    console.log(person.marks , "jagadesh is a fail")
   }




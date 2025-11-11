
  //    minor  , major ,  Old man

let person=[
             {  name    :  " jagadesh "  ,     age : 23    },
             { name     :  "  chandu  "  ,     age : 18    },
             { name     :  " shankar  "  ,     age : 9     },
             { name     :  " vinay    "  ,     age : 50    },
        ]

for(let i=0 ;i < person.length ;i++){
            console.log(" age  : " + person[i].age)
            if(person[i].age >= 40){
                console.log(person[i].name + " is a Old man ");
            }else if(person[i].age >= 18){
                console.log(person[i].name + "is a major");
            }
            else{
                console.log(person[i].name + " is a minor ");
            }
     }
     console.log("-----------------------");
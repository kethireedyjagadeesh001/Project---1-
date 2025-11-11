
// High cost  ,  meidum cost  ,  low  cost

let prices=[   
            { product   :  " mix "    ,    price  :   5000   },
            { product   :   " TV "    ,     price :   20000  },
            { product   :  " laptop " ,     price :   40000  },
           ]
for(let i=0; i<prices.length;i++){
    let cost=prices[i];
    console.log("product name :",cost.product);
    console.log(" price :",cost.price);
    if(cost.price <= 10000 ){
    console.log("Low cost");
    }else if(cost.price <= 20000){
        console.log("Meidum cost");
    }else{
        console.log("High cost");
    }
}
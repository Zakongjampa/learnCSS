function placeOrder(drink){
    return new Promise((resolve, reject)=>{
        if(drink === 'coffee'){
            resolve("Order for Coffee Recieved");
        }else{
            reject("Other orders Rejected");
        }
    })
}

function processOrder(order){
    return new Promise((resolve)=>{
        console.log("Order is being processed");
        resolve(`${order} is Served`);
    })
}
// ----------------------------------------------------------------------------
//                  Using then
// ----------------------------------------------------------------------------
// placeOrder('coffee').then((orderPlaced)=>{
//     console.log(orderPlaced);

//     let orderIsProcessed = processOrder(orderPlaced);
//     return orderIsProcessed;
// }).then((processedOrder) =>{
//     console.log(processedOrder)
// }).catch((err)=>{
//     console.log(err);
// })
// Chaining of promise


// ----------------------------------------------------------------------------
//                  Using await
// ----------------------------------------------------------------------------
async function serveOrder(){
    try{
        let orderPlaced = await placeOrder('cofffee');
        console.log(orderPlaced);

        let orderProcess =  await processOrder(orderPlaced);
        console.log(orderProcess);
    }catch(error){
        console.error(error);
    }
}

serveOrder();
function getCustomer(id){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        const customer={
            id: 1, 
            name: 'Nikhil', 
            isGold: true, 
            email: 'email' 
        }
        if(customer.isGold){
            resolve(customer)
            return;
        }
        reject("not gold customer")
    },3000);
});
}

function getTopMovies(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
        const movies=['movie1','movie2'];
        resolve(movies)
        return;
        
    },3000);
})
}
function sendEmail(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            var msg="sending mail";
            resolve(msg)
            return;
    },3000);
})
}
getCustomer(1)
        .then(function customer(customer){
            console.log(customer)
            return getTopMovies();
        })
        .then(function movie(movies){
            console.log(movies)
            return sendEmail();
        }).then(function sendMail(msg){
            console.log(msg)
        })
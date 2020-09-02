function add_positive_async(n1, n2){
    let p = new Promise(function(res,rej){
        if(n1 > 0 && n2 > 0){
            res(n1 + n2);
        } else{
            rej('cannot do it');
        }
    });
    return p;
}
add_positive_async(10,30)
.then(successHandler)
.catch(errorHandler)
function successHandler(res){
    console.log("handling", res);
};

function errorHandler(err){
    console.log("handling",err);
};
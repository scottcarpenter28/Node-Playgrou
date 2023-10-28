exports.add = function(x, y){
    return x + y;
}

exports.sub = function(x, y){
    return x - y;
}

exports.div = function(x, y){
    return x/y;
}

exports.mult = function(x, y){
    return x * y;
}

exports.pow = function(x, p){
    result = 1;
    let i = 1;
    while(i <= p){
        result *= x;
        i++;
    }
    return result;
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var disc = require('./discriminant');

module.exports = function(a,b,c, next) {
    if (a === 0) {
        next(new Error("(A) should not be zero"));
    }
    
    else if ( disc(a,b,c) < 0) {
        next(new Error("discriminant is less than zero, no real roots"));
}

else
    return next(null, {
        root1:function() {
            return (-b - Math.sqrt(disc(a,b,c)) ) / (2*a);
        },
        root2:function() {
            return (-b + Math.sqrt(disc(a,b,c)) ) / (2*a);
        }
    });
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var a=1, b=4, c=1;

var discriminant = function (a, b, c) {
    return (b*b - 4*a*c);
}

var root1 = (-b - Math.sqrt(discriminant(a,b,c)) ) / (2*a);
var root2 = (-b + Math.sqrt(discriminant(a,b,c)) ) / (2*a);

console.log("Roots are " + root1 + " " + root2);



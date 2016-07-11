var Fraction = algebra.Fraction;
var Expression = algebra.Expression;
var Equation = algebra.Equation;

// var P = 2;
// var PV = 35;
// var g = .08;
// var N =

//PV = P / (r - g);
//(P / (r - g)) / PV

var num = new Expression("P");
var denom = new Expression("r - g");


var eq = new Equation(expr, 3);

console.log(eq.toString());

// var xAnswer = eq.solveFor("x");
// var yAnswer = eq.solveFor("y");

// console.log("x = " + xAnswer.toString());
// console.log("y = " + yAnswer.toString());
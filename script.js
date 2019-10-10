/*
Gameplan:

HTML:
(*) Calculator Window for operation to be shown along with a result
() Number buttons of a calculator
() Operator button (+, -, *, /, etc)
() '=' Button'
() Reset or Clear button

Javascript:
() Function that captures what was typed in the calculatorWindow
() function that will add numbers, subtract, etc.
 */

function calculate(expression)
{
    //'expression' is a STRING of everything in your calculationWindow
    //We need to EXTRACT the firts number from 'expression'
    //expression = "1+1"
    let firstNum = Number(expression.substr(0,1));
    let secondNum = Number(expression.substr(2,1));
    let operator = expression.substr(1,1);


    if (operator === '+')
    {
        //what should happen if there is a '+'???
        return addNums(firstNum,secondNum);
    }
    else if (operator === '-')
    {
        //what should happen??
        return subNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divNums(firstNum, secondNum);
    }
    else if (operator === '*')
    {
        return mulNums(firstNum, secondNum);
    }

}

function addNums (p1, p2)
{
    return p1 + p2;
}
function subNums (p1, p2)
{
    return p1 - p2;
}
function divNums (p1, p2)
{
    return p1 / p2;
}
function mulNums (p1, p2)
{
    return p1 * p2;
}






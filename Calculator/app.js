//Calculator.

function Calculator () {

    let num1 = parseInt(prompt('First Number'));
    let num2 = parseInt(prompt('SecondNumber'));
    let operation = prompt('Choose your operation');

    switch (operation.toLowerCase()) {
        case '+':
        case 'addizione':
        case 'plus':
            result = num1 + num2; 
            break;

        case '-':
        case 'sottrazione':
        case 'minus':
            result = num1 - num2;
            break;

        case '*':
        case 'x':
        case 'moltiplicazione':
        case 'moltiplication':
            result = num1 * num2;
            break;
        
        case '/':
        case 'divisione':
        case 'division':
            result = num1 / num2;
            break;

            default:
                return ('incomplete operation');
    }

    return 'result is : ' + result
};

console.log(Calculator());
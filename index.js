//Написать функцию, которая проверяет входную строку на парность скобок и возвращает true/false в зависимости от результата
//Используйте Стэк.
//Тестовые варианты:

//(){(){}(){(){}{}}}
//()+[()] //true
//(()+)][() //false

function isPairBrackets(str) {
    const bracketsStack = new Stack((str.length / 2).toFixed());

    for (const symbol of str) {
        if (symbol === '(' || symbol === '[' || symbol === '{') {
            bracketsStack.push(symbol);
        } else if (symbol === ')' || symbol === ']' || symbol === '}') {
            if (
                (symbol === ')' && bracketsStack.pick() === '(') ||
                (symbol === ']' && bracketsStack.pick() === '[') ||
                (symbol === '}' && bracketsStack.pick() === '{')
            ) {
                bracketsStack.pop();
            } else {
                return false;
            }
        }
    }

    return bracketsStack.isEmpty;
}

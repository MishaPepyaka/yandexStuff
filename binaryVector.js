///////////////////////////////////////////////
//
// Требуется найти в бинарном векторе самую длинную последовательность единиц и вывести её длину.
//
//     Желательно получить решение, работающее за линейное время и при этом проходящее по входному массиву только один раз.
//
//     Формат ввода
// Первая строка входного файла содержит одно число n, n ≤ 10000. Каждая из следующих n строк содержит ровно одно число — очередной элемент массива.
//
//     Формат вывода
// Выходной файл должен содержать единственное число — длину самой длинной последовательности единиц во входном массиве.
//
///////////////////////////////////////////////

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    let length = lines.shift();
    let max = 0;
    let counter = 0;
    for (var i = 0; i < length; i++) {
        if (lines[i] == 0) {
            if (counter > max) max = counter;
            counter = 0;
            continue;
        } else {
            counter++;
            if (counter > max) max = counter;
        }
    }
    process.stdout.write(max.toString());
});
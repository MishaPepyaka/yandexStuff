///////////////////////////////////////////////
//
// Дано целое число n. Требуется вывести все правильные скобочные последовательности длины 2 ⋅ n, упорядоченные лексикографически (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).
//
// В задаче используются только круглые скобки.
//
//     Желательно получить решение, которое работает за время, пропорциональное общему количеству правильных скобочных последовательностей в ответе, и при этом использует объём памяти, пропорциональный n.
//
//     Формат ввода
// Единственная строка входного файла содержит целое число n, 0 ≤ n ≤ 11
//
// Формат вывода
// Выходной файл содержит сгенерированные правильные скобочные последовательности, упорядоченные лексикографически.
///////////////////////////////////////////////

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let n;
rl.on('line', (line) => {
    n = parseInt(line, 10);
}).on('close', () => {
    gen(n, 0, 0, '');
});


const gen = function (n, counterOpen, counterClose, ans) {
    if (counterClose + counterOpen == 2 * n) {
        process.stdout.write(ans+'\n');
        return;
    }
    if (counterOpen < n)
        gen(n, counterOpen + 1, counterClose, ans + '(');
    if (counterOpen > counterClose)
        gen(n, counterOpen, counterClose + 1, ans + ')');

};


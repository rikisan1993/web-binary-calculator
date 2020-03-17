const btn0 = document.querySelector('#btn0');
const btn1 = document.querySelector('#btn1');
const btnClr = document.querySelector('#btnClr');
const btnEql = document.querySelector('#btnEql');
const btnSum = document.querySelector('#btnSum');
const btnSub = document.querySelector('#btnSub');
const btnMul = document.querySelector('#btnMul');
const btnDiv = document.querySelector('#btnDiv');
const res = document.querySelector('#res');

btn0.addEventListener('click', event => {
    const text = res.textContent;
    res.textContent = text.trim() + '0';
});

btn1.addEventListener('click', event => {
    const text = res.textContent;
    res.textContent = text.trim() + '1';
});

btnClr.addEventListener('click', event => {
    res.textContent = '';
});

btnSum.addEventListener('click', event => {
    const text = res.textContent;
    if (text[text.length - 1] !== '0' && text[text.length - 1] !== '1') {
        return;
    }
    res.textContent = text + '+';
});

btnSub.addEventListener('click', event => {
    const text = res.textContent;
    if (text[text.length - 1] !== '0' && text[text.length - 1] !== '1') {
        return;
    }
    res.textContent = text + '-';
});

btnMul.addEventListener('click', event => {
    const text = res.textContent;
    if (text[text.length - 1] !== '0' && text[text.length - 1] !== '1') {
        return;
    }
    res.textContent = text + '*';
});

btnDiv.addEventListener('click', event => {
    const text = res.textContent;
    if (text[text.length - 1] !== '0' && text[text.length - 1] !== '1') {
        return;
    }
    res.textContent = text + '/';
});

btnEql.addEventListener('click', event => {
    const texts = Array.from(res.textContent).reduce((acc, cur) => {
        if (!acc.length) {
            acc.push(cur);
            return acc;
        }
        if (cur === '0' || cur === '1') {
            acc[acc.length - 1] = acc[acc.length - 1] + '' + cur;
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);

    let result = 0;
    texts.forEach(text => {
        if (text[0] !== '0' && text[0] !== '1') {
            const instruction = text.slice(0, 1);
            const number = parseInt(text.slice(1), 2);
            switch (instruction) {
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    result /= number;
                    break;
            }
        } else {
            result = parseInt(text, 2);
        }
    });
    res.textContent = result.toString(2);
});
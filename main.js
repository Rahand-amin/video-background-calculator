let result = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                result.innerText = '';
                break;
            case 'back':
                if (result.innerText) {
                    result.innerText = result.innerText.slice(0, -1);
                };
                break;
            case '=':
                try {
                    result.innerText = eval(result.innerText).toFixed(2)
                } catch {
                    result.innerText = "ERROR!"
                }
                break;
            default:
                result.innerText += e.target.innerText;
        }
    });
});
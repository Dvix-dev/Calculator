document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let displayValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            switch (value) {
                case 'CE':
                    displayValue = '';
                    break;
                case '⌫':
                    displayValue = displayValue.slice(0, -1);
                    break;
                case '=':
                    try {
                        const transformValue = displayValue.replace('×', '*').replace('÷', '/').replace('−', '-').replace(',', '.');
                        displayValue = eval(transformValue);
                    } catch (error) {
                        displayValue = 'Error';
                    }
                    break;
                case '±':
                    if (displayValue.charAt(0) === '-') {
                        displayValue = displayValue.slice(1);
                    } else {
                        displayValue = '-' + displayValue;
                    }
                    break;
                default:
                    displayValue += value;
            }

            display.textContent = displayValue;
        });
    });
});

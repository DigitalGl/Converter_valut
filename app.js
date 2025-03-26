
// Получаем элементы DOM
const input = document.getElementById('input');
const result = document.getElementById('result');
const fromSelect = document.getElementById('exampleFormControlSelect1');
const toSelect = document.getElementById('select');
const courseValues = document.querySelectorAll('.course-item-value');

const apiKey = 'f3a046c1f8d73ee9bcd53306';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

// Функция для получения курсов валют
async function fetchExchangeRates() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Обновляем курсы в интерфейсе
        courseValues.forEach(item => {
            const currency = item.getAttribute('data-value');
            const rate = data.conversion_rates[currency];
            item.textContent = rate ? rate.toFixed(2) : '--.--';
        });

        // Выполняем первую конвертацию
        convertCurrency();
    } catch (error) {
        console.error('Ошибка при загрузке курсов:', error);
        courseValues.forEach(item => item.textContent = 'Ошибка');
    }
}

// Функция конвертации валют
function convertCurrency() {
    const amount = parseFloat(input.value) || 0;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    // Получаем курсы из элементов DOM
    const fromRate = parseFloat(document.querySelector(`[data-value="${fromCurrency}"]`).textContent);
    const toRate = parseFloat(document.querySelector(`[data-value="${toCurrency}"]`).textContent);

    // Вычисляем результат
    const resultValue = (amount / fromRate) * toRate;
    result.value = isNaN(resultValue) ? '' : resultValue.toFixed(2);
}

// Слушатели событий
input.addEventListener('input', convertCurrency);
fromSelect.addEventListener('change', convertCurrency);
toSelect.addEventListener('change', convertCurrency);

// Загружаем курсы при запуске
fetchExchangeRates();
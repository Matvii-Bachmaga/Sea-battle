function startGame() {
    const placeship = Math.floor(Math.random() * 8) + 1;
    let shipPositions = [placeship, placeship + 1, placeship + 2];

    let guess;
    let guesses = 0;
    let strikes = 0;
    let drown = false;

    while (!drown) {
        try {
            guess = prompt("Готовий? (Введи число від 1-10 або натисни 'Скасувати' для виходу)");
            if (guess === null) {
                alert("Гра завершена. Ти вийшов.");
                break;
            }
            guess = parseInt(guess);
            if (isNaN(guess) || guess < 1 || guess > 10) {
                alert("Введи число від 1 до 10!!!");
            } else {
                guesses += 1;
                if (shipPositions.includes(guess)) {
                    strikes += 1;
                    alert("Влучив!");
                    if (strikes === 3) {
                        drown = true;
                        let successRate = parseInt((3 / guesses) * 100);
                        alert("Вітаю, ти виграв! Тобі знадобилось " + guesses + " спроб. Твій відсоток перемог: " + successRate + "%.");
                    }
                } else {
                    alert("Не влучив");
                }
            }
        } catch (error) {
            console.error("Сталася помилка:", error);
            alert("Сталася помилка. Спробуй ще раз.");
        }
    }

    console.log("Корабель на позиціях:", shipPositions);
}

startGame();
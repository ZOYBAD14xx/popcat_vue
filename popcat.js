(function () {
    'use strict';
    console.clear()
    var event = new KeyboardEvent('keydown', {
        key: 'g',
        ctrlKey: true
    });

    document.dispatchEvent(event);
    var total = 0;
    var iv = setInterval(() => {
        var vue = document.getElementById('app').__vue__;
        if (vue.bot) {
            console.log("%c You've been barked as a bot. Please clear your cookies.", "background: #a00; color: #fff");
            clearInterval(iv);
            return;
        }
        vue.sequential_max_pops = 0;
        if (vue.accumulator == 0) {
            total += 800;
            console.log(`[${new Date().toLocaleTimeString()}] %c800 pops sent (Total: ${total})`, "color: #0f0");
            vue.open = true;
            setTimeout(() => {
                vue.open = false;
            }, 1000);
        }
        vue.accumulator = 800;
    }, 1000);

    console.log("%c Bot started. Waiting for the first request being sent. ", "background: #050; color: #0f0");
})();

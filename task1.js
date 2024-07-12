function delayedLog(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

delayedLog('Привіт, токсіки!', 2000);
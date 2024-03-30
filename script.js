function updateClock() {
    let date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const hourRotation = (hour % 12) * 30 + minute * 0.5;
    const minuteRotation = minute * 6;

    document.querySelector('.hour').setAttribute('style', `transform: rotate(${hourRotation}deg)`);
    document.querySelector('.minute').setAttribute('style', `transform: rotate(${minuteRotation}deg)`);

    if (hour >= 6 && hour < 12) {
        document.querySelector('body').setAttribute('style', 'background: linear-gradient(133deg, rgba(245,242,0,1) 0%, rgba(236,255,194,1) 50%, rgba(0,212,255,1) 100%);');
    } else if (hour >= 12 && hour < 18) {
        document.querySelector('body').setAttribute('style', 'background: linear-gradient(133deg, rgba(255,165,0,1) 0%, rgba(255,211,131,1) 50%, rgba(55,187,251,1) 100%)');
    } else if (hour >= 18 && hour < 20) {
        document.querySelector('body').setAttribute('style', 'background: linear-gradient(133deg, rgba(53,122,167,1) 0%, rgba(0,67,129,1) 50%, rgba(0,41,93,1) 100%)')
    } else {
        document.querySelector('body').setAttribute('style', 'background: linear-gradient(133deg, rgba(52,25,122,1) 0%, rgba(35,0,96,1) 50%, rgba(0,0,0,1) 100%)')
    }
}
updateClock()

setInterval(updateClock, 60000); // 60000 milliseconds = 1 minute

document.querySelector('.credit').addEventListener('click', () => {window.open('https://github.com/Adibast', '_blank')});
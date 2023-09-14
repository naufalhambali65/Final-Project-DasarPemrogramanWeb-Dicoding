function updateLiveTime() {
    const timeElement = document.getElementById('liveTime');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;

    timeElement.innerHTML = timeString;
}

updateLiveTime();

setInterval(updateLiveTime, 1000);
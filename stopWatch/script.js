const clockDisplay = document.querySelector('.clock');
        let startButton = document.querySelector('.start');
        const stopButton = document.querySelector('.stop');
        const resetButton = document.querySelector('.reset');
        let lapButton = document.querySelector(".lap");
        let lap =document.querySelector(".lap-times");
        let count =0;
        let startTime;
        let intervalId;
        let time;
        function updateClock() {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - startTime;
            const minutes = Math.floor(elapsedTime / 60000);
            const seconds = Math.floor((elapsedTime % 60000) / 1000);
            const milliseconds = Math.floor((elapsedTime % 1000) / 100);
             time=`${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}.${milliseconds.toString().padStart(2,0)}`;
            clockDisplay.textContent = time;
        }
        lapButton.addEventListener('click', function() {
            if (startTime) {
                count++;
                lap.innerHTML+=`<p>${count} -> ${time}<p>`
            }
        }); 
        startButton.addEventListener('click', function() {
            if (!startTime) {
                startButton.disabled= true;
                stopButton.disabled = false;
                resetButton.disabled= true;
                startTime = new Date().getTime();
                intervalId = setInterval(updateClock, 100);
            }
        });
        
        stopButton.addEventListener('click', function() {
            clearInterval(intervalId);
            startTime = undefined;
            stopButton.disabled = true;
            startButton.disabled=false;
            resetButton.disabled= false;
        });
        
        resetButton.addEventListener('click', function() {
            clearInterval(intervalId);
            startTime = undefined;
            clockDisplay.textContent = '00:00.00';
            stopButton.disabled= false;
            lap.innerHTML="Laps"
            count =0;
        });
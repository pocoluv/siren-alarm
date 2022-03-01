let alertStatus,
    muteStatus = false;

const audio = new Audio("alert.mp3"),

    init = () => {

        document.getElementById("welcome-text").style.display = "none";
        document.getElementById("control-panel").style.display = "inline-block";

    },

    toggleAlert = () => fetch(
        "alert.php",
        {"method": "POST"}
    ).
        then(() => {

            muteStatus = true;
            toggleMute();

        }),

    toggleMute = () => {

        muteStatus = !muteStatus;
        document.getElementById("mute-btn").innerText = muteStatus
            ? "Увімкнути звук"
            : "Вимкнути звук";
        audio.muted = muteStatus;

    };

setInterval(
    () => fetch("alert.php").
        then((response) => response.text()).
        then((data) => {

            alertStatus = data;

            if (alertStatus == 1) {

                audio.play();
                document.getElementById("mute-btn").disabled = false;
                document.getElementById("alert-btn").innerText = "Відбій";

            } else {

                audio.pause();
                audio.currentTime = 0;
                muteStatus = true;
                toggleMute();
                document.getElementById("mute-btn").disabled = true;
                document.getElementById("alert-btn").innerText = "Тривога";

            }

        }),
    1000
);
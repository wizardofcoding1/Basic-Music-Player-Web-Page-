let song_name = document.getElementById("song-title");

let song_control = document.getElementById("song-play");

let previous = document.getElementById("previous-song");
let next = document.getElementById("next-song");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let resume = document.getElementById("resume-song");
let volume_control = document.getElementById("volume-control");
let audio_source = document.getElementById("audio-source");
let volume_button = document.getElementById("volume-button");


let songList = [
    { title: "Hanuman Chalisa", src: "./Music/m4.m4a" },
    { title: "Ishq Hai", src: "./Music/m1.m4a" },
    { title: "Ram Siya Ram", src: "./Music/m2.m4a" },
    { title: "Yeah dosti Hum Nahi Chodenge", src: "./Music/m3.m4a" },
    { title: "Shayad From Love Aaj Kal", src: "./Music/m5.m4a" }
];

let count = 0;

//Song Name 
song_name.innerText = songList[count].title;

//Song Playing
audio_source.src = songList[count].src;
audio_source.load();
audio_source.play();

//Song Volume High

audio_source.volume = 1;
pause.style.display = "none";



play.addEventListener("click", () => {
    pause.style.display = "inline";
    play.style.display = "none";
    audio_source.play();
});

pause.addEventListener("click", () => {
    pause.style.display = "none";
    play.style.display = "inline";
    audio_source.pause();
});


//Song Control
audio_source.addEventListener("timeupdate", () => {
    let progress = (audio_source.currentTime / audio_source.duration) * 100;
    song_control.value = progress;

});

    

song_control.addEventListener("input", function () {
    let seekTime = (song_control.value / 100) * audio_source.duration
    audio_source.currentTime = seekTime;
});

volume_button.addEventListener("click", () => {
    if (volume_control.style.display === "none" || volume_control.style.display === "") {
        volume_control.style.display = "inline-block";
    } else {
        volume_control.style.display = "none";
    }
});


//Song Volume Control
volume_control.addEventListener("input", function () {
    audio_source.volume = volume_control.value;
});





//Next Bbutton
next.addEventListener("dblclick", () => {
    if (count === songList.length - 1) {
        alert("This Is The Last Song");
        // count = songList.length;
    } else {
        count++;
        song_name.innerText = songList[count].title;
        audio_source.src = songList[count].src;
        audio_source.load();
        audio_source.play();
    }

});


//Previous Button
previous.addEventListener("dblclick", () => {
    if (count === 0) {
        alert("This Is The First Song Only");
        // count = 0;
    } else {
        count--;
        song_name.innerText = songList[count].title;
        audio_source.src = songList[count].src;
        audio_source.load();
        audio_source.play();
    }

});

audio_source.addEventListener("ended", () => {
    if (count === songList.length - 1) {
        alert("This is The Last Song");
    } else {
        count++;
        song_name.innerText = songList[count].title;
        audio_source.src = songList[count].src;
        audio_source.load();
        audio_source.play();
    }
});



function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeRadialBackground() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    document.getElementById("body-center").style.background =
        `radial-gradient(circle at center, ${color1}, ${color2})`;
}

// Change every 5 seconds
setInterval(changeRadialBackground, 2000);

// Initial background
changeRadialBackground();


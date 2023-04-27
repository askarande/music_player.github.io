
//window.alert("Sorry! But Sute is under Construction. ")


function fun() {
  // body...
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// let changeIcon = function(icon) { 
//   icon.classList.toggle('fa-pause-circle')
// }

// ----------------- Shrivalli Song ------------------

let audioBtn1 = document.getElementById("audioBtn1");
console.log(audioBtn1);

let egl1 = document.getElementById("egl1");
console.log(egl1);

audioBtn1.addEventListener("click", function () {
  if (egl1.classList.contains("fa-play-circle") == true) {
    myAudio1.play();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    document.getElementById("volume1").style.display = "flex";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    if(egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if(egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if(egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if(egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if(egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if(egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    if(egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if(egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if(egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if(egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if(egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio1").onended = () => {
      egl1.classList.toggle("fa-pause-circle");
      egl1.classList.toggle("fa-play-circle");
    }
    egl1.classList.toggle("fa-pause-circle");
    egl1.classList.toggle("fa-play-circle");
  } else {
    myAudio1.pause();
    document.getElementById("volume1").style.display = "none";
    egl1.classList.toggle("fa-pause-circle");
    egl1.classList.toggle("fa-play-circle");
  }
})

// ----------------- Mayakirriye Song ------------------

let audioBtn2 = document.getElementById("audioBtn2");
console.log(audioBtn2);

let egl2 = document.getElementById("egl2");
console.log(egl2);

audioBtn2.addEventListener("click", function () {
  if (egl2.classList.contains("fa-play-circle") == true) {
    myAudio2.play();
    myAudio1.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "flex";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    if(egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if(egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if(egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if(egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if(egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if(egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    if(egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if(egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if(egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if(egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if(egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio2").onended = () => {
      egl2.classList.toggle("fa-pause-circle");
      egl2.classList.toggle("fa-play-circle");
    }
    egl2.classList.toggle("fa-pause-circle");
    egl2.classList.toggle("fa-play-circle");
  } else {
    myAudio2.pause();
    document.getElementById("volume2").style.display = "none";
    egl2.classList.toggle("fa-pause-circle");
    egl2.classList.toggle("fa-play-circle");
  }
})

// ----------------- Kalaavathi Song ------------------

let audioBtn3 = document.getElementById("audioBtn3");
console.log(audioBtn3);

let egl3 = document.getElementById("egl3");
console.log(egl3);

audioBtn3.addEventListener("click", function () {
  if (egl3.classList.contains("fa-play-circle") == true) {
    myAudio3.play();
    myAudio1.pause();
    myAudio2.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "flex";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    if(egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if(egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if(egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if(egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if(egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if(egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    if(egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if(egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if(egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if(egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if(egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio3").onended = () => {
      egl3.classList.toggle("fa-pause-circle");
      egl3.classList.toggle("fa-play-circle");
    }
    egl3.classList.toggle("fa-pause-circle");
    egl3.classList.toggle("fa-play-circle");
  } else {
    myAudio3.pause();
    document.getElementById("volume3").style.display = "none";
    egl3.classList.toggle("fa-pause-circle");
    egl3.classList.toggle("fa-play-circle");
  }
})

// ----------------- Mutyala Chemma Chakka Song ------------------

let audioBtn4 = document.getElementById("audioBtn4");
console.log(audioBtn4);

let egl4 = document.getElementById("egl4");
console.log(egl4);

audioBtn4.addEventListener("click", function () {
  if (egl4.classList.contains("fa-play-circle") == true) {
    myAudio4.play();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "flex";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    if(egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if(egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if(egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if(egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if(egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if(egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    if(egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if(egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if(egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if(egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if(egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio4").onended = () => {
      egl4.classList.toggle("fa-pause-circle");
      egl4.classList.toggle("fa-play-circle");
    }
    egl4.classList.toggle("fa-pause-circle");
    egl4.classList.toggle("fa-play-circle");
  } else {
    myAudio4.pause();
    document.getElementById("volume4").style.display = "none";
    egl4.classList.toggle("fa-pause-circle");
    egl4.classList.toggle("fa-play-circle");
  }
})

// ----------------- Chellamma Song ------------------

let audioBtn5 = document.getElementById("audioBtn5");
console.log(audioBtn5);

let egl5 = document.getElementById("egl5");
console.log(egl5);

audioBtn5.addEventListener("click", function () {
  if (egl5.classList.contains("fa-play-circle") == true) {
    myAudio5.play();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "flex";
    document.getElementById("volume6").style.display = "none";

    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    if(egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if(egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if(egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if(egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if(egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if(egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    if(egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if(egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if(egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if(egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if(egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio5").onended = () => {
      egl5.classList.toggle("fa-pause-circle");
      egl5.classList.toggle("fa-play-circle");
    }
    egl5.classList.toggle("fa-pause-circle");
    egl5.classList.toggle("fa-play-circle");
  } else {
    myAudio5.pause();
    document.getElementById("volume5").style.display = "none";
    egl5.classList.toggle("fa-pause-circle");
    egl5.classList.toggle("fa-play-circle");
  }
})

// ----------------- Falak Tu Garaj Tu Song ------------------

let audioBtn6= document.getElementById("audioBtn6");
console.log(audioBtn6);

let egl6 = document.getElementById("egl6");
console.log(egl6);

audioBtn6.addEventListener("click", function () {
  if (egl6.classList.contains("fa-play-circle") == true) {
    myAudio6.play();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "flex";

    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    if(egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if(egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if(egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if(egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if(egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if(egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if(egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if(egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if(egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if(egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if(egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio6").onended = () => {
      egl6.classList.toggle("fa-pause-circle");
      egl6.classList.toggle("fa-play-circle");
    }
    egl6.classList.toggle("fa-pause-circle");
    egl6.classList.toggle("fa-play-circle");
  } else {
    myAudio6.pause();
    document.getElementById("volume6").style.display = "none";
    egl6.classList.toggle("fa-pause-circle");
    egl6.classList.toggle("fa-play-circle");
  }
})












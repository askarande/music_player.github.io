//window.alert("Sorry! But Sute is under Construction. ")


function fun() {
  // body...
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// let changeIcon = function(icon) { 
//   icon.classList.toggle('bi-pause-fill')
// }

// ----------------- Shrivalli Song ------------------

let audioBtn_nw1 = document.getElementById("audioBtn_nw1");
console.log(audioBtn_nw1);

let egl_nw1 = document.getElementById("egl_nw1");
console.log(egl_nw1);

audioBtn_nw1.addEventListener("click", function () {
  if (egl_nw1.classList.contains("bi-play-fill") == true) {
    myAudio_nw1.play();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    document.getElementById("cbn1").style.display = "flex";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    if (egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if (egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if (egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if (egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if (egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_ssm5.classList.toggle("fa-pause-circle");
    }
    if (egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    if (egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if (egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if (egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if (egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if (egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if (egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    if (egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if (egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if (egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if (egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_snw5.classList.toggle("bi-pause-fill");
    }
    if (egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio_nw1").onended = () => {
      egl_nw1.classList.toggle("bi-pause-fill");
      egl_nw1.classList.toggle("bi-play-fill");
    }
    egl_nw1.classList.toggle("bi-pause-fill");
    egl_nw1.classList.toggle("bi-play-fill");
  } else {
    myAudio_nw1.pause();
    document.getElementById("cbn1").style.display = "none";
    egl_nw1.classList.toggle("bi-pause-fill");
    egl_nw1.classList.toggle("bi-play-fill");
  }
})

// ----------------- Mayakirriye Song ------------------

let audioBtn_nw2 = document.getElementById("audioBtn_nw2");
console.log(audioBtn_nw2);

let egl_nw2 = document.getElementById("egl_nw2");
console.log(egl_nw2);

audioBtn_nw2.addEventListener("click", function () {
  if (egl_nw2.classList.contains("bi-play-fill") == true) {
    myAudio_nw2.play();
    myAudio_nw1.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "flex";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    if (egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if (egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if (egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if (egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if (egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_ssm5.classList.toggle("fa-pause-circle");
    }
    if (egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    if (egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if (egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if (egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if (egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if (egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if (egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    if (egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if (egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if (egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if (egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if (egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio_nw2").onended = () => {
      egl_nw2.classList.toggle("bi-pause-fill");
      egl_nw2.classList.toggle("bi-play-fill");
    }
    egl_nw2.classList.toggle("bi-pause-fill");
    egl_nw2.classList.toggle("bi-play-fill");
  } else {
    myAudio_nw2.pause();
    document.getElementById("cbn2").style.display = "none";
    egl_nw2.classList.toggle("bi-pause-fill");
    egl_nw2.classList.toggle("bi-play-fill");
  }
})

// ----------------- Kalaavathi Song ------------------

let audioBtn_nw3 = document.getElementById("audioBtn_nw3");
console.log(audioBtn_nw3);

let egl_nw3 = document.getElementById("egl_nw3");
console.log(egl_nw3);

audioBtn_nw3.addEventListener("click", function () {
  if (egl_nw3.classList.contains("bi-play-fill") == true) {
    myAudio_nw3.play();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "flex";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    if (egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if (egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if (egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if (egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if (egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_ssm5.classList.toggle("fa-pause-circle");
    }
    if (egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    if (egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if (egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if (egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if (egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if (egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if (egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    if (egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if (egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if (egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if (egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if (egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio_nw3").onended = () => {
      egl_nw3.classList.toggle("bi-pause-fill");
      egl_nw3.classList.toggle("bi-play-fill");
    }
    egl_nw3.classList.toggle("bi-pause-fill");
    egl_nw3.classList.toggle("bi-play-fill");
  } else {
    myAudio_nw3.pause();
    document.getElementById("cbn3").style.display = "none";
    egl_nw3.classList.toggle("bi-pause-fill");
    egl_nw3.classList.toggle("bi-play-fill");
  }
})

// ----------------- Mutyala Chemma Chakka Song ------------------

let audioBtn_nw4 = document.getElementById("audioBtn_nw4");
console.log(audioBtn_nw4);

let egl_nw4 = document.getElementById("egl_nw4");
console.log(egl_nw4);

audioBtn_nw4.addEventListener("click", function () {
  if (egl_nw4.classList.contains("bi-play-fill") == true) {
    myAudio_nw4.play();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "flex";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "none";

    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    if (egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if (egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if (egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if (egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if (egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_ssm5.classList.toggle("fa-pause-circle");
    }
    if (egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    if (egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if (egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if (egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if (egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if (egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if (egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    if (egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if (egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if (egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if (egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    if (egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio_nw4").onended = () => {
      egl_nw4.classList.toggle("bi-pause-fill");
      egl_nw4.classList.toggle("bi-play-fill");
    }
    egl_nw4.classList.toggle("bi-pause-fill");
    egl_nw4.classList.toggle("bi-play-fill");
  } else {
    myAudio_nw4.pause();
    document.getElementById("cbn4").style.display = "none";
    egl_nw4.classList.toggle("bi-pause-fill");
    egl_nw4.classList.toggle("bi-play-fill");
  }
})

// ----------------- Chellamma Song ------------------

let audioBtn_nw5 = document.getElementById("audioBtn_nw5");
console.log(audioBtn_nw5);

let egl_nw5 = document.getElementById("egl_nw5");
console.log(egl_nw5);

audioBtn_nw5.addEventListener("click", function () {
  if (egl_nw5.classList.contains("bi-play-fill") == true) {
    myAudio_nw5.play();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw6.pause();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "flex";
    document.getElementById("cbn6").style.display = "none";

    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    if (egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if (egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if (egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if (egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if (egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_ssm5.classList.toggle("fa-pause-circle");
    }
    if (egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    if (egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if (egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if (egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if (egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if (egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if (egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    if (egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if (egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if (egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if (egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if (egl_nw6.classList.contains("bi-pause-fill") == true) {
      egl_nw6.classList.toggle("bi-play-fill");
      egl_nw6.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio_nw5").onended = () => {
      egl_nw5.classList.toggle("bi-pause-fill");
      egl_nw5.classList.toggle("bi-play-fill");
    }
    egl_nw5.classList.toggle("bi-pause-fill");
    egl_nw5.classList.toggle("bi-play-fill");
  } else {
    myAudio_nw5.pause();
    document.getElementById("cbn5").style.display = "none";
    egl_nw5.classList.toggle("bi-pause-fill");
    egl_nw5.classList.toggle("bi-play-fill");
  }
})

// ----------------- Falak Tu Garaj Tu Song ------------------

let audioBtn_nw6 = document.getElementById("audioBtn_nw6");
console.log(audioBtn_nw6);

let egl_nw6 = document.getElementById("egl_nw6");
console.log(egl_nw6);

audioBtn_nw6.addEventListener("click", function () {
  if (egl_nw6.classList.contains("bi-play-fill") == true) {
    myAudio_nw6.play();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio1.pause();
    myAudio2.pause();
    myAudio3.pause();
    myAudio4.pause();
    myAudio5.pause();
    myAudio6.pause();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    document.getElementById("cbn1").style.display = "none";
    document.getElementById("cbn2").style.display = "none";
    document.getElementById("cbn3").style.display = "none";
    document.getElementById("cbn4").style.display = "none";
    document.getElementById("cbn5").style.display = "none";
    document.getElementById("cbn6").style.display = "flex";

    document.getElementById("volume1").style.display = "none";
    document.getElementById("volume2").style.display = "none";
    document.getElementById("volume3").style.display = "none";
    document.getElementById("volume4").style.display = "none";
    document.getElementById("volume5").style.display = "none";
    document.getElementById("volume6").style.display = "none";

    if (egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if (egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if (egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if (egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if (egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_ssm5.classList.toggle("fa-pause-circle");
    }
    if (egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    if (egl1.classList.contains("fa-pause-circle") == true) {
      egl1.classList.toggle("fa-play-circle");
      egl1.classList.toggle("fa-pause-circle");
    }
    if (egl2.classList.contains("fa-pause-circle") == true) {
      egl2.classList.toggle("fa-play-circle");
      egl2.classList.toggle("fa-pause-circle");
    }
    if (egl3.classList.contains("fa-pause-circle") == true) {
      egl3.classList.toggle("fa-play-circle");
      egl3.classList.toggle("fa-pause-circle");
    }
    if (egl4.classList.contains("fa-pause-circle") == true) {
      egl4.classList.toggle("fa-play-circle");
      egl4.classList.toggle("fa-pause-circle");
    }
    if (egl5.classList.contains("fa-pause-circle") == true) {
      egl5.classList.toggle("fa-play-circle");
      egl5.classList.toggle("fa-pause-circle");
    }
    if (egl6.classList.contains("fa-pause-circle") == true) {
      egl6.classList.toggle("fa-play-circle");
      egl6.classList.toggle("fa-pause-circle");
    }
    if (egl_nw1.classList.contains("bi-pause-fill") == true) {
      egl_nw1.classList.toggle("bi-play-fill");
      egl_nw1.classList.toggle("bi-pause-fill");
    }
    if (egl_nw2.classList.contains("bi-pause-fill") == true) {
      egl_nw2.classList.toggle("bi-play-fill");
      egl_nw2.classList.toggle("bi-pause-fill");
    }
    if (egl_nw3.classList.contains("bi-pause-fill") == true) {
      egl_nw3.classList.toggle("bi-play-fill");
      egl_nw3.classList.toggle("bi-pause-fill");
    }
    if (egl_nw4.classList.contains("bi-pause-fill") == true) {
      egl_nw4.classList.toggle("bi-play-fill");
      egl_nw4.classList.toggle("bi-pause-fill");
    }
    if (egl_nw5.classList.contains("bi-pause-fill") == true) {
      egl_nw5.classList.toggle("bi-play-fill");
      egl_nw5.classList.toggle("bi-pause-fill");
    }
    document.getElementById("myAudio_nw6").onended = () => {
      egl_nw6.classList.toggle("bi-pause-fill");
      egl_nw6.classList.toggle("bi-play-fill");
    }
    egl_nw6.classList.toggle("bi-pause-fill");
    egl_nw6.classList.toggle("bi-play-fill");
  } else {
    myAudio_nw6.pause();
    document.getElementById("cbn6").style.display = "none";
    egl_nw6.classList.toggle("bi-pause-fill");
    egl_nw6.classList.toggle("bi-play-fill");
  }
})





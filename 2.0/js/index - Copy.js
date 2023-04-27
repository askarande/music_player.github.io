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

let audioBtn_sm1 = document.getElementById("audioBtn_sm1");
console.log(audioBtn_sm1);

let egl_sm1 = document.getElementById("egl_sm1");
console.log(egl_sm1);

audioBtn_sm1.addEventListener("click", function () {
  if (egl_sm1.classList.contains("fa-play-circle") == true) {
    myAudio_sm1.play();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
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
    if(egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if(egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if(egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if(egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_sm5.classList.toggle("fa-pause-circle");
    }
    if(egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio_sm1").onended = () => {
      egl_sm1.classList.toggle("fa-pause-circle");
      egl_sm1.classList.toggle("fa-play-circle");      
      document.getElementById("volume_i1").style.display = "none"; 
    }
    egl_sm1.classList.toggle("fa-pause-circle");
    egl_sm1.classList.toggle("fa-play-circle");
  } else {
    myAudio_sm1.pause();
    egl_sm1.classList.toggle("fa-pause-circle");
    egl_sm1.classList.toggle("fa-play-circle");
  }
})

// ----------------- Mayakirriye Song ------------------

let audioBtn_sm2 = document.getElementById("audioBtn_sm2");
console.log(audioBtn_sm2);

let egl_sm2 = document.getElementById("egl_sm2");
console.log(egl_sm2);

audioBtn_sm2.addEventListener("click", function () {
  if (egl_sm2.classList.contains("fa-play-circle") == true) {
    myAudio_sm2.play();
    myAudio_sm1.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
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
    if(egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if(egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if(egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if(egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_sm5.classList.toggle("fa-pause-circle");
    }
    if(egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio_sm2").onended = () => {
      egl_sm2.classList.toggle("fa-pause-circle");
      egl_sm2.classList.toggle("fa-play-circle");      
    }
    egl_sm2.classList.toggle("fa-pause-circle");
    egl_sm2.classList.toggle("fa-play-circle");
  } else {
    myAudio_sm2.pause();
    egl_sm2.classList.toggle("fa-pause-circle");
    egl_sm2.classList.toggle("fa-play-circle");
  }
})

// ----------------- Kalaavathi Song ------------------

let audioBtn_sm3 = document.getElementById("audioBtn_sm3");
console.log(audioBtn_sm3);

let egl_sm3 = document.getElementById("egl_sm3");
console.log(egl_sm3);

audioBtn_sm3.addEventListener("click", function () {
  if (egl_sm3.classList.contains("fa-play-circle") == true) {
    myAudio_sm3.play();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
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
    if(egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if(egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if(egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if(egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_sm5.classList.toggle("fa-pause-circle");
    }
    if(egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio_sm3").onended = () => {
      egl_sm3.classList.toggle("fa-pause-circle");
      egl_sm3.classList.toggle("fa-play-circle");      
    }
    egl_sm3.classList.toggle("fa-pause-circle");
    egl_sm3.classList.toggle("fa-play-circle");
  } else {
    myAudio_sm3.pause();
    egl_sm3.classList.toggle("fa-pause-circle");
    egl_sm3.classList.toggle("fa-play-circle");
  }
})

// ----------------- Mutyala Chemma Chakka Song ------------------

let audioBtn_sm4 = document.getElementById("audioBtn_sm4");
console.log(audioBtn_sm4);

let egl_sm4 = document.getElementById("egl_sm4");
console.log(egl_sm4);

audioBtn_sm4.addEventListener("click", function () {
  if (egl_sm4.classList.contains("fa-play-circle") == true) {
    myAudio_sm4.play();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm5.pause();
    myAudio_sm6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
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
    if(egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if(egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if(egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if(egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_sm5.classList.toggle("fa-pause-circle");
    }
    if(egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio_sm4").onended = () => {
      egl_sm4.classList.toggle("fa-pause-circle");
      egl_sm4.classList.toggle("fa-play-circle");      
    }
    egl_sm4.classList.toggle("fa-pause-circle");
    egl_sm4.classList.toggle("fa-play-circle");
  } else {
    myAudio_sm4.pause();
    egl_sm4.classList.toggle("fa-pause-circle");
    egl_sm4.classList.toggle("fa-play-circle");
  }
})

// ----------------- Chellamma Song ------------------

let audioBtn_sm5 = document.getElementById("audioBtn_sm5");
console.log(audioBtn_sm5);

let egl_sm5 = document.getElementById("egl_sm5");
console.log(egl_sm5);

audioBtn_sm5.addEventListener("click", function () {
  if (egl_sm5.classList.contains("fa-play-circle") == true) {
    myAudio_sm5.play();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm6.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
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
    if(egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if(egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if(egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if(egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if(egl_sm6.classList.contains("fa-pause-circle") == true) {
      egl_sm6.classList.toggle("fa-play-circle");
      egl_sm6.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio_sm5").onended = () => {
      egl_sm5.classList.toggle("fa-pause-circle");
      egl_sm5.classList.toggle("fa-play-circle");
    }
    egl_sm5.classList.toggle("fa-pause-circle");
    egl_sm5.classList.toggle("fa-play-circle");
  } else {
    myAudio_sm5.pause();
    egl_sm5.classList.toggle("fa-pause-circle");
    egl_sm5.classList.toggle("fa-play-circle");
  }
})

// ----------------- Falak Tu Garaj Tu Song ------------------

let audioBtn_sm6= document.getElementById("audioBtn_sm6");
console.log(audioBtn_sm6);

let egl_sm6 = document.getElementById("egl_sm6");
console.log(egl_sm6);

audioBtn_sm6.addEventListener("click", function () {
  if (egl_sm6.classList.contains("fa-play-circle") == true) {
    myAudio_sm6.play();
    myAudio_sm1.pause();
    myAudio_sm2.pause();
    myAudio_sm3.pause();
    myAudio_sm4.pause();
    myAudio_sm5.pause();
    myAudio_nw1.pause();
    myAudio_nw2.pause();
    myAudio_nw3.pause();
    myAudio_nw4.pause();
    myAudio_nw5.pause();
    myAudio_nw6.pause();
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
    if(egl_sm1.classList.contains("fa-pause-circle") == true) {
      egl_sm1.classList.toggle("fa-play-circle");
      egl_sm1.classList.toggle("fa-pause-circle");
    }
    if(egl_sm2.classList.contains("fa-pause-circle") == true) {
      egl_sm2.classList.toggle("fa-play-circle");
      egl_sm2.classList.toggle("fa-pause-circle");
    }
    if(egl_sm3.classList.contains("fa-pause-circle") == true) {
      egl_sm3.classList.toggle("fa-play-circle");
      egl_sm3.classList.toggle("fa-pause-circle");
    }
    if(egl_sm4.classList.contains("fa-pause-circle") == true) {
      egl_sm4.classList.toggle("fa-play-circle");
      egl_sm4.classList.toggle("fa-pause-circle");
    }
    if(egl_sm5.classList.contains("fa-pause-circle") == true) {
      egl_sm5.classList.toggle("fa-play-circle");
      egl_sm5.classList.toggle("fa-pause-circle");
    }
    document.getElementById("myAudio_sm6").onended = () => {
      egl_sm6.classList.toggle("fa-pause-circle");
      egl_sm6.classList.toggle("fa-play-circle");      
      document.getElementById('volume_i6').style.display = "none";
    }
    egl_sm6.classList.toggle("fa-pause-circle");
    egl_sm6.classList.toggle("fa-play-circle");
  } else {
    myAudio_sm6.pause();
    egl_sm6.classList.toggle("fa-pause-circle");
    egl_sm6.classList.toggle("fa-play-circle");
  }
})






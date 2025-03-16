let cc = document.querySelector("#cam");
let call = document.querySelector(".cal");
let input = document.querySelector("#user");
let output = document.querySelector("#output");
let button = document.querySelector(".btn");
let ap = document.querySelector(".ap");
let gogle = document.querySelector(".gogle");
let clear = document.querySelector(".clr");
let setting = document.querySelector("#setting");
let one = document.querySelector("#one");
let second = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let bb = document.querySelector(".bb");
function set() {
  setting.addEventListener("click", () => {
    cc.style.display = "none";
    call.style.display = "none";
    gogle.style.display = "none";
    bb.style.display = "flex";
  });
}
one.addEventListener("click", () => {
  let phone = document.querySelector(".phone");
  phone.style.backgroundImage =
    "url('https://th.bing.com/th/id/R.e4475d7fe899a9afcc376d276f0b468b?rik=b0Yy1yFsm%2fPgmg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f02%2fmobile-wallpaper-20.jpg&ehk=bsoXyBETzwaKRUOr5iwwVNsmferp7K7DIbLht4heq4A%3d&risl=&pid=ImgRaw&r=0')";
});
second.addEventListener("click", () => {
  let phone = document.querySelector(".phone");
  phone.style.backgroundImage =
    "url('https://wallpaperaccess.com/full/24860.jpg')";
});
three.addEventListener("click", () => {
  let phone = document.querySelector(".phone");
  phone.style.backgroundImage =
    "url('https://i.pinimg.com/236x/d5/c6/7f/d5c67f276cd33f75893562b9fd91c3d6--snow-scenes-winter-scenes.jpg')";
});
four.addEventListener("click", () => {
  let phone = document.querySelector(".phone");
  phone.style.backgroundImage =
    "url('https://wallpapercave.com/wp/wp5388182.jpg')";
});
clear.addEventListener("click", () => {
  gogle.style.display = "none";
  cc.style.display = "none";
  call.style.display = "none";
  bb.style.display = "none";
  console.log("abc");
});
ap.addEventListener("click", () => {
  gogle.style.display = "block";
  cc.style.display = "none";
  call.style.display = "none";
  bb.style.display = "none";
});
button.addEventListener("click", () => {
  let requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: input.value }],
        },
      ],
    }),
  };
  let api =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyClXDUQTReeWJR7oW300YtteNKNdheMwHI";

  fetch(api, requestOption)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (data.candidates && data.candidates.length > 0) {
        output.textContent = data.candidates[0].content.parts[0].text;
      } else {
        console.log("No candidates found in the response");
      }
    })
    .catch((error) => console.error("Error fetching data: ", error));
});

function abc() {
  let cam = document.querySelector("#cam");
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((strm) => {
        cam.srcObject = strm;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("browser dosen't support camera access");
  }
  let camera = document.querySelector("#ccc");
  camera.addEventListener("click", () => {
    call.style.display = "none";
    cc.style.display = "block";
    gogle.style.display = "none";
    bb.style.display = "none";
  });
}

function cal() {
  let cal = document.querySelector("#cal");
  cal.addEventListener("click", () => {
    cc.style.display = "none";
    call.style.display = "block";
    gogle.style.display = "none";
    bb.style.display = "none";
  });
}
function repeat() {
  let time = document.querySelector("#time");
  let t = new Date();
  time.textContent = `${t.getHours()}.${t.getMinutes()}`;
}
setInterval(repeat, 1000);

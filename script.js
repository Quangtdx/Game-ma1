document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const intro = document.getElementById("intro");
  const dialogueBox = document.getElementById("dialogue");
  const dialogueText = document.getElementById("dialogue-text");
  const nextBtn = document.getElementById("nextBtn");
  const whiteout = document.getElementById("whiteout");
  const room = document.getElementById("room");
  const roomMsg = document.getElementById("room-msg");
  const finishBtn = document.getElementById("finishBtn");
  const countdown = document.getElementById("countdown");
  const jumpscare = document.getElementById("jumpscare");
  const scream = document.getElementById("scream");
  const creepy = document.getElementById("creepy");

  let dialogues = [
    "NPC: Chào mừng tới câu chuyện ma ám! Bạn đã sẵn sàng tham gia thử thách chưa?",
    "PLAYER: Đây là đâu và tại sao tôi lại ở đây? Tôi nhớ mình đang ngủ mà?",
    "NPC: Đây là một phần nhỏ của địa ngục. Nơi bạn sẽ phải sống sót khỏi những hồn ma...",
    "NPC: Nếu bạn chết ở đây, bạn cũng sẽ chết ngoài đời và linh hồn bạn sẽ kẹt lại mãi mãi.",
    "PLAYER: Tôi không muốn! Hãy trả tôi về! (người chơi hoảng sợ)"
  ];
  let idx = 0;

  startBtn.addEventListener("click", () => {
    intro.style.display = "none";
    dialogueBox.style.display = "block";
    dialogueText.textContent = dialogues[idx];
  });

  nextBtn.onclick = () => {
    idx++;
    if (idx < dialogues.length) {
      dialogueText.textContent = dialogues[idx];
    } else {
      dialogueBox.style.display = "none";
      whiteout.style.display = "block";
      whiteout.style.backgroundColor = "#fff";
      whiteout.style.position = "fixed";
      whiteout.style.top = 0;
      whiteout.style.left = 0;
      whiteout.style.width = "100%";
      whiteout.style.height = "100%";
      whiteout.style.zIndex = 10;

      setTimeout(() => {
        whiteout.style.display = "none";
        room.style.display = "block";
        creepy.play();
        roomMsg.textContent = "Bạn đang ở trong một căn phòng... nhạc vang lên...";
      }, 3000);
    }
  };

  finishBtn.onclick = () => {
    room.style.display = "none";
    countdown.style.display = "block";
    let num = 5;
    countdown.textContent = num;
    let interval = setInterval(() => {
      num--;
      countdown.textContent = num;
      if (num === 0) {
        clearInterval(interval);
        countdown.style.display = "none";
        jumpscare.style.display = "block";
        scream.play();
      }
    }, 1000);
  };
});

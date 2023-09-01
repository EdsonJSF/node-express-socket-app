const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMsg = document.querySelector("#txtMsg");
const btnSend = document.querySelector("#btnSend");

const socketClient = io();

socketClient.on("connect", () => {
  console.log("front connect");

  lblOnline.classList.remove("d-none");
  lblOffline.classList.add("d-none");
});

socketClient.on("disconnect", () => {
  console.log("front disconnect");

  lblOnline.classList.add("d-none");
  lblOffline.classList.remove("d-none");
});

btnSend.addEventListener("click", () => {
  const msg = txtMsg.value;
  const payload = {
    msg,
    id: "123abc",
    date: "32132135165",
  }
  socketClient.emit("send-msg", payload);
});

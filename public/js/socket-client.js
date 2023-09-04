const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMsg = document.querySelector("#txtMsg");
const btnSend = document.querySelector("#btnSend");

const socketClient = io();

socketClient.on("connect", () => {
  lblOnline.classList.remove("d-none");
  lblOffline.classList.add("d-none");
});

socketClient.on("disconnect", () => {
  lblOnline.classList.add("d-none");
  lblOffline.classList.remove("d-none");
});

socketClient.on("send-msg", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const msg = txtMsg.value;
  const payload = {
    msg,
    id: "123abc",
    date: "32132135165",
  };
  socketClient.emit("send-msg", payload, (id) => {
    console.log("From server", id);
  });
});

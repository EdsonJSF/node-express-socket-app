const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");

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

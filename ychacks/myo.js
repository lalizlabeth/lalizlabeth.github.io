var socket = new WebSocket("ws://yc-2014-myo.herokuapp.com");
socket.onmessage = function(event) {
  pose = JSON.parse(event.data)[1]["pose"];
  if (pose === "wave_out") {
    console.log("WAVED OUT");
  } else if (pose === "wave_in") {
    console.log("WAVED IN");
  } else if (pose === "fist") {
    console.log("FIST");
  }
};
socket.onopen = function(event) {
  console.log("on open");
  console.log(event);
};
socket.onerror = function(event) {
  console.log("on error");
  console.log(event);
};
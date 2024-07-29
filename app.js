setInterval(timer, 1000);
function timer() {
  const today = new Date();
  document.getElementById("text").innerHTML = today;
}
const today = new Date();
obj_val = {
  getHours: () => {
    let hours = today.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    return hours;
  },
  getMinutes: () => {
    let minutes = today.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes;
  },
  getSeconds: () => {
    let seconds = today.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return seconds;
  },
  getDate: () => {
    let day = today.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    return day;
  },
  getMonth: () => {
    let month = today.getMonth();
    if (month < 10) {
      month = "0" + (month + 1);
    }
    return month;
  },
  getYear: () => {
    let year = today.getFullYear();
    return year;
  },
  getDay: () => {
    const daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = today.getDay();
    return daylist[day];
  },
};
function h12_format() {
  let hours = obj_val.getHours();
  if (hours > 12) {
    hours = hours - 12;
    prepend = "PM";
    if (hours < 10) {
      hours = "0" + hours;
    }
  } else if (hours == 12) {
    hours = 12;
    prepend = "Noon";
  } else if (hours == 0) {
    hours = 12;
    prepend = "Midnight";
  } else if (hours < 12) {
    hours = hours;
    prepend = "AM";
  }
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("h12").innerText +
    "\n" +
    hours +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds() +
    "/" +
    prepend;
}
document.getElementById("h12").onclick = h12_format;
function h24_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("h24").innerText +
    "\n" +
    obj_val.getHours() +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds();
}
document.getElementById("h24").onclick = h24_format;
function d1_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("d1").innerText +
    "\n" +
    obj_val.getDate() +
    "-" +
    obj_val.getMonth() +
    "-" +
    obj_val.getYear() +
    "\t(" +
    obj_val.getDay() +
    ")";
}
document.getElementById("d1").onclick = d1_format;
function m1_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("m1").innerText +
    "\n" +
    obj_val.getMonth() +
    "-" +
    obj_val.getDate() +
    "-" +
    obj_val.getYear() +
    "\t(" +
    obj_val.getDay() +
    ")";
}
document.getElementById("m1").onclick = m1_format;
function y1_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("y1").innerText +
    "\n" +
    obj_val.getYear() +
    "-" +
    obj_val.getMonth() +
    "-" +
    obj_val.getDate() +
    "\t(" +
    obj_val.getDay() +
    ")";
}
document.getElementById("y1").onclick = y1_format;
function d12_format() {
  let hours = obj_val.getHours();
  if (hours > 12) {
    hours = hours - 12;
    prepend = "PM";
    if (hours < 10) {
      hours = "0" + hours;
    }
  } else if (hours == 12) {
    hours = 12;
    prepend = "Noon";
  } else if (hours == 0) {
    hours = 12;
    prepend = "Midnight";
  } else if (hours < 12) {
    hours = hours;
    prepend = "AM";
  }
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("d12").innerText +
    "\n" +
    obj_val.getDate() +
    "-" +
    obj_val.getMonth() +
    "-" +
    obj_val.getYear() +
    "(" +
    obj_val.getDay() +
    ")---" +
    hours +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds() +
    "/" +
    prepend;
}
document.getElementById("d12").onclick = d12_format;
function m12_format() {
  let hours = obj_val.getHours();
  if (hours > 12) {
    hours = hours - 12;
    prepend = "PM";
    if (hours < 10) {
      hours = "0" + hours;
    }
  } else if (hours == 12) {
    hours = 12;
    prepend = "Noon";
  } else if (hours == 0) {
    hours = 12;
    prepend = "Midnight";
  } else if (hours < 12) {
    hours = hours;
    prepend = "AM";
  }
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("m12").innerText +
    "\n" +
    obj_val.getMonth() +
    "-" +
    obj_val.getDate() +
    "-" +
    obj_val.getYear() +
    "(" +
    obj_val.getDay() +
    ")---" +
    hours +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds() +
    "/" +
    prepend;
}
document.getElementById("m12").onclick = m12_format;
function y12_format() {
  let hours = obj_val.getHours();
  if (hours > 12) {
    hours = hours - 12;
    prepend = "PM";
    if (hours < 10) {
      hours = "0" + hours;
    }
  } else if (hours == 12) {
    hours = 12;
    prepend = "Noon";
  } else if (hours == 0) {
    hours = 12;
    prepend = "Midnight";
  } else if (hours < 12) {
    hours = hours;
    prepend = "AM";
  }
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("y12").innerText +
    "\n" +
    obj_val.getYear() +
    "-" +
    obj_val.getMonth() +
    "-" +
    obj_val.getDate() +
    "(" +
    obj_val.getDay() +
    ")---" +
    hours +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds() +
    "/" +
    prepend;
}
document.getElementById("y12").onclick = y12_format;
function d24_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("d24").innerText +
    "\n" +
    obj_val.getDate() +
    "-" +
    obj_val.getMonth() +
    "-" +
    obj_val.getYear() +
    "(" +
    obj_val.getDay() +
    ")---" +
    obj_val.getHours() +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds();
}
document.getElementById("d24").onclick = d24_format;
function m24_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("m24").innerText +
    "\n" +
    obj_val.getMonth() +
    "-" +
    obj_val.getDate() +
    "-" +
    obj_val.getYear() +
    "(" +
    obj_val.getDay() +
    ")---" +
    obj_val.getHours() +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds();
}
document.getElementById("m24").onclick = m24_format;
function y24_format() {
  document.getElementById("output").innerText =
    "The Required Format is: " +
    document.getElementById("y24").innerText +
    "\n" +
    obj_val.getYear() +
    "-" +
    obj_val.getMonth() +
    "-" +
    obj_val.getDate() +
    "(" +
    obj_val.getDay() +
    ")---" +
    obj_val.getHours() +
    ":" +
    obj_val.getMinutes() +
    ":" +
    obj_val.getSeconds();
}
document.getElementById("y24").onclick = y24_format;

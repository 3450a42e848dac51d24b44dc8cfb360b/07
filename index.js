const canvasC = document.getElementById("canvasC").getContext("2d");
const canvasM = document.getElementById("canvasM").getContext("2d");
const canvasAM = document.getElementById("canvasAM").getContext("2d");

let plotC = undefined;
let plotM = undefined;
let plotAM = undefined;

const setup = () => {
  plotC = new Chart(canvasC, {
    type: "line",
    data: { datasets: [] },
  });
  plotM = new Chart(canvasM, {
    type: "line",
    data: { datasets: [] },
  });
  plotAM = new Chart(canvasAM, {
    type: "line",
    data: { datasets: [] },
  });

  const [w_c, U_c, w_m, U_m, m] = [10, 7, 1, 2, 0.8];

  document.getElementById("w_c").value = w_c;
  document.getElementById("U_c").value = U_c;
  document.getElementById("w_m").value = w_m;
  document.getElementById("U_m").value = U_m;
  document.getElementById("m").value = m;

  make_plots(make_data(w_c, U_c, w_m, U_m, m));
}

const make_plotC = (data) => {
  plotC.destroy();
  plotC = new Chart(canvasC, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Несущий сигнал u_c (t)",
          borderColor: "rgba(200, 77, 123, .8)",
          data: data,
          lineTension: 0.4,
          pointRadius: 0
        },
      ]
    },
    options: {
      bezierCurve: false,
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: { display: true, text: "t, c" }
        },
        y: {
          type: "linear",
          position: "left",
          title: { display: true, text: "U, В" }
        }
      },
      layout: {
        padding: 50,
      },
    }
  });
}

const make_plotM = (data) => {
  plotM.destroy();
  plotM = new Chart(canvasM, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Информационный сигнал u_m (t)",
          borderColor: "rgba(200, 77, 123, .8)",
          data: data,
          lineTension: 0.4,
          pointRadius: 0
        },
      ]
    },
    options: {
      bezierCurve: false,
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: { display: true, text: "t, c" }
        },
        y: {
          type: "linear",
          position: "left",
          title: { display: true, text: "U, В" }
        }
      },
      layout: {
        padding: 50,
      },
    }
  });
}

const make_plotAM = (data) => {
  plotAM.destroy();
  plotAM = new Chart(canvasAM, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Результат модуляции u_am (t)",
          borderColor: "rgba(200, 77, 123, .8)",
          data: data,
          lineTension: 0.4,
          pointRadius: 0
        },
      ]
    },
    options: {
      bezierCurve: false,
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: { display: true, text: "t, c" }
        },
        y: {
          type: "linear",
          position: "left",
          title: { display: true, text: "U, В" }
        }
      },
      layout: {
        padding: 50,
      },
    }
  });
}

const make_plots = (data) => {
  make_plotC(data.C);
  make_plotM(data.M);
  make_plotAM(data.AM);
}

const make_data = (w_c, U_c, w_m, U_m, m) => {
  const result = {C: [], M: [], AM: []};

  const right_border = 10;
  const step = right_border / 1000;

  for (let t = 0; t < right_border; t += step) {
    result.C.push({
      x: t,
      y: U_c * Math.cos(w_c * t)
    });
    result.M.push({
      x: t,
      y: U_m * Math.cos(w_m * t)
    });
    result.AM.push({
      x: t,
      y: U_c * (1 + m * Math.cos(w_m * t)) * Math.cos(w_c * t)
    });
  }

  return result;
}

const parse_input = () => {
  return [
    parseFloat(document.getElementById("w_c").value),
    parseFloat(document.getElementById("U_c").value),
    parseFloat(document.getElementById("w_m").value),
    parseFloat(document.getElementById("U_m").value),
    parseFloat(document.getElementById("m").value),
  ]
}

const run = () => {
  const [w_c, U_c, w_m, U_m, m] = parse_input();
  if (isNaN(w_c) || isNaN(U_c) || isNaN(w_m) || isNaN(U_m) || isNaN(m)) {
    alert("Некорретный ввод!");
    return;
  }
  if (w_c <= 0 || U_c <= 0 || w_m <= 0 || U_m <= 0 || m <= 0) {
    alert("Некорретный ввод!");
    return;
  }
  make_plots(make_data(w_c, U_c, w_m, U_m, m));
}

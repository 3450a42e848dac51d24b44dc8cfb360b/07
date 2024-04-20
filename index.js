const canvasC = document.getElementById("canvasC").getContext("2d");
const canvasM = document.getElementById("canvasM").getContext("2d");
const canvasAM = document.getElementById("canvasAM").getContext("2d");
const canvasSC = document.getElementById("canvasSC").getContext("2d");
const canvasSM = document.getElementById("canvasSM").getContext("2d");
const canvasSAM = document.getElementById("canvasSAM").getContext("2d");

let plotC = undefined;
let plotM = undefined;
let plotAM = undefined;
let plotSC = undefined;
let plotSM = undefined;
let plotSAM = undefined;

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
  plotSC = new Chart(canvasSC, {
    type: "line",
    data: { datasets: [] },
  });
  plotSM = new Chart(canvasSM, {
    type: "line",
    data: { datasets: [] },
  });
  plotSAM = new Chart(canvasSAM, {
    type: "line",
    data: { datasets: [] },
  });

  const [f_c, U_c, f_m, U_m, m] = [20, 7, 3, 2, 0.8];

  document.getElementById("f_c").value = f_c;
  document.getElementById("U_c").value = U_c;
  document.getElementById("f_m").value = f_m;
  document.getElementById("U_m").value = U_m;
  document.getElementById("m").value = m;

  make_plots(make_data(f_c, U_c, f_m, U_m, m));
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


const make_plotSC = (data) => {
  plotSC.destroy();
  plotSC = new Chart(canvasSC, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Спектр несущего сигнала",
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
          title: { display: true, text: "f, Гц" }
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

const make_plotSM = (data) => {
  plotSM.destroy();
  plotSM = new Chart(canvasSM, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Спект информационного сигнала",
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
          title: { display: true, text: "f, Гц" }
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

const make_plotSAM = (data) => {
  plotSAM.destroy();
  plotSAM = new Chart(canvasSAM, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Спектр результата модуляции",
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
          title: { display: true, text: "f, Гц" }
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
  make_plotSC(data.SC);
  make_plotSM(data.SM);
  make_plotSAM(data.SAM);
}

const dft = (data) => {
  const res = [];

  for (let k = 0; k < data.length / 2; k++) {
    let re = 0;
    let im = 0;

    for (let n = 0; n < data.length; n++) {
      const arg = (2 * Math.PI * k * n) / data.length;
      re += data[n] * Math.cos(arg);
      im -= data[n] * Math.sin(arg);
    }

    re = re / (data.length / 2);
    im = im / (data.length / 2);
    res.push(Math.sqrt(re * re + im * im));
  }

  return res;
}

const make_spectrum = (data) => {
  const raw = dft(data);

  let max_idx = 0;
  for (let i = 0; i < raw.length; i++) {
    max_idx = raw[i] > raw[max_idx] ? i : max_idx;
  }

  return raw.slice(0, 2 * max_idx + 20);
}

const make_data_c = (f_c, U_c) => {
  const result = [];
  const POINTS = 8192;

  const left_border = 0;
  const right_border = 3 / f_c;
  const size = right_border - left_border;
  const step = size / POINTS;

  for (let t = left_border; t < right_border; t += step) {
    result.push({ x: t, y: U_c * Math.cos(2 * Math.PI * f_c * t) });
  }

  return result;
}

const make_data = (f_c, U_c, f_m, U_m, m) => {
  const result = {C: [], M: [], AM: [], SC: [], SM: [], SAM: []};
  const POINTS = 8192;

  const left_border = 0;
  const right_border = 3 / f_m;
  const size = right_border - left_border;
  const step = size / POINTS;

   for (let t = left_border; t < right_border; t += step) {
    result.M.push({ x: t, y: U_m * Math.cos(2 * Math.PI * f_m * t) });
    result.AM.push({ x: t, y: U_c * (1 + m * Math.cos(2 * Math.PI * f_m * t)) * Math.cos(2 * Math.PI * f_c * t) });
  }
  result.C = make_data_c(f_c, U_c);

  const N = 1024;
  const C_one_T = [...Array(N).keys()].map(i => i / N).map(t => U_c * Math.cos(2 * Math.PI * f_c * t));
  const M_one_T = [...Array(N).keys()].map(i => i / N).map(t => U_m * Math.cos(2 * Math.PI * f_m * t));
  const AM_one_T = [...Array(N).keys()].map(i => i / N).map(t => U_c * (1 + m * Math.cos(2 * Math.PI * f_m * t)) * Math.cos(2 * Math.PI * f_c * t));

  result.SC = make_spectrum(C_one_T).map((p, idx) => {
    return { x: idx, y: p }
  });
  result.SM = make_spectrum(M_one_T).map((p, idx) => {
    return { x: idx, y: p }
  });
  result.SAM = make_spectrum(AM_one_T).map((p, idx) => {
    return { x: idx, y: p }
  });

  return result;
}

const parse_input = () => {
  return [
    parseFloat(document.getElementById("f_c").value),
    parseFloat(document.getElementById("U_c").value),
    parseFloat(document.getElementById("f_m").value),
    parseFloat(document.getElementById("U_m").value),
    parseFloat(document.getElementById("m").value),
  ]
}

const run = () => {
  const [f_c, U_c, f_m, U_m, m] = parse_input();
  if (isNaN(f_c) || isNaN(U_c) || isNaN(f_m) || isNaN(U_m) || isNaN(m)) {
    alert("Некорретный ввод!");
    return;
  }
  if (f_c <= 0 || U_c <= 0 || f_m <= 0 || U_m <= 0 || m <= 0) {
    alert("Некорретный ввод!");
    return;
  }
  make_plots(make_data(f_c, U_c, f_m, U_m, m));
}

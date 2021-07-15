const chart = document.querySelector("#session_chart");

var e = new Date(),
  t = (function (e, t) {
    for (
      var a = new Date(t, e, 1), o = [], r = 0;
      a.getMonth() === e && r < 15;

    ) {
      var s = new Date(a);
      o.push(s.getDate() + " " + s.toLocaleString("en-us", { month: "short" })),
        a.setDate(a.getDate() + 1),
        (r += 1);
    }
    return o;
  })(e.getMonth() + 1, e.getFullYear());

var options = {
  series: [
    {
      name: "Sessions",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  chart: {
    type: "area",
    height: 312,
    stacked: true,
    toolbar: {
      show: !1,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "category",
    categories: t,
  },
  yaxis: {
    labels: {
      formatter: function (e) {
        return e + "k";
      },
      offsetX: -15,
    },
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    fixed: { enabled: false },
    x: {
      show: false,
    },
    y: {
      formatter: function (e) {
        return e + "k";
      },
    },
    marker: { show: !1 },
  },
};
new ApexCharts(chart, options).render();

const session_browser = document.querySelector("#session_browser");

var session_browser_options = {
  chart: { height: 320, type: "radar", toolbar: { show: !1 } },
  series: [{ name: "Usage", data: [80, 50, 30, 40, 60, 20] }],
  labels: ["Chrome", "Firefox", "Safari", "Opera", "Edge", "Explorer"],
  plotOptions: {
    radar: {
      size: 130,
      polygons: {
        stroke: "#e9e9e9",
        fill: {
          colors: ["#f8f8f8", "#fff"],
        },
      },
    },
  },
  xaxis: {
    labels: { show: false },
  },
  yaxis: {
    labels: {
      formatter: function (e) {
        return e + "%";
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: { size: 4, color: "#fff", strokeColor: "#fff", strokeWidth: 2 },
};
new ApexCharts(session_browser, session_browser_options).render();

const session_os = document.querySelector("#session_os");

var session_os_options = {
  chart: {
    height: 320,
    type: "radialBar",
    toolbar: { show: !1 },
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: { fontSize: "24px" },
        value: { fontSize: "20px" },
        total: {
          show: true,
          label: "OS",
          formatter: function (e) {
            return 8541;
          },
        },
      },
    },
  },
  series: [50, 90, 60, 95],
  labels: ["Windows", "Linux", "iOS", "Andriod"],
};
new ApexCharts(session_os, session_os_options).render();

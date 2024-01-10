//* todo:
// billboard multi label/category axis with interactive features
// in local project, large data set performance

// Import stylesheets
import "./style.css";
import * as echarts from "echarts";
import Plotly from "plotly.js-dist-min";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

console.log("Hello!");

// billboard

// import "billboard.js/dist/billboard.css";
// import bb from "billboard.js";
// // for ESM environment, need to import modules as:
// // import bb, {line, pie} from "billboard.js";

// var chart_1 = bb.generate({
//   data: {
//     columns: [
//       ["data1", 30, 200, 100, 400, 150, 250],
//       ["data2", 130, 100, 140, 200, 150, 50],
//     ],
//     type: "bar", // for ESM specify as: bar()
//   },
//   bar: {
//     width: {
//       ratio: 0.5,
//     },
//   },
//   axis: {
//     x: {
//       type: "category",
//       categories: ["cat1", "cat2", "cat3", "cat4", "cat5", "cat6"],
//       // type: "category",
//       // tick: {
//       //   // culling: {
//       //   //   max: 8
//       //   // },
//       //   fit: true,

//       // },
//       axes: [
//         {
//           domain: [0, 10],
//           tick: {
//             outer: false,
//             // values: [10, 20, 30]
//           },
//         },
//         {
//           tick: {
//             outer: false,
//             count: 8,
//           },
//         },
//         {
//           tick: {
//             values: [0.3, 1.4, 2.6, 3.1, 3.9],
//           },
//         },
//         {
//           tick: {
//             values: ["a", "b", "c", "d", "e", "f", "g", "h", , "i"],
//           },
//         },
//       ],
//     },
//   },
//   bindto: "#barChart_1",
// });

// var data1 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 40));
// var data2 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 40));

// var chartMultiAxis = bb.generate({
//   data: {
//     columns: [
//       ["data1", ...data1],
//       ["data2", ...data2],
//     ],
//     type: "bar", // for ESM specify as: line()
//   },
//   axis: {
//     x: {
//       // type: "category",
//       axes: [
//         {
//           tick: {
//             outer: false,
//             count: 9,
//           },
//         },
//         {
//           tick: {
//             values: [0.3, 1.4, 2.6, 3.1, 3.9],
//           },
//         },
//       ],
//     },
//     y: {
//       axes: [
//         {
//           tick: {
//             format: function (x) {
//               return x + "%";
//             },
//             count: 2,
//           },
//         },
//       ],
//     },
//   },
//   grid: {
//     focus: {
//       show: true,
//       y: true,
//       edge: true,
//     },
//   },
//   zoom: {
//     enabled: true, // for ESM specify as: zoom()
//   },
//   subchart: {
//     show: true, // for ESM specify as: subchart()
//     showHandle: true,
//   },
//   bindto: "#multiAxes_1",
// });

// var chart2 = bb.generate({
//   data: {
//     columns: [
//       ["data1", 30, 200, 100, 400, 150],
//       ["data2", 50, 20, 10, 40, 15],
//     ],
//     type: "bar", // for ESM specify as: bar()
//     axes: {
//       data1: "y2",
//       data2: "y2",
//     },
//   },
//   axis: {
//     rotated: true,
//     y: {
//       show: false,
//     },
//     y2: {
//       show: true,
//       axes: [
//         {
//           tick: {
//             outer: false,
//             format: function (x) {
//               return x + "%";
//             },
//             count: 2,
//           },
//         },
//       ],
//     },
//   },
//   bindto: "#multiAxes_2",
// });

// var chart = bb.generate({
//   data: {
//     columns: [
//       ["data1", 300, 350, 300, 0, 0, 0],
//       ["data2", 130, 100, 140, 200, 150, 50],
//     ],
//     type: "line", // for ESM specify as: line()
//   },
//   bindto: "#lazyRender_1",
// });

// setTimeout(function () {
//   document.getElementById("lazyRender_1").style.display = "block";
// }, 1000);

// var chart2 = bb.generate({
//   data: {
//     columns: [
//       ["data1", 300],
//       ["data2", 130],
//     ],
//     type: "pie", // for ESM specify as: pie()
//   },
//   render: {
//     lazy: true,
//     observe: false,
//   },
//   bindto: "#lazyRender_2",
// });

// setTimeout(function () {
//   chart2.flush();
// }, 1000);

// // for ESM environment, need to import modules as:
// // import bb, {bar} from "billboard.js";

// var chart0 = bb.generate({
//   data: {
//     columns: [
//       ["data1", 30, 200, 100, 400, 150, 250],
//       ["data2", 130, 250, 140, 200, 150, 50],
//       ["data3", 100, 200, 340, 300, 250, 250],
//       ["data4", 80, 230, 240, 100, 350, 150],
//     ],
//     type: "bar", // for ESM specify as: bar()
//   },
//   bar: {
//     padding: 3,
//   },
//   bindto: "#barPadding",
// });

// // for ESM environment, need to import modules as:
// // import bb, {line, subchart} from "billboard.js";

// var chart1 = bb.generate({
//   data: {
//     columns: [["sample", 30, 200, 100, 400, 150, 250]],
//     type: "line", // for ESM specify as: line()
//   },
//   subchart: {
//     show: true, // for ESM specify as: subchart()
//     showHandle: true,
//   },

//   bindto: "#subChart",
//   title: {
//     text: "Temperature History by Region, 2017-2018\nSource: community weather center",
//   },
// });
// setTimeout(function () {
//   chart1.resize();
// }, 3000);
// // for ESM environment, need to import modules as:
// // import bb, {line, zoom} from "billboard.js";

// var chart3 = bb.generate({
//   data: {
//     columns: [
//       [
//         "sample",
//         30,
//         200,
//         100,
//         400,
//         150,
//         250,
//         150,
//         200,
//         170,
//         240,
//         350,
//         150,
//         100,
//         400,
//         150,
//         250,
//         150,
//         200,
//         170,
//         240,
//         100,
//         150,
//         250,
//         150,
//         200,
//         170,
//         240,
//         30,
//         200,
//         100,
//         400,
//         150,
//         250,
//         150,
//         200,
//         170,
//         240,
//         350,
//         150,
//         100,
//         400,
//         350,
//         220,
//         250,
//         300,
//         270,
//         140,
//         150,
//         90,
//         150,
//         50,
//         120,
//         70,
//         40,
//       ],
//     ],
//     type: "line", // for ESM specify as: line()
//   },
//   zoom: {
//     enabled: true, // for ESM specify as: zoom()
//   },
//   bindto: "#billboard",
// });

// plotly
// https://plotly.com/javascript/range-slider/
// https://plotly.com/javascript/axes/#multi-category-axes

var data = [
  {
    x: [
      ["LA Zoo", "LA Zoo", "LA Zoo"],
      ["giraffes", "orangutans", "monkeys"],
    ],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  },
  {
    x: [
      ["LA Zoo3", "LA Zoo3", "LA Zoo3"],
      ["giraffes", "orangutans", "monkeys"],
    ],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  },
  {
    x: [
      ["LA Zoo4", "LA Zoo4", "LA Zoo4"],
      ["giraffes", "orangutans", "monkeys"],
    ],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  },
  {
    x: [
      ["LA Zoo5", "LA Zoo5", "LA Zoo5"],
      ["giraffes", "orangutans", "monkeys"],
    ],
    y: [12, 18, 29],
    name: "LA Zoo",
    type: "bar",
  },
  {
    x: [
      ["SF Zoo", "SF Zoo", "SF Zoo"],
      ["giraffes", "orangutans", "monkeys"],
    ],
    y: [20, 14, 23],
    name: "SF Zoo",
    type: "bar",
  },
  {
    x: [
      ["sun", "sun", "sun"],
      ["zebras", "cheetahs", "gazelles"],
    ],
    y: [19, 14, 25],
    name: "randomword101",
    type: "bar",
  },
  {
    x: [
      ["coffee", "coffee", "coffee"],
      ["owls", "hawks", "robins"],
    ],
    y: [12, 18, 15],
    name: "randomword102",
    type: "bar",
  },
  {
    x: [
      ["summer", "summer", "summer"],
      ["butterflies", "bees", "flowers"],
    ],
    y: [24, 16, 20],
    name: "randomword103",
    type: "bar",
  },
  {
    x: [
      ["rain", "rain", "rain"],
      ["polar bears", "seals", "penguins"],
    ],
    y: [10, 22, 18],
    name: "randomword104",
    type: "bar",
  },
  {
    x: [
      ["pizza", "pizza", "pizza"],
      ["penguins", "dolphins", "whales"],
    ],
    y: [15, 20, 17],
    name: "randomword105",
    type: "bar",
  },
  {
    x: [
      ["apple", "apple", "apple"],
      ["elephants", "giraffes", "lions"],
    ],
    y: [15, 22, 18],
    name: "randomword1",
    type: "bar",
  },
  {
    x: [
      ["dog", "dog", "dog"],
      ["penguins", "dolphins", "whales"],
    ],
    y: [10, 25, 19],
    name: "randomword2",
    type: "bar",
  },
  {
    x: [
      ["rose", "rose", "rose"],
      ["pandas", "koalas", "bears"],
    ],
    y: [14, 20, 22],
    name: "randomword3",
    type: "bar",
  },
  // ... (repeat the pattern for the remaining items)
  {
    x: [
      ["ocean", "ocean", "ocean"],
      ["seals", "eagles", "camels"],
    ],
    y: [17, 16, 21],
    name: "randomword100",
    type: "bar",
  },
  {
    x: [
      ["apple", "apple", "apple"],
      ["elephants", "giraffes", "lions"],
    ],
    y: [15, 22, 18],
    name: "randomword106",
    type: "bar",
  },
  {
    x: [
      ["dog", "dog", "dog"],
      ["penguins", "dolphins", "whales"],
    ],
    y: [10, 25, 19],
    name: "randomword107",
    type: "bar",
  },
  {
    x: [
      ["rose", "rose", "rose"],
      ["pandas", "koalas", "bears"],
    ],
    y: [14, 20, 22],
    name: "randomword108",
    type: "bar",
  },
  {
    x: [
      ["sun", "sun", "sun"],
      ["zebras", "cheetahs", "gazelles"],
    ],
    y: [19, 14, 25],
    name: "randomword109",
    type: "bar",
  },
  {
    x: [
      ["coffee", "coffee", "coffee"],
      ["owls", "hawks", "robins"],
    ],
    y: [12, 18, 15],
    name: "randomword110",
    type: "bar",
  },
  {
    x: [
      ["mountain", "mountain", "mountain"],
      ["deer", "elk", "bears"],
    ],
    y: [17, 21, 16],
    name: "randomword111",
    type: "bar",
  },
  {
    x: [
      ["ocean", "ocean", "ocean"],
      ["dolphins", "whales", "sharks"],
    ],
    y: [23, 19, 15],
    name: "randomword112",
    type: "bar",
  },
  {
    x: [
      ["guitar", "guitar", "guitar"],
      ["singers", "drummers", "bassists"],
    ],
    y: [14, 20, 18],
    name: "randomword113",
    type: "bar",
  },
  {
    x: [
      ["rainforest", "rainforest", "rainforest"],
      ["jaguars", "parrots", "sloths"],
    ],
    y: [16, 25, 21],
    name: "randomword114",
    type: "bar",
  },
  {
    x: [
      ["computer", "computer", "computer"],
      ["programmers", "designers", "analysts"],
    ],
    y: [12, 18, 24],
    name: "randomword115",
    type: "bar",
  },
  {
    x: [
      ["moon", "moon", "moon"],
      ["wolves", "owls", "bats"],
    ],
    y: [18, 15, 22],
    name: "randomword116",
    type: "bar",
  },
  {
    x: [
      ["coffee", "coffee", "coffee"],
      ["baristas", "customers", "beans"],
    ],
    y: [13, 21, 17],
    name: "randomword117",
    type: "bar",
  },
  {
    x: [
      ["book", "book", "book"],
      ["authors", "readers", "editors"],
    ],
    y: [16, 23, 19],
    name: "randomword118",
    type: "bar",
  },
  {
    x: [
      ["rain", "rain", "rain"],
      ["umbrellas", "puddles", "raincoats"],
    ],
    y: [12, 20, 18],
    name: "randomword119",
    type: "bar",
  },
  {
    x: [
      ["garden", "garden", "garden"],
      ["flowers", "bees", "butterflies"],
    ],
    y: [14, 25, 21],
    name: "randomword120",
    type: "bar",
  },
  {
    x: [
      ["fire", "fire", "fire"],
      ["firefighters", "embers", "heat"],
    ],
    y: [19, 16, 23],
    name: "randomword121",
    type: "bar",
  },
  {
    x: [
      ["computer", "computer", "computer"],
      ["developers", "testers", "managers"],
    ],
    y: [15, 22, 20],
    name: "randomword122",
    type: "bar",
  },
  {
    x: [
      ["music", "music", "music"],
      ["singers", "instruments", "composers"],
    ],
    y: [20, 18, 16],
    name: "randomword123",
    type: "bar",
  },
  {
    x: [
      ["snow", "snow", "snow"],
      ["skiing", "snowboarding", "sledding"],
    ],
    y: [17, 21, 15],
    name: "randomword124",
    type: "bar",
  },
  {
    x: [
      ["city", "city", "city"],
      ["skyscrapers", "traffic", "people"],
    ],
    y: [22, 19, 14],
    name: "randomword125",
    type: "bar",
  },
  {
    x: [
      ["cake", "cake", "cake"],
      ["bakers", "icing", "candles"],
    ],
    y: [23, 15, 18],
    name: "randomword126",
    type: "bar",
  },
  {
    x: [
      ["beach", "beach", "beach"],
      ["sandcastles", "waves", "seagulls"],
    ],
    y: [16, 24, 20],
    name: "randomword127",
    type: "bar",
  },
  {
    x: [
      ["rainbow", "rainbow", "rainbow"],
      ["colors", "raindrops", "hope"],
    ],
    y: [19, 17, 21],
    name: "randomword128",
    type: "bar",
  },
  {
    x: [
      ["tea", "tea", "tea"],
      ["teapots", "cups", "steam"],
    ],
    y: [15, 20, 22],
    name: "randomword129",
    type: "bar",
  },
  {
    x: [
      ["forest", "forest", "forest"],
      ["trees", "animals", "silence"],
    ],
    y: [18, 21, 16],
    name: "randomword130",
    type: "bar",
  },
  {
    x: [
      ["keyboard", "keyboard", "keyboard"],
      ["typing", "coding", "shortcuts"],
    ],
    y: [14, 22, 19],
    name: "randomword131",
    type: "bar",
  },
  {
    x: [
      ["sunflower", "sunflower", "sunflower"],
      ["bees", "sunshine", "gardens"],
    ],
    y: [17, 20, 24],
    name: "randomword132",
    type: "bar",
  },
  {
    x: [
      ["ice cream", "ice cream", "ice cream"],
      ["scoops", "cones", "toppings"],
    ],
    y: [13, 18, 25],
    name: "randomword133",
    type: "bar",
  },
  {
    x: [
      ["planet", "planet", "planet"],
      ["galaxies", "stars", "astronomy"],
    ],
    y: [20, 16, 22],
    name: "randomword134",
    type: "bar",
  },
  {
    x: [
      ["camera", "camera", "camera"],
      ["photography", "shutter", "focus"],
    ],
    y: [15, 19, 23],
    name: "randomword135",
    type: "bar",
  },
];
var layout = {
  showlegend: false,
  xaxis: {
    tickson: "boundaries",
    ticklen: 15,
    showdividers: true,
    dividercolor: "grey",
    dividerwidth: 2,
    rangeslider: {
      count: 1,
    },
    range: [30, 40],
  },
};

Plotly.newPlot("myDiv", data, layout, {
  scrollZoom: true,
});

// based on prepared DOM, initialize echarts instance
const container = document.getElementById("main"); //document.querySelector('#chart');

var myChart = echarts.init(container);
// format with objects:
// var source = [
//    { datetime: '2019-08-28T07:01:00+02:00', value: 127.7 },
//    { datetime: '2019-08-28T07:02:00+02:00', value: 148.0 },
//    { datetime: '2019-08-28T07:03:00+02:00', value: 1180.4 },
//    { datetime: '2019-08-28T07:04:00+02:00', value: 117.9 }
// ];
// specify chart configuration item and data
var option = {
  //   dataset: {
  //     dimensions: ['datetime', 'value'],
  //     source: source
  // },
  // dataset: {
  //   // Define the dimension of array. In cartesian coordinate system,
  //   // if the type of x-axis is category, map the first dimension to
  //   // x-axis by default, the second dimension to y-axis.
  //   // You can also specify 'series.encode' to complete the map
  //   // without specify dimensions. Please see below.

  //   dimensions: ['product', '2015', '2016', '2017'],
  //   source: [
  //     { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
  //     { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
  //     { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
  //     { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
  //   ]
  // },
  // xAxis: { type: 'category' },
  // yAxis: {},
  // series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  xAxis: [
    {
      type: "category",
      splitArea: {
        show: true,
      },
      data: [
        "Lachi",
        "Oroklini",
        "Livadia",
        "Strovolos",
        "Ledras",
        "Oroklini",
        "Livadia",
        "Strovolos",
        "Ledras",
      ],
      axisTick: { show: false },
      axisTick: {
        show: false,
      },
      // axisPointer: {
      //   show: true
      // }
      // axisLabel: {
      //   // interval: 0,
      //   rotate: 30 //If the label names are too long you can manage this by rotating the label.
      // },
      // axisLabel: {
      //   width: 100, //fixed number of pixels
      //   overflow: 'truncate', // or 'break' to continue in a new line
      //   interval: 0,
      // },
      axisPointer: {
        show: true,
        type: "shadow",
      },
    },
    {
      type: "category",
      position: "bottom",
      data: [
        "pafos",
        "laranca",
        "",
        "Nicosia",
        "",
        "laranca",
        "",
        "Nicosia",
        "",
      ],
      axisLabel: {
        margin: 25,
      },
      axisLine: { show: false },
      axisTick: {
        length: 40,
        interval: function (index, value) {
          return value !== "";
        },
      },
    },
    {
      type: "category",
      position: "bottom",
      data: ["2018", "2019", "", "", "", "2020", "", "", ""],
      axisLabel: {
        margin: 25,
      },
      axisLine: { show: false },
      offset: 20,
      boundaryGap: true,
      axisTick: {
        length: 40,
        lineStyle: { color: "red" },
        interval: function (index, value) {
          return value !== "";
        },
      },
    },
  ],
  yAxis: {
    type: "value",
    splitLine: {
      show: false,
    },
  },
  // grid: { containLabel: true },
  grid: {
    // top: '12%',
    // left: '1%',
    // right: '10%',
    containLabel: true,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  series: [
    {
      type: "bar",
      name: "Revenue",
      data: [10, 20, 10, 20, 10, 20, 10, 20, 10],
    },
    {
      type: "bar",
      name: "Expenses",
      data: [10, 20, 10, 20, 10, 20, 10, 20, 30],
    },
  ],
  dataZoom: [
    {
      show: true,
      start: 60,
      end: 100,
    },
    {
      type: "inside",
      start: 94,
      end: 100,
    },
    // {
    //   id: 'dataZoomX',
    //   type: 'slider',
    //   xAxisIndex: [0, 1, 2],
    //   filterMode: 'filter',
    // },
    // {
    //   id: 'dataZoomX2',
    //   start: 80,
    //   type: 'inside',
    //   xAxisIndex: [0, 1, 2],
    //   filterMode: 'filter',
    // },
  ],
  title: {
    text: "awesome title",
  },
  tooltip: {
    trigger: "axis",
  },
};

// use configuration item and data specified to show chart
myChart.setOption(option);
// const { startValue, endValue } =  echarts.getEchartsInstance().getOption().dataZoom[0]
myChart.on("datazoom", function (evt) {
  var axis = myChart.getModel().option.xAxis[0];
  var starttime = axis.data[axis.rangeStart];
  var endtime = axis.data[axis.rangeEnd];
  console.log(starttime, endtime);
  var option = myChart.getOption();
  console.log(option.dataZoom[0].startValue, option.dataZoom[0].endValue);
});
myChart.on("datazoom", (evt) => {
  const option = myChart.getOption();
  console.log(
    "::datazoom2",
    option.xAxis[0].data[option.dataZoom[0].startValue],
    option.xAxis[0].data[option.dataZoom[0].endValue]
  );
});
// https://codepen.io/jornathan/pen/wvvWMzz
const resizeObserver = new ResizeObserver((entries) => {
  myChart.resize();
});
resizeObserver.observe(container);
// import * as echarts from 'echarts';

// var app: any = {};
// type EChartsOption = echarts.EChartsOption;

// var chartDom = document.getElementById('main')!;
// var myChart = echarts.init(chartDom);
// var option: EChartsOption;

// option = {
//   legend: {},
//   tooltip: {},
//   dataset: {
//     dimensions: ['product', '2015', '2016', '2017'],
//     source: [
//       { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
//       { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
//       { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
//       { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
//     ]
//   },
//   xAxis: { type: 'category' },
//   yAxis: {},
//   // Declare several bar series, each will be mapped
//   // to a column of dataset.source by default.
//   series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
// };

// option && myChart.setOption(option);

//https://echarts.apache.org/examples/en/editor.html?c=bar-drilldown

//https://github.com/apache/echarts/issues/4990

/*

another e.g

*/

var dom2 = document.getElementById("chart-container");
var myEChart = echarts.init(dom2, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app2 = {};

var option2 = {
  title: {
    text: "ECharts axis grouping",
  },
  tooltip: {},
  legend: {
    data: ["Sales"],
  },
  xAxis: [
    {
      position: "bottom",
      data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"],
    },
    {
      position: "bottom",
      data: [" ", "group1", "", " ", "group2", ""],
      axisLine: {
        show: false,
      },
      axisTick: {
        alignWithLabel: false,
        length: 40,
        align: "left",
        interval: function (index, value) {
          return value == " " ? true : false;
        },
      },
      axisLabel: {
        margin: 30,
        fontWeight: "bold",
        interval: function (index, value) {
          return value.length > 1 ? true : false;
        },
      },
    },
  ],
  yAxis: {},
  series: [
    {
      name: "Sales",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
};

if (option2 && typeof option2 === "object") {
  myEChart.setOption(option2);
}

window.addEventListener("resize", myEChart.resize);

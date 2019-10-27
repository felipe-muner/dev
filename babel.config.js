// babel.config.js

const presets = [
  [
    // "@babel/preset-react",
    "@babel/env",
    {
      targets: {
        // edge: "7",
        // firefox: "40",
        // chrome: "47",
        // safari: "7.1",
        "browsers": ["last 12 versions"]
      },
      corejs: 3,
      modules: false,
      // useBuiltIns: "usage"
      useBuiltIns: "false"
    },
  ],
];

const plugins = [
  // ["@babel/transform-arrow-functions"],
  ["@babel/plugin-transform-arrow-functions", { "spec": true }],
  // ["@babel/external-helpers"],
];

const overrides = [
  // {     
  //   test: ["./node_modules"],     
  //   presets: [       
  //     // config for node_modules     
  //   ],   
  // }, 
  {
    test: ["./tests"],     
    presets: [
      // config for tests
    ],
  }
]

module.exports = {
  presets,
  plugins,
  overrides
};

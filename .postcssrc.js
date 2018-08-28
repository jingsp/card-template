// https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     // to edit target browsers: use "browserslist" field in package.json
//     "autoprefixer": {}
//   }
// }
module.exports = { 
  "plugins": { 
    "postcss-import": {}, 
    "postcss-url": {}, 
    "postcss-aspect-ratio-mini": {}, 
    "postcss-write-svg": { utf8: false }, 
    "postcss-cssnext": {}, 
    "postcss-px-to-viewport": { 
      viewportWidth: 750, // (Number) The width of the viewport. 
      viewportHeight: 1334, // (Number) The height of the viewport. 
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    }, 
    "postcss-viewport-units":{}, 
    "cssnano": { 
      preset: "advanced", 
      autoprefixer: false, 
      "postcss-zindex": false 
    },
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  } 
}

// npm i cssnano-preset-advanced --save-dev著作权归作者所有。
// 商业转载请联系作者获得授权,非商业转载请注明出处。
// 原文: https://www.w3cplus.com/mobile/vw-layout-in-vue.html © w3cplus.com



// ESM
// CommonJS node.js에서 환경에서는 ESM이 아닌 CommonJS 방식을 지원

// import autoprefixer from 'autoprefixer'
const autoprefixer = require('autoprefixer')

// export {
//   Plugin: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    autoprefixer
  ]
}
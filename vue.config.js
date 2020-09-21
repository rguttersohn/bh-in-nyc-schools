module.exports = {
    configureWebpack: {
      output: {
        filename: 'bh-in-schools.js'
      },
      optimization: {
        splitChunks: false
      },
    },
    filenameHashing: false
  }
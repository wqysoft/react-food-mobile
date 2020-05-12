const { override, fixBabelImports,addWebpackAlias } = require('customize-cra');
const path = require("path")
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addWebpackAlias({//主要是把文件目录配置下，不用再require导入
    assets:path.resolve(__dirname,".src/assets")
  })
);
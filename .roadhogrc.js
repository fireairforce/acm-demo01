const path = require('path')

export default {
  'entry': 'src/index.js',
  'disableCSSModules': true,
  'hash': true,
  'env': {
    'development': {
      'extraBabelPlugins': [
        'dva-hmr',
        'transform-runtime',
        'transform-decorators-legacy',
        ["module-resolver", {
          "alias": {
            "components": "./src/components",
            "config": "./src/config",
            "images": "./src/images",
            "models": "./src/models",
            "pages": "./src/pages",
            "services": "./src/services",
            "utils": "./src/utils"
          }
        }],
        ["import", { "libraryName": "antd", "style": true }]
      ]
    },
    'production': {
      'publicPath': 'http://pdx2xd16q.bkt.clouddn.com/wd',
      'ignoreMomentLocale': true,
      'extraBabelPlugins': [
        'transform-runtime',
        'transform-decorators-legacy',
        ["module-resolver", {
          "alias": {
            "components": "./src/components",
            "config": "./src/config",
            "images": "./src/images",
            "models": "./src/models",
            "pages": "./src/pages",
            "services": "./src/services",
            "utils": "./src/utils"
          }
        }],
        ["import", { "libraryName": "antd", "style": true }],
      ],
      'autoprefixer': {
        'browsers': [
          'iOS >= 8', 'Android >= 4', 'ie >=9'
        ]
      }
    }
  }
}


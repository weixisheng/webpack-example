# webpack-example
## 安装webpack 和常见模块、插件

```javascript
npm install webpack --save-dev
npm install babel-loader babel-core babel-preset-es2015 --save-dev
npm install css-loader style-loader --save-dev
npm installl less-loader less --save-dev
npm installl--save-dev extract-text-webpack-plugin
npm install webpack-dev-server --save-dev
```

## webpack 概念 webpack.config.js
>入口entry
```javascript
/*单文件入口**/
module.exports = {
  entry:{
    app:"./a/b/c.js"
  }
}
//等价于
moudle.exports = {
  entry:"./a/b/c.js"
}

/*多文件入口，多个依赖文件一起注入，导向一个chunk*/
moudle.exports={
  entry:{
    app:'./src/app.js',
    vendor:'./src/vendor.js'
  }
}
```

> 输出output

```javascript
/*只有一个输出配置*/
module.exports={
  output:{
    filename:'[name].bundle.js', // [name]对应entry中如app,vendor
    path:__dirname+"/dist/js" //绝对路径
  }
}

```

> 加载器loaders

```javascript
module.exports={
  module:{
    rules:[
      {
       test:/\.css$/,
       use:[
         {loader:"style-loader"},
         {loader:"css-loader",options:{modules:true}}
       ]
      }
    ]
  }
}
//使用require指定loader,!分开loader,?传递参数
require("style-loader!css-loader?modules!./styles.css");
```


# weback-vue-multipleEntry

**CMS活动页本地开发环境** 
***
**文件目录说明**
* **src** 项目源码目录  
&emsp;&emsp;- **activity_folder** 活动页面文件夹名，每个活动页一个独立文件夹  
&emsp;&emsp;&emsp;&emsp;&emsp;- *index.html*  活动页面html文件（文件名固定）  
&emsp;&emsp;&emsp;&emsp;&emsp;- *app.js* 活动页面js主逻辑入口文件（文件名固定）  
&emsp;&emsp;&emsp;&emsp;&emsp;- **js** 该目录中存放的是js模块，可以通过ES6语法export、import对页面功能进行模块化开发，不再需要引入seajs、requirejs这类工具

- **dist** 最终生成的文件目录  
&emsp;&emsp;- **activity_folder** 活动页面文件夹名，每个活动页一个独立文件夹  
&emsp;&emsp;&emsp;&emsp;&emsp;- *index.html*  活动页面html文件  
&emsp;&emsp;&emsp;&emsp;&emsp;- *activity_folder_app.js* 活动页面js主逻辑入口文件

**项目开发流程**
1. 执行**npm install** 安装依赖插件；
2. 在src目录下新建活动页面文件夹 **activity_folder**，在 **activity_folder** 中新建 **index.html** 和 **app.js** 两个文件（如果需要对页面js模块化，可以再新建一个js文件夹存放js模块），**index.html** 引入js的路径**/activity_folder/app.js**；
3. 将 **dev-config.js** 文件中的目录修改为当前正在开发的 **activity_folder**，；
4. 执行 **npm run local** 启动项目；
5. 开发完成后，执行 **npm run build** 生成上线的文件（生成的index.html文件中引入的js，会被自动替换为上传到cms的路径，所以不需要更改）；
6. 该项目已经接入了H5活动平台，在提测之前，需要将新建页面信息添加到 **config.json**;

注意事项
* 在dev-config.js文件中，可以只定义要编译的活动文件夹名字，这样webpack-dev-server编译时只会编译当前活动目录中的js，节省编译和启动时间；
* 如果活动页面中没有新建app.js，生成的时候，在dist目录中不会生成该活动页面
* 要在本地配置host: 127.0.0.1 test.m.iqiyi.com，不然服务器会启动失败



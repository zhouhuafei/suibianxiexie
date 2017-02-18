代码装修中...
<p>1.base里放基础的工具方法</p>
<p>2.plugs里放一些不依赖css的基础功能</p>
<p>3.modules里放一些依赖css的模块功能</p>
<p>4.component里放一些有模块组合起来的组件</p>
<p>5.page里放一个页面对应的一个js</p>
<p>6.function里放一些绝对不会依赖到别的文件的js文件</p>
<p>7.gulp browserify的默认根目录是js目录下的base目录(引入文件时需要注意,否则会报错)</p>
<p>8.那些没办法做成模块的,我就单独放到了ui文件夹里</p>
1.在.vue文件中使用export default设置当前组件的内容
2.创建test-export.js，在main.js中引用


注意：1.export default向外暴露的数据，可以使用任意的变量来接收
     2.在一个模块中，export default只允许向外暴露一次
     3.在一个模块中，export default和export可以同时向外暴露数据

     4.export向外暴露的数据，只能用{}形式接收，称为 按需导出
     5.export可以向外暴露多个成员
     6.export导出的成员，在import的时候，名称必须一样（如果想换名称，必须使用as定义别名）
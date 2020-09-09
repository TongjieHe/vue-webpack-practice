Vuex的使用示例：(多个组件共享数据)
    1.安装vuex : npm install vuex -S 
    2.使用
        ①　import  use
        ②　创建ｓｔｏｒｅ
        ③　挂载
    3.获取store容器的数据　#store.state.count
    4.修改store的数据　mutations中定义方法，使用this.$store.commit("increment")调用方法
    5.传参
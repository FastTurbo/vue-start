# vue-start
    liver-server 安装到全局，然后使用live-server启动，就可以生成一个当前目录的服务器，以127.0.0.1为地址的服务器，
    简单而高效。
    
    双括号表现并不友好，当js出错或者网速慢的时候，会显示双括号并不能真正表达清楚。
    
    webstorm提交时，记得选择author
    
    v-model修饰符
    lazy:当input失去焦点的时候才会显示效果
    number:当先输入数字时，认为你输入的全是数字，会自动把非数字去掉
    
    v-pre原样输出，并不进行编译绑定等动作。
    v-cloak渲染完成后才会显示
    v-once只在第一次渲染的时候绑定，之后不会再随双向绑定变化了。只渲染一次。
    
    自定义指令中的钩子函数：
    bind:只调用一次，指令第一次绑定到元素时使用。
    inserted：被绑定元素插入父节点时使用
    update:被绑定元素所在的模版更新时使用
    componentupdate更新完成时使用
    unbind:在解绑时使用
    
    template:
    1 在选项中添加模版：
    2 在标签里面建立模版,使用选项指定到当前template标签
    3 使用script标签建立模版
    
    组件：
    全局组件：Vue.component()
    局部组件：在选项componets中定义
    
    组件与指令的区别：
    指令是定义的标签属性，组件定义的是标签
    
    组件属性设定：
    使用props选项，是一个数组，添加到其中
    在组件中的属性要用小驼峰方式命名，代替横杠。
    使用属性绑定的方式与作用域中的属性交互
    
    在外部声明局部组件：
    在选项components中设置属性指向该组件
    注意父子组件，必须在父组件选项components中挂载子组件
    在component标签，使用:is来动态绑定不同的component组件
    
    native修饰符，让组件可以调用构造器的原始方法。：@click.native='app中的methods属性方法'
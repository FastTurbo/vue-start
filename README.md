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
    
    在全局中定义的mixins方法最先执行，然后是mixins中的方法，然后才是构造函数的方法
    mixins中的方法并不是覆盖的方法，而是与构造器中的相同方法一并执行，并且mixins中的方法比构造器里的方法优先执行。
    
    extends只能放一个，而mixins可以放一个数组，很多歌mixins对象
    
    
    vue与第三方库一起使用：要注意生命周期
    只有在mounted和update周期才能使用，因为这个阶段才能有dom
    
    $on在外部定义实例方法，在外部调用使用$emit来调用
    $once定义只调用一次的方法
    $off用来关闭方法
    slot的用法
    
    vue-cli的用法：
    
    
    router
    
    router的内容会显示在router-view标签中
    router-link标签用来设置路由，to属性设置要路由的页面
    设置子路由的时候path属性值不需要带/符号！！！！
    嵌套的路由，一定要在父路由组件上加上router-view!!!
    
    子路由传值，要将to换成绑定形式:to=赋值一个对象，
    使用:to传递参数的时候，在json中应使用name属性来区分路由，否则参数不能传递过去
    
    name为路由中设置的name(router设置需加上name属性)
    然后后面params收到的对象就是子路由可以接收的参数，
    在子路由对应的组件中就可以通过$route.params.xxx获取参数
    
    多路由，即多个router-view情况下
    路由的设置应为每个router-view配置组件
    并在components中为每个router-view根据名字配置页面
    
    通过url传递参数，在路由配置中path后面使用冒号加上参数名称即可：path:'/index/:param'
    然后在子组件中使用$route.params.xxx来获取参数
    
    重定向：在路由定义中设置redirect即可，带参数的，就带同样的参数就可以
    
    alias为路由起别名，注意：/根路由是不能起别名的
    
    过渡效果，使用transition标签包住router-view
    name:fade过渡方式
    四个关键类：-enter -enter-active -leave -leave-active
    在-active中编写自己的过渡动画
    
    mode:过渡模式
    
    路由中的mode，路径的模式
    history：历史模式，在路径中没有带#号
    hash: hash模式,会带有一个#号
    
    设置404页面，当路径不匹配时就会出现404页面，那么
    在路由中配置
    path为*号，然后设置相应的component
    
    路由钩子函数；
    进入和离开路由的时候所调用的几个监听函数
    在路由配置文件中配置：
    其中参数比较中要，to,from,next
    钩子函数会停止路由的跳转，在函数末尾调用next()就会继续进行，或者在next()中添加path重定向。
    
    编程式导航，在实例中使用this.$router.go()传入1或-1来控制路由的前进或后退
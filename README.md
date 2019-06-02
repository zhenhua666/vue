# less

#变量

@width:10px;
@height:@width+10px;

.header{
    width:@width;
    height:@height;
}

#混合Mixins
.bordered{
    border-top:dotted 1px black;
    border-bottom: solid 2px black;
}
.post a{
    color:red;
    .bordered();
}

#嵌套
.header{
    color:black;
    .navigation{
        font-size:12px;
    }
    .logo{
        width:300px;
    }
}

.clearfix{
    display:block;
    zoom:1;

&:after{
    content:"";
    display:block;
    font-size:0;
    clear:both;
    visibility:hidden;
   }
}

.componnet{
    width: 300px;
    @media(min-width:750px){
        @media(min-resolution:192dpi){
            background-image:url(/img/retina2x.png)
        }
    }
    @media(min-width:1280px){
        width:800px;
    }
}

li{display: inline-block;}

input[type="radio"]{
    position:absolute;
    outline:none;
}
.tab{

}
.section{
    position:absolute;
    top:50px;
    left:0;
}

input[type='raido']:checked~.tab{
    
}
input[type='radio']:checked~.section{
    z-index:2;
}

## less

##变量

#属性值
@color:#333
body{
    background-color:@color;
}
#属性
@property:color;
body{
    background-@{property}:#333
}
#选择器
@mySelector:banner;
@{mySelector}{
    background-color:#333
}
#变量名
@var:"hi"
@hi:"hello world"
body{
    content:@@var;
}
#地址
@image:"../img"
body{
    background:url("@{images}/white-sand.png")
}


##混合
.border{
    border:1px soild
}
.minxin(@color:white){
    background:@color
}
.ji{
    minxin();
}


##嵌套
.da{
    .xiao{

    }
}



##   &运算符表示嵌套规则的父选择器
li{
    &.active{   相当于 li.active
        color:#333
    }
}

a{
    &:hover{
        color:#333
    }
}
div{
    &::before{
        content:""
    }
}
div{
    &~div{

    }
    &+div{

    }
}

1、DNS解析、使用CDN和关于multiple Hostnames as part of resources request. 
2、HTTP Headers (Expires, Cache-Control, If-Modified-Since) 
3、Steve Souders的所有规则(High Performance Websites) 
4、如何解决PageSpeed, YSlow, Chrome Dev Tools Audit, Chrome Dev Tools Timeline显示的所有问题； 
5、何时把任务传到服务器和客户端； 
6、缓存，预取和负荷技术的使用； 
7、Native JS，知道何时从头开始做，何时查找别人的代码，同时可以评估这样做的优缺点； 
8、modern MVC Javascript libraries (e.g. AngularJS, EmberJS, ReactJS), graphic libraries (e.g. D3, SnapSVG), DOM manipulation libraries (e.g. jQuery, Zepto), lazy loading or package management libraries (e.g. RequireJS, CommonJS), task managers (e.g. Grunt, Gulp), package managers (e.g. Bower, Componentjs) and testing (e.g. Protractor, Selenium)的相关知识和用法； 
9、CSS标准、modern conventions、 strategies (e.g. BEM, SMACSS, OOCSS)的知识和用法； 
10、JS的电脑知识（内存管理，单线程的性质，垃圾收集算法，超时，范围，提升，模式）

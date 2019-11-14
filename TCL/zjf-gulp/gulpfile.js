// 引入gulp模块
let gulp = require("gulp");
// 引入gulp-connect服务器模块…
let connect = require("gulp-connect");
// 合并
let concat = require("gulp-concat");
// 压缩
let uglify = require("gulp-uglify");
// 改名
let rename = require("gulp-rename");
// ES6转ES5
let babel = require("gulp-babel");

let proxy = require("http-proxy-middleware");

let sass = require("gulp-sass");






// console.log(gulp);gulp是一个对象
// 将开发环境中的文件复制到上线环境中，
// 开启服务器，浏览器自动刷新

// 测试命令
gulp.task("gn",()=>{
    console.log("gn");    
})

// 转存：项目分为两个版本，上线版和开发版

gulp.task("qwe",()=>{//定义一个指令，写一个回调函数
    gulp.src(["src/**/*","!src/asd.css"])
    // .pipe是指编译
    .pipe(gulp.dest("server")).pipe(connect.reload());
})

// 开启监听
gulp.task("listen",()=>{
    gulp.watch("src/zjf.html",["qwe"]);
})


// gulp的插件
// 服务器插件：gulp-connect
// 下载：命令提示符中输入：npm install gulp-connect
// 引入之后才能使用

gulp.task("server",()=>{
    connect.server({
        root:"server",     //以哪个文件夹为服务器的根目录
        port:83,       //端口号
        livereload:true  //是否可以自动刷新
    })
})

// 批处理指令，批处理了监听和服务器
gulp.task("pichuli",["server","listen"],()=>{
    console.log("批处理执行成功");
});


// js文件合并压缩改名
gulp.task('scripts',()=>{
    gulp.src(['src/js/a.js','src/js/b.js'])
        .pipe(concat('index.js'))//合并
        // ES6转ES5
        .pipe(babel())
        .pipe(gulp.dest('server/js'))//合并之后立即转存
        .pipe(uglify()) //转存之后压缩
        .pipe(rename('index.min.js'))//压缩之后再改名
        .pipe(gulp.dest('server/js'))//改名之后再转存
})




// sass转css的命令,建立监听，on绑定，然后合并转存，在小黑框里执行gulp tcl
gulp.task("tcl",()=>{
    gulp.watch("./TCL/css/shopcar.scss",["sass"]);
})

gulp.task('sass',()=>{
   return gulp.src("./TCL/css/shopcar.scss")
   .pipe(sass().on("error",sass.logError))
   .pipe(gulp.dest("./TCL/css"));
})


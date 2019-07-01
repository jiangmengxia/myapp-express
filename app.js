var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./app/routes/index.server.router');
var usersRouter = require('./app/routes/users.server.router');
var blogRouter = require('./app/routes/blog.server.router');
var imageRouter = require('./app/routes/image.server.router');
var imageTypeRouter = require('./app/routes/image-type.server.router')
var blogCataRouter = require('./app/routes/blog-catagory.server.router')

var app = express();

var NODE_ENV = process.env.NODE_ENV || 'production';
var isDev = NODE_ENV === 'development';
console.log('isDev', isDev, 'Node_ENV', process.env.NODE_ENV)
/*后端热更新，配合supervisor模块命令*/
if (isDev) {
    // var webpack = require('webpack'),
    //     webpackDevMiddleware = require('webpack-dev-middleware'),
    //     webpackHotMiddleware = require('webpack-hot-middleware'),
    //     webpackDevConfig = require('./build/webpack.config.js');
    //
    // var compiler = webpack(webpackDevConfig);
    //
    // app.use(webpackDevMiddleware(compiler, {
    //     publicPath: webpackDevConfig.output.publicPath,
    //     noInfo: true,
    //     stats: {
    //         colors: true
    //     }
    // }));
    //
    // app.use(webpackHotMiddleware(compiler));
}
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
        /*让options请求快速返回*/
    }
    else next();
});

// view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/blog', blogRouter);
app.use('/blog-cata', blogCataRouter)
app.use('/image', imageRouter);
app.use('/image-type', imageTypeRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;

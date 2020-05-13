require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const Article = require('./article')
const articleRouter = require('./articles')
const methodOverride = require('method-override')
const cors = require("cors")
const path = require('path');

const app = express()
const port = process.env.PORT || 5000

mongoose.connect('mongodb://localhost:5000/blog', { 
    useNewUrlParser: true,  useUnifiedTopology: true 
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
})

app.use("/blog", index.ejs)
app.use("/blog", articles)
app.use("/blog", article)
app.use("/blog", edit.ejs)
app.use("/blog", new.ejs)
app.use("/blog", show.ejs)

app.get('port', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.ejs'));
});

app.use(cors())
app.use('/articles', articleRouter)
app.listen(port)
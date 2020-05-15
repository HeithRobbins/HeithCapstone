require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const methodOverride = require('method-override')
const cors = require('cors')
const path = require('path');

// const indexEjs = require("./views/index.ejs")didnt work
// const formFields = require("./views/_form_fields.ejs")//didnt work

// Routers
const Article = require('./models/article')
const articleRouter = require('./routes/articles')



const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));


mongoose.connect('mongodb://localhost:27017/blog', { 
    useNewUrlParser: true,  useUnifiedTopology: true 
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


const blogRouter = express.Router()

blogRouter.get('/articles', async (req, res) => {
    console.log("you made this far")
    const articles = await Article.find().sort({
        createdAt: 'desc' })
        res.render('articles', { articles: articles })
    //     res.redirect('../articles/index')
})

blogRouter.get('/new-blog', async (req, res) => {
    // const articles = await Article.find().sort({
    //     createdAt: 'desc' })
    // res.render('articles/index', { articles: articles })
    console.log(res.status(200).send("<h1>I all zie blog</h1>"))
    
})

app.use("/articles", blogRouter) //dosent works not query for it 
app.use("/articles", articleRouter) //ok
app.use("/new", articleRouter) //ok
// app.use("_form_fields", formFields)//no
// app.use("/views/edit", indexEjs)//no
app.use("/views/show", articleRouter) //ok

// app.use('/articles', articleRouter)

app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use(cors())

app.listen(port)

const express = require('express')
const app = express()

app.use(express.static('public'))

const navigation = require('./data/nav.json')

// app.get('/about', (req, res) => {
//     res.render('pages/about.ejs', { allNavigation: navigation })
// })
app.get(navigation[2].url, (req, res) => {
    res.render('pages/about.ejs', { allNavigation: navigation })
})
app.get('/contact', (req, res) => {
    res.render('pages/contact.ejs', { allNavigation: navigation })
})
app.get('/', (req, res) => {
    res.render('pages/home.ejs', { allNavigation: navigation, name: navigation[0].name })
})
app.get('/team', (req, res) => {
    res.render('pages/team.ejs', { allNavigation: navigation })
})
app.listen(2000, () => {
    console.log('listening at localhost 2000')
})

const path = require('path')
const express = require('express')
const hbs = require('hbs')
// const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 4000
//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templete/views')
const PartialsPath = path.join(__dirname, '../templete/partials')


//Define handlerbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(PartialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Vathana'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Vathana'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'vathana',
        helpText: 'This is some helpful text.',
        help: 'how can I help you ?'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            err: 'You must provide the address'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    // else if(req.query.address=='Philadelphia')
    //     return res.send({
    //         forecast: 'It is snowing',
    //         location: req.query.address
    //     })
    // else {
    //     return res.send({
    //         err: 'Address not found'
    //     })
    // }
})

app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            err: 'You must provide a search item'
        })
    }
    
    res.send({
        product: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'vathana',
        message_error: 'help artical not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404 Page',
        name: 'vathana',
        message_error: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
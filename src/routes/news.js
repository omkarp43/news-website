const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async (req, res) => {
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/`)
        res.render('news', { articles: newsAPI.data })
    } catch (err) {
        if (err.response) {
            res.render('news',{articles:null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            res.render('news',{articles:null})
            console.log(err.requiest)
        } else {
            res.render('news',{articles:null})
            console.error('Error', err.message)
        }
    }
})
newsRouter.get('/:id', async (req, res) => {
    let articleID= req.params.id;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`)
        res.render('newSingle', { article: newsAPI.data })
    } catch (err) {
        if (err.response) {
            res.render('newSingle',{article:null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            res.render('newSingle',{article:null})
            console.log(err.requiest)
        } else {
            res.render('newSingle',{article:null})
            console.error('Error', err.message)
        }
    }
})
newsRouter.post('/', async (req, res) => {
    let search =req.body.search;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newSearch', { articles: newsAPI.data })
    } catch (err) {
        if (err.response) {
            res.render('newSearch',{articles:null})
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if (err.request) {
            res.render('newSearch',{articles:null})
            console.log(err.requiest)
        } else {
            res.render('newSearch',{articles:null})
            console.error('Error', err.message)
        }
    }
})

module.exports = newsRouter;

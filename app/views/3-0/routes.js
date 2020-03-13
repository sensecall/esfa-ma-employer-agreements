const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.get('/', (req, res, next) => {
	res.redirect(`/${req.version}/config`)
})

router.post('/config', (req, res, next) => {
	let businessCount = req.session.data['orgs-count']
	let allBusinessesCount = req.session.data['businesses'].length

	req.session.data['random-businesses'] = Array.from({length: businessCount}, () => Math.floor(Math.random() * allBusinessesCount)).sort((a, b) => a - b);
	res.redirect('organisations')
})
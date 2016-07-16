var express = require('express')
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var app = express()

//1468708112

app.get('/:dateArg', function (req, res) {

	var dateArg = req.params.dateArg

	var myDate = new Date(parseInt(dateArg) || dateArg)

	var humanReadableDate = MONTHS[myDate.getUTCMonth()] + 
		" " + 
		myDate.getUTCDate() + 
		", " + 
		myDate.getUTCFullYear()
	
  res.send({
		unix: myDate.getTime(),
		natural: humanReadableDate,
	})
})

var port = process.env.PORT || 3000

app.listen(port, function () {
	console.log('listening on port ' + port)
})
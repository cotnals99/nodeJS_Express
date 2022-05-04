const fortune = require('./fortunes')

exports.home = (req, res) => res.render('home');

exports.about = (req, res) => res.render('about', {fortune: fortune.getFortune()});

exports.notFound = (req, res) =>res.render('404')


/*eslint-disable no un-used-vars*/
exports.serverError = (err, req, res, next) => {
    console.log(err)
    res.render('500')
} 
   /*eslint-enable no un-used-vars*/ 
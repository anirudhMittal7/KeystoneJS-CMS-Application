var keyStone = require('keystone');

exports = module.exports = function(req,res) {
	var view = new keyStone.View(req,res);
	var locals = res.locals;

	locals.section = "store";

	//load products

	view.query('products',keyStone.list('Product').model.find());

	//render
	view.render('products');
}
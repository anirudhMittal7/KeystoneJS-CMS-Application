var keyStone = require('keystone');

exports = module.exports = function(req,res) {
	var view = new keyStone.View(req,res);
	var locals = res.locals;

	locals.section = "store";
	locals.filters = {
		product : req.params.product
	}

	locals.data = {
		products: []
	}

	//load product

	view.on('init',function(next){

		var item = keyStone.list('Product').model.findOne({
			slug: locals.filters.product
		});

		item.exec(function(error,result){

			locals.data.product = result;
			next(error);
		});

	});

	//render
	view.render('product');
}
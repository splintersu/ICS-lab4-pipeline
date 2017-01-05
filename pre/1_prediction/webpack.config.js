var webpack = require('webpack')

var config = {
	entry : './index2.html',

	output : {
		path : './',
		filename : 'index.html',
	},

	devServer : {
		inline : true,
		port : 7777
	},

	module:{
		loaders: [{
			test : /\.jsx?$/,
			exclude : /node_modules/,
			loader : 'babel',

			query : {
				presets : ['es2015' , 'react']
			}},
			{
				test : /\.css$/,
				loader : 'style!css'
			},{
				test : /\.less$/,
				loader : 'style!css!less'
			},{
				test : /\.(jpg|png)$/,
				loader : 'url?limit=8192'
			}
		]
	},

	plugins : [
		new webpack.optimize.UglifyJsPlugin({
			output : {
				comments : false
			},
			compress : {
				warnings : false
			}
		})
	]
}

module.exports = config;

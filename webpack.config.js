module.exports = {
	entry: './components/Base.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					optional: ['runtime']
				}
			}
		]
	}
};

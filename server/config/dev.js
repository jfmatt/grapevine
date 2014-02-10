var path = require('path'),

    srcDir = path.join(__dirname, '..', '..', 'client')

module.exports = {
	port: 3000,
	views: path.join(srcDir, 'views'),
	staticDir: path.join(srcDir, 'public')
}
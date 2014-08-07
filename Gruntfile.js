module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			dev: {
				files: {
					'javascript/main.min.js': ['javascript/main.js', 'javascript/addon.js']
				}
			}
		},
		cssmin: {
			dev: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css'],
					dest: 'css/min/',
					ext: '.min.css'
				}]
			}
		}
	});
	grunt.loadNpmTasks(
		'grunt-contrib-uglify'
	);
	grunt.loadNpmTasks(
		'grunt-contrib-cssmin'
	);
}
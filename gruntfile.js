/*!
 * Los Portales (http://www.losportales.cu/)
 * (c) 2014 Los Portales S.A.
 * <> by ZorphDark
 */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		path: {
			base: './',
			sources: 'sources/',
			assets: 'dist/assets/',
			css: {
				source: '<%= path.sources %>css/',
				dist: '<%= path.assets %>css/'
			},
			js: {
				source: '<%= path.sources %>js/',
				dist: '<%= path.assets %>js/'
			},
			html: {
				source: '<%= path.sources %>html/',
				dist: 'dist/html/'
			}
		},
		banner: '/*!\n' +
			' * <%= pkg.name %> (<%= pkg.homepage %>)\n' +
			' * (c) <%= grunt.template.today("yyyy") %> <%= pkg.description %>\n' +
			' */\n\n',

		less: {
			options: {
				strictImports: true,
				ieCompat: true,
				cleancss: true
			},
			dist: {
				files: {
					'<%= path.css.source %>compiled.min.css' : '<%= path.css.source %>losportales.less'
				}
			}
		},

		uglify: {
			options: {
				preserveComments: 'some'
			},
			dist: {
				files: {
					'<%= path.js.source %>compiled.min.js': '<%= path.js.source %>base.js'
				}
			}
		},

		concat : {
			css: {
				files: {
					'<%= path.css.dist %>losportales.min.css': [
						'<%= path.css.source %>vendor/bootstrap/bootstrap.min.css',
						'<%= path.css.source %>vendor/font-awesome.min.css',
						'<%= path.css.source %>compiled.min.css'
					]
				}
			},
			js: {
				files: {
					'<%= path.js.dist %>losportales.min.js': [
						'<%= path.js.source %>vendor/jquery.min.js',
						'<%= path.js.source %>vendor/bootstrap.min.js',
						'<%= path.js.source %>compiled.min.js'
					]
				}
			}
		},

		usebanner: {
			options: {
				banner: '<%= banner %>'
			},
			css: {
				files: {
					src: [ '<%= path.css.dist %>losportales.min.css' ]
				}
			},
			js: {
				files: {
					src: [ '<%= path.js.dist %>losportales.min.js' ]
				}
			}
		},

		jekyll: {
			build: {
				options: {
					config: '<%= path.base %>_config.yml',
					src: '<%= path.html.source %>',
					dest: '<%= path.html.dist %>'
				}
			}
		},

		watch: {
			options: { livereload: true },
			css: {
				files: ['<%= path.css.source %>**/*.less'],
				tasks: ['css']
			},
			js: {
				files: ['<%= path.js.source %>**/*.js',
						'! <%= path.js.source %>compiled.min.js'
				],
				tasks: ['js']
			},
			html: {
				files: ['<%= path.html.source %>**/*.*'],
				tasks: ['html']
			}
		}
	});
	
	require('time-grunt')(grunt);
	
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('html', ['jekyll']);
	grunt.registerTask('css', ['less:dist', 'concat:css', 'usebanner:css']);
	grunt.registerTask('js', ['uglify', 'concat:js', 'usebanner:js']);
	grunt.registerTask('default', ['html', 'css', 'js']);
};
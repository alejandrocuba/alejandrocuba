/*!
 * Alejandro Cuba (http://alejandrocuba.com/)
 * (c) 2016 Alejandro Cuba Ruiz's website
 * <> by ZorphDark
 */

module.exports = function (grunt) {
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
				dist: 'dist/'
			}
		},
		banner: '/*!\n' +
			' * <%= pkg.name %> (<%= pkg.homepage %>)\n' +
			' * (c) <%= grunt.template.today("yyyy") %> <%= pkg.description %>\n' +
			' */\n\n',

		postcss: {
			options: {
				processors: [
					require('precss')(),
					require('postcss-cssnext')({ browsers: ['last 30 versions', 'IE >= 8'], }),
					require('postcss-clean')(),
				]
			},
			dist: {
				files: {
					'<%= path.css.source %>compiled.min.css': '<%= path.css.source %>styles.css'
				}
			}
		},

		uglify: {
			options: {
				mangle: false,
				preserveComments: 'some'
			},
			dist: {
				files: {
					'<%= path.js.source %>compiled.min.js': [
						'<%= path.js.source %>scripts.js',
					]
				}
			}
		},

		concat: {
			css: {
				files: {
					'<%= path.css.dist %>styles.min.css': [
						'<%= path.css.source %>compiled.min.css'
					]
				}
			},
			js: {
				files: {
					'<%= path.js.dist %>scripts.min.js': [
						'<%= path.js.source %>vendor/prism.min.js',
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
					src: ['<%= path.css.dist %>styles.min.css']
				}
			},
			js: {
				files: {
					src: ['<%= path.js.dist %>scripts.min.js']
				}
			}
		},

		pug: {
			compile: {
				options: {
					pretty: true,
				},
				files: [{
					cwd: '<%= path.html.source %>',
					src: ['**/*.pug', "!_*/**/*.pug"],
					dest: '<%= path.html.dist %>',
					expand: true,
					ext: '.html'
				}]
			}
		},

		htmllint: {
		   all: '<%= path.html.dist %>' + 'index.html',
		},

		watch: {
			options: { livereload: true },
			css: {
				files: ['<%= path.css.source %>**/*.*',
					'! <%= path.css.source %>compiled.min.css'
				],
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

	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-html');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('html', ['pug', 'htmllint']);
	// grunt.registerTask('html', ['pug']);
	grunt.registerTask('css', ['postcss', 'concat:css', 'usebanner:css']);
	grunt.registerTask('js', ['uglify', 'concat:js', 'usebanner:js']);
	grunt.registerTask('default', ['html', 'css', 'js']);
};

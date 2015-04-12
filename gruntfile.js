/*!
 * Alejandro Cuba (http://www.alejandrocuba.com/)
 * (c) 2015 Alejandro Cuba Ruiz's website
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
					'<%= path.css.source %>compiled.min.css' : '<%= path.css.source %>alejandrocuba.less'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 30 versions', 'bb 10', 'android 3', 'ie 8', 'ie 9']
			},
			compiled: {
				src: '<%= path.css.source %>compiled.min.css',
				dest: '<%= path.css.source %>compiled.min.css'
			}
		},

		// uglify: {
		// 	options: {
					mangle: false,
		// 		preserveComments: 'some'
		// 	},
		// 	dist: {
		// 		files: {
		// 			'<%= path.js.source %>compiled.min.js': '<%= path.js.source %>base.js'
		// 		}
		// 	}
		// },

		concat : {
			css: {
				files: {
					'<%= path.css.dist %>alejandrocuba.min.css': [
						'<%= path.css.source %>vendor/bootstrap/bootstrap.min.css',
						'<%= path.css.source %>vendor/font-awesome/font-awesome.min.css',
						'<%= path.css.source %>compiled.min.css'
					]
				}
			},
			// js: {
			// 	files: {
			// 		'<%= path.js.dist %>alejandrocuba.min.js': [
			// 			'<%= path.js.source %>vendor/jquery.min.js',
			// 			'<%= path.js.source %>vendor/bootstrap.min.js',
			// 			'<%= path.js.source %>compiled.min.js'
			// 		]
			// 	}
			// }
		},

		uncss: {
			dist: {
				options: {
					ignoreSheets : [/fonts.googleapis/],
				},
				files: {
					'<%= path.css.dist %>alejandrocuba.min.css': ['<%= path.html.dist %>**/*.html']
				}
			}
		},

 		cssmin: {
 			dist: {
 				files: {
 					'<%= path.css.dist %>alejandrocuba.min.css' : '<%= path.css.dist %>alejandrocuba.min.css'
 				}
 			}
 		},

		usebanner: {
			options: {
				banner: '<%= banner %>'
			},
			css: {
				files: {
					src: [ '<%= path.css.dist %>alejandrocuba.min.css' ]
				}
			},
			// js: {
			// 	files: {
			// 		src: [ '<%= path.js.dist %>alejandrocuba.min.js' ]
			// 	}
			// }
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

 		htmllint: {
 			options: {
 				force: true,
 				maxerr: 50,
 				'id-class-style': false,
 				'attr-name-style': false,
 				'line-end-style': false,
 			},
 			src: ['<%= path.html.dist %>**/*.html']
 		},

 		bootlint: {
 			options: {
 				stoponerror: false,
 				relaxerror: ['W005']
 			},
 			files: ['<%= path.html.dist %>**/*.html']
 		},

		watch: {
			options: { livereload: true },
			css: {
				files: ['<%= path.css.source %>**/*.less'],
				tasks: ['css']
			},
			// js: {
			// 	files: ['<%= path.js.source %>**/*.js',
			// 			'! <%= path.js.source %>compiled.min.js'
			// 	],
			// 	tasks: ['js']
			// },
			html: {
				files: ['<%= path.html.source %>**/*.*'],
				tasks: ['html']
			}
		}
	});

	require('time-grunt')(grunt);

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-htmllint');
	grunt.loadNpmTasks('grunt-bootlint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('html', ['jekyll', 'htmllint', 'bootlint']);
	grunt.registerTask('css', ['less', 'autoprefixer', 'concat:css', 'uncss', 'cssmin', 'usebanner:css']);
	// grunt.registerTask('js', ['uglify', 'concat:js', 'usebanner:js']);
	grunt.registerTask('default', ['html', 'css']);
};
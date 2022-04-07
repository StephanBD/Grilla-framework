let mix = require('laravel-mix');


//-----------------------------------------------------//


//-----------------------------------------------------//

mix
	.sass(`dart_scss/main.scss`, `/css`)
	// .sass(`scss/doc.scss`, `documentation/css/main.css`)

	//-----------------------------------------------------//
	// .js(`javascript/app.js`, 'docs/js')
	// .js(`javascript/doc.js`, 'documentation/js/app.js')


	//-----------------------------------------------------//
	.sourceMaps(true, "source-map")
	//-----------------------------------------------------//
	.options({
		// extractVueStyles: false,
		processCssUrls: true,
		// terser: {},
		// purifyCss: false,
		// //purifyCss: {},
		// postCss: [require('autoprefixer')],
		// autoprefixer: { remove: false },
		clearConsole: false,
		// cssNano: { calc: false }
		// cssNano: {
		// 	discardComments: { removeAll: true },
		// }
	})
	//-----------------------------------------------------//
	.setPublicPath(`docs`)
// .disableNotifications()
// .version()


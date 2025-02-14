
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
	await imagemin(['src/images/*.{jpg,png}'], {
		destination: 'assets/images',
		plugins: [
			imageminWebp({quality: 50})
		]
	});

	console.log('Images optimized');
})();


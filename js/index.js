(function(){

	const btn = document.getElementById('js-play-video');
	btn.addEventListener('click', () => showYoutubePlayer() );


	const showYoutubePlayer = () => {
		const iframe = document.createElement('iframe');
		iframe.src = 'https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1&controls=0&fs=0&playsinline=1';
		iframe.width = '960';
		iframe.height = '540';
		iframe.allow = 'autoplay; encrypted-media; picture-in-picture;'
		iframe.frameBorder = 0;
		iframe.allowFullscreen = 1;

		document.querySelector('.features__thumb').replaceWith(iframe);
	}

})();
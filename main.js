require.config({
	paths: {
		jquery: 'jquery-1.10.2.min'
	}
});

require(['jquery'], function($) {
	alert($().jquery);
});
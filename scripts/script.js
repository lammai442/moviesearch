import {
	indexPageSetup,
	favouritePageSetup,
	searchPageSetup,
} from './pageSetups/pageSetups.js';

// Index-sidan
if (
	window.location.pathname === '/' ||
	window.location.pathname === '/index.html' ||
	window.location.pathname === '/moviesearch/' ||
	window.location.pathname === '/moviesearch/index.html'
) {
	console.log('index1');
	indexPageSetup();
}

// Favorites-sidan
else if (
	window.location.pathname === '/favorites.html' ||
	window.location.pathname === '/moviesearch/favorites.html'
) {
	console.log('favorites');

	favouritePageSetup();
}

// Search-sidan
else if (
	window.location.pathname === '/search.html' ||
	window.location.pathname === '/moviesearch/search.html'
) {
	console.log('search');

	searchPageSetup();
}

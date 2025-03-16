import {
	indexPageSetup,
	favouritePageSetup,
	searchPageSetup,
} from './pageSetups/pageSetups.js';
console.log('här');

// Index-sidan
if (
	window.location.pathname === '/' ||
	window.location.pathname === '/index.html'
) {
	indexPageSetup();
}

// Favorites-sidan
else if (window.location.pathname === '/favorites.html') {
	favouritePageSetup();
}

// Search-sidan
else if (window.location.pathname === '/search.html') {
	searchPageSetup();
}

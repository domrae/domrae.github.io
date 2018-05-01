'use strict';

SystemJS.config({
  baseURL: '/dist/js/',
  paths: {
     'cdnjs:': 'https://cdnjs.cloudflare.com/ajax/libs/',
     'modules:': 'modules/'
  },
  map: {
    'jquery': 'cdnjs:jquery/3.3.1/jquery.min.js',
    'jquery-lazyload' : 'cdnjs:jquery.lazyload/1.9.1/jquery.lazyload.min.js',
    'imagesloaded': 'cdnjs:jquery.imagesloaded/4.1.0/imagesloaded.pkgd.min.js',
  	'modernizr': 'cdnjs:modernizr/2.8.3/modernizr.min.js',
    'masonry': 'cdnjs:masonry/4.0.0/masonry.pkgd.min.js',
    'featherlight': 'cdnjs:featherlight/1.7.2/featherlight.min.js',
    'featherlight-gallery': 'cdnjs:featherlight/1.7.2/featherlight.gallery.min.js'
  },
  meta: {
    'jquery': { format: 'global'},
    'imagesloaded': { format: 'global'},
    'modernizr': { format: 'global'},
    'masonry': { format: 'global'},
    'featherlight': { format: 'global'},
    'jquery-lazyload': { format: 'global', deps: ['jquery']},
    'featherlight-gallery': { format: 'global', deps: ['featherlight']}
  }
});








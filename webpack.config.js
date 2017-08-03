let webpack = require('webpack');
let path = require('path');

module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './app.js',
    services: [
      './services/menuService.js',
      './services/ownerDataService.js',
      './services/projectsDataService.js'
    ],
    components: [
      './components/blog/blog.component.js',
      './components/top-bar/top-bar.component.js',
      './components/my-header/my-header.component.js',
      './components/slider/slider.component.js',
      './components/intro/intro.component.js',
      './components/my-footer/my-footer.component.js',
      './components/copyright/copyright.component.js',
      './components/quick-links/quick-links.component.js',
      './components/contact-form/contact-form.component.js',
      './components/tweets/tweets.component.js',
      './components/version/version.js',
      './components/version/version-directive.js',
      './components/version/interpolate-filter.js'
    ],
    directives: [
      './components/change-class/change-class.directive.js'
    ],
    views: [
      './view1/view1.js',
      './view2/view2.js',
      './views/home/home.view.js',
      './views/about/about.view.js',
      './views/skills/skills.view.js',
      './views/projects/projects.view.js',
      './views/contact/contact.view.js'
    ],
    vendor: ['angular', 'angular-route']
  },

  output: {
    path: __dirname + '/app/dist',
    filename: '[name].js'

  },

  module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'stage-0']
                 }
             },
            ]
          },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({name:'vendor', filename:'vendor.bundle.js'}),
  ]
};

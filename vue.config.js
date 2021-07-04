module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/fb-crawled-frontend/'
    : '/'
};

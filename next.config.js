module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      oneOf: [
        {
          resourceQuery: /external/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          }],
        },
        {
          use: ['@svgr/webpack'],
        },
      ],
    });

    return config;
  },
};

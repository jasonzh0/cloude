module.exports = {
    webpack: {
        configure: {
            resolve: {
                fallback: {
                    url: require.resolve("url/"),
                    querystring: require.resolve("querystring-es3"),
                },
            },
        },
    },
};

module.exports = {
    siteMetadata: {
        title: `my-personal-website`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [`gatsby-plugin-sass`, "gatsby-plugin-styled-components", "gatsby-plugin-image", {
        resolve: 'gatsby-plugin-manifest',
        options: {
            "icon": "src/images/icon.png"
        }
    }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    }]
};
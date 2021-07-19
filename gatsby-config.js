require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Gatsby Newsletter",
	},
	plugins: ["gatsby-plugin-postcss"],
};

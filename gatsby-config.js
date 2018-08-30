module.exports = {
  siteMetadata: {
    title: 'HoolaiGames',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
	  keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '5r4fbepoon57',
        accessToken: '8d95d5f687f02f47f34ffa7ec1ccf511e1f98df4ba20e9d8bd8b3ecd98c52135'
      }
    }
  ],
}

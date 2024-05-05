const withVideos = require('next-videos');

module.exports = {
  ...withVideos(),
  images: {
    remotePatterns :[
      {
      protocol: 'https',
      hostname: "images.pexels.com",
      pathname: '**',
    }
    ]
    
  },
  // other Next.js configurations can be added here


  
};

const config = {
    siteTitle: "John Ferguson", // Site title.
    siteTitleShort: "John Ferguson", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "John Ferguson's website", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://wwww.jferguson.info", // Domain of your website without pathPrefix.
    pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
    fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
    siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteFBAppID: "981973275521063", // FB Application ID for using app insights
    siteGATrackingID: "UA-155243212-1", // Tracking code ID for google analytics.
    disqusShortname: "https-johncferguson-website", // Disqus shortname.
    postDefaultCategoryID: "Tech", // Default category for posts.
    dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
    dateFormat: "DD/MM/YYYY", // Date format for display.
    userName: "JFerg", // Username to display in the author segment.
    userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Salt Lake City, UT", // User location to display in the author segment.
    userAvatar: "https://media.licdn.com/dms/image/C5603AQGkvP3CsZJnXw/profile-displayphoto-shrink_200_200/0?e=1583366400&v=beta&t=D2fHuioU1deMawUckfFkw-viQEyvamdkLLep0elFoPI", // User avatar to display in the author segment.
    userDescription:
      "My name is John Ferguson and I enjoy building software. Web applications, mobile applications, computer applications, you name it I enjoy it. When I'm not building software I enjoy snowboarding, playing video games, building computers, and of course, spending time with my family. I believe the key to staying focused at work is to be focused on other things while outside of work, so that you are able to return to the tasks when at the office with a fresh perspective.", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
      {
        label: "GitHub",
        url: "https://github.com/JohnCFerguson/",
        iconClassName: "fa fa-github"
      },
      {
        label: "Email",
        url: "mailto:johncferguson90@gmail.com",
        iconClassName: "fa fa-envelope"
      }
    ],
    copyright: "Copyright © 2019. John Ferguson" // Copyright string for the footer of the website and RSS feed.
  };

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;

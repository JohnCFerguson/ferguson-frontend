---
title: Issues I had setting up this website
date: 2020-01-12T20:57:58.412Z
cover: /assets/starter-logo-1024.png
slug: Gatsby Website Setup Issues
category: Web Development
tags:
  - web-setup web-deveopment
---
Hello!

I'm sure I may be the only one to ever read the posts here on this website, I am creating a blag to just kind of log things that I like, or things that I've found useful in my research while creating websites or other applications.

Today, I just want to document a few of the issues that I ran into while creating this website - either just because I didn't read the documentation well enough, or things that were just more difficult for me to find. But I feel like I have gotten a fairly good handle on it now, and I just want to document my progress.

So, getting this website set-up was a fairly easy process. One reason I have been drawn to Gatsby lately for my web dev needs is that it's just a super quick set up, and if you are already familiar with React componets, the learning curve is minute. I feed like grasping Gatsby was fairly straight forward for me, the components make sense, the linking is sensible, and the plugins make everything you need to do (like adding a [netlify cms](www.netlify.com) blog) super simple!

That being said, I still ran into a few issues along the way.

1. The biggest issue I had was trying to set up Disqus. The [Gatsby Material Starter](https://github.com/Vagr9K/gatsby-material-starter), as great as I have found that it is, does lack in a bit of documentation in this area. I have submitted a question for clarification to the author of the starter, but haven't received an answer as of the writing of this post. What I found to be the issue, and this may have come from a setup issue in Disqus on my part, as I was learning about using this while I was building this site, was that I would get an error saying "We were unable to load Disqus." this prevented any comments from being loaded in the blog post.

   * What I did to fix this:  I found that by removing the

     ```
     category_id={post.category_id}
     ```

       from the ReactDiscuqComments component:

     ```
     <ReactDisqusComments
         shortname={config.disqusShortname}
         identifier={post.title}
         title={post.title}
         url={url}
         category_id={post.category_id}
         onNewComment={this.notifyAboutComment}
     />
     ```

     the component was able to load, and I was able to see the comment boxes for each of my posts.
2. The second thing that I found the most troublesome was figuring out which redirect url to add to my github OAuth to allow accesss to the netflix cms editor. This one was kind of silly since, I was really just not reading well enough when I started it. But, I wanted to document it so that I hopefully never forget it again.

   Adding a redirect_url normally means what site is actually performing the redirect. In the case of this site, it was the netlify api that was trying to redirect to the admin page to allow editing of posts. By adding api.netlify.com/auth as the redirect url in the OAuth app in GitHub the site was allowed to perform the redirect and log in with GitHub.

I know these things are probably simple, but I like to document what I've run into issues with in order to hopefully not run into the same issue again.

If you have reas this, I appreciate you. Feel free to leave feedback.

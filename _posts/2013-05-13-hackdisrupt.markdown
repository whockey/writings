---
layout: post
title:  "#HackDisrupt"
date:   2013-05-13 08:30:00
display_date: Mid 2013
author: William Hockey
font: Something trendy
---

# How we Won the Techcrunch Disrupt Hackathon #

A couple weeks ago, our team won the Techcrunch Disrupt Hackathon with [Rambler](http://rambler.io/) - an application to help users map their spending habits. Rambler used the [Plaid API](http://plaid.io/) to connect with credit & debit accounts. It was the first hackathon for all of us - and we were lucky enough to walk away with top prize. 
<br />


### In the beginning... ###
There were a few things we did before the Hackathon that gave us a big leg up. One of the biggest advantages we had was that we've worked together before. William and Zach are the founders of [Plaid](http://plaid.io/) (the API we used to build our product) and Michael is a back-end engineer here. That meant breaking down the work was simple, and we could play to our strengths. The photo on the right was our friday night <s>party</s> wireframe session where we laid out what we were going to build and how. While we couldn't write any code beforehand, sketching out the app helped us figure out the UI and key functionality. We also spent an hour discussing some of the more challenging algorithms that the application would require. This let us start thinking through hardest problems while our brains were fresh and not yet sleep-deprived.

When we arrived the next morning, we tried to replicate our work environment as much as possible,. We were one of five teams to show up with external monitors and keyboards. We looked a bit ridiculous walking in, but having two screens and feeling at home made a massive difference. (Note: the setup also attracted a lot of press - we were interviewed/taped a few times just because we stood out with the monitors.)

 

### Building ###
Once we settled in, it was time to work. We each had our jobs that we'd discussed the night before. William built the data processing engine, Michael cranked on the geocoding and clustering algorithms, and Zach burned through the front-end and UI. Six hours in, and we were 80% finished with the core functionality. 

The app itself was built in Node.JS and Angular. We used the Plaid API (and node module) to connect with user credit cards, and relied extensively on a custom map view built with the Google Maps API. Once we finished the plumbing, we spent the bulk of our time working on a custom zoom algorithm to identify the highest-density spending locations and move the map accordingly. We also created a set of category filters to show the highest-frequency places for each user.

As the clock ticked past midnight, the hackathon field started to thin out - about 20% of the 1,100 hackers dropped out, and lots of others went to sleep for a few hours. Luckily, we were still on Pacific time and tend to work late. However, the hours from 3-6AM are tough for everyone - and this was when we were glad we had thought through the most complicated sections beforehand. 

It wasn't until 4AM that we hit our first major roadblock. We were originally planning to build a dynamically-zooming map that would pan and zoom into the area that transactions were occurring. Unfortunately, the smooth pan that google maps uses internally was not something that's available to the public - leaving us with a jerky, seizure-inducing experience. After a frustrated walk around midtown, Michael had the great idea of making a magnifying glass to zoom in on the hometown, and leaving the rest of the map static. A few quick UI changes later, and we were good to go - problem solved.

 

### Presentation ###

We wrapped up most of our development around 7AM on Sunday, and spent the next hour deploying to heroku, building an onboarding, and setting up a domain. We also threw a big 'play' button on the app for the demo, and checked to make sure we could get through everything in the 60 seconds we had to present. These little things made a huge difference - the number of presentations that wasted 20-30 seconds just signing in was astonishing. Also, having a live site matters - all the judges are sitting in the front row with their phones out. Why not give them a site to visit with a real demo? 

 

### "Celebration" ###

It was a huge surprise when we won - there were so many great projects built that day. When our name was called, we were actually pushing an update to deal with the traffic spike we saw after the presentation. The app itself was architected for just a few users, and crashed as soon as the first 20 signed up. We had just pushed an email submit holder as our name was called and about 500 people landed on our page. After the blur that was winning on stage, interviews, and collecting the award, we were straight back to coding trying to deal with the traffic. Amit, our wonderful advisor, and Zach's girlfriend took us out for beers afterwards - just to see us worried about capturing the traffic that we were getting. Luckily, we were able to stabilize things - and over the next few days we rearchitected the back-end to deal with more users. We're presenting on the main stage for disrupt today - and are hoping that what Rambler is ready!
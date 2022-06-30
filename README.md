# Full Stack Template 
Created a template to use as a jumpstart to a full stack app with HTML/CSS and JS on the front-end and Node.js, MongoDB on the back-end. Template is still a WORK IN PROGRESS 

**Link to project:** Left off until template is stable. 



## How It's Made:

**Tech used:** HTML, CSS, JavaScript, MongoDB and Node.js

I wanted to make a template so I could hit the ground running when creating new full-stack apps. This is a shell to include: 
- a public folder for client-side work (css/js)
- a views folder for `ejs`
- `.gitignore` for well, things to ignore
- `server.js` file with dependencies to populate `package.json`

## Issues 
- Turns out the H10 error I was getting was *NOT* the first error in the logs. I could not establish a connection to my database. After reviewing my whitelist and inputting IP/IP ranges I needed. I was able to connect and remain connected to the database!  

## Optimizations

- Utilized Heroku's config vars so I didn't have to upload my `.env` file to the site. 
- Practiced async function with try and catch on `.get` method within the server.js file.
- `Console.log()` connected to server to visualize connection to server.

## Lessons Learned:

- Install nodemon --dev was a lifesaver whenever I made changes to my server.js! 
- Heroku is picky, a space in your Procfile could cause your app to crash.

## Steps to set up a project: 
To be continued. 





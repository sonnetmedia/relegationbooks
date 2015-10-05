webhook-starter
===============
Barebones Webhook starter file to include grunt and bower components for Bourbon, Neat, and Bitters, plus normalize-scss, and a minimal print stylesheet.

Modeled from [webhook/webhook-theme-preprocessor](https://github.com/webhook/webhook-theme-preprocessor)



```$ wh -f [firebase_name] -s [server_ip] create [sitename]```


```$ cd [sitename]```


Update your .firebase.conf file


```$ npm install --save-dev grunt-sass html5shiv jquery node-bourbon node-neat node-sass normalize-opentype.css normalize.scss respond.js```


```$ wh -f [firebase_name] -s [server_ip] serve```


In your browser, load <http://localhost:2002/> and click on "Looking for the CMS?" and Choose "Start from a theme"


Find "Load remote theme" and add:  
<https://github.com/budparr/webhook-starter/archive/master.zip>

Step 7    
```$ cd sass && gem install bitters```

```$ bitters install```

Optional  
add static/cms.css to pages/cms.html


---

TODO: 
Refine content sections  
Refine theme initial layout (fork to a theme)
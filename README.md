
````
          \  |       |  |        |    
         |\/ | ____| __ |  |  |   _ \ 
        _|  _|      _| _| \_,_| _.__/ 

    --------------------------------------
````


M-Hub helps smooth the pathways to re-settlement.


M-Hub is a progect for the Techfugees hackathon in Melbourne 15->17/04/2016

Concepts:
-document consolidation
-something for nothing
-gap filling (employment,education,settlement)
-connecting
-food inter-access map/search/logistics
-volunteer/donation connect

-whitegoods recycling ... giveit + askeasy



Project structure/overview:
server.js - main server file to be run in cloud9 ide

client/ - main client application directory
client/views/index.ejs - main .html file using ejs framework ... main app container
client/partials/*.html - segements of each page of app, these are embedded in index.ejs and replace the <div ng-view></div> tag as each item is selected
client/js/controllers/* - contains each pages logic
client/js/app.js - angular app entry point ... mainly used for dep-injection



The M-Hub team is:
 - Ben Minerds
 - Laura D.
 - Umme Aeyman
 - Jeremy Leonard
 - Althaf Sheik




Tech stack:
 - JS
   - JQuery
   - Bootstrap
 - Node.js
   - Express
   - EJS
 - Mongo
 - on Cloud9: c9.io




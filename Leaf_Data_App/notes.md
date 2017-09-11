## Install Intsructions


1) 'npm install' in the Leaf_Data_App folder

2) 'bower_install' in the public folder

3) 'touch .env' in Leaf_Data_App folder, add API_KEY='your-api-key' 

4) add your endpoints to .env file: URI_CATALOG='https:/ ........ /catalog'

5) add your endpoints to .env file: URI_INFO='https:/ ........... /info'


6) 'node index.js' to start server running on localhost:3000



## Notes On Basic Leaf App

I knew about Curl requests prior to this assignment, but had never really used them before, as they were only mentioned in passing during a lecture in my boot camp.

So, the hardest part for me was figuring out how to make requests to the API.  I knew that starting off I could simply copy & Paste each request into my terminal, and that resulted in the information coming back.  

But after that I realized I only had experience with Node/Express requests (that didn’t use headers) and that I needed to somehow make a curl request from Node, or convert curl requests to node…  I found some NPM packages that would supposedly allow me to write Curl requests straight into my App, but they had no instructions, and I couldn’t get any of them to work.  After some more googling I found this website…

https://curl.trillworks.com/#node

Which allows you to convert curl requests to node, and I finally got my calls to work.

The next challenge was getting the information out of the JSON that I received from the API.  It was tricky and took some time figuring out the dot notation I needed to access the info that was nested inside of the Arrays / Objects.  And the fact that the info from the ‘/info’ endpoint was an object and not an array, threw me off for the longest time...

I used Express, Node.js, AngularJs and Bootstrap to make my page, and to display the Info.  And spent Minimal time styling it as I spent the bulk of my time,  > 4 hrs getting the information from the API to my App.

Overall, It was a fun project, and If I had to do it again I think I would try to get an NPM package working that allows me to insert curl request directly into Node apps -- Which would allow me to to test requests from my command line, and then simply plug them into my app.

It took me about 7 hrs total to complete.


Also, Thinking about the curl requests like this helped me convert them to Node

curl -k 
-H 'x-mjf-organization-id: 9' 
-H "Content-Type: application/json" 
-H 'x-mjf-api-key: secret'  
https://secret/info

curl -k 
-H 'x-mjf-organization-id: 9' 
-H "Content-Type: application/json" 
-H 'x-mjf-api-key: secret' 
https://secret/catalog
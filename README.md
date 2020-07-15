# LoadSheet
###### Fetch data in a public web google sheet
All you need to do is select your sheet that you want to load in javascript, then go to File -> Publish to the web -> Publish.
![alt text](https://i.imgur.com/7blz5wS.png)

After publishing, copy the link and paste it on the code.
```javascript
LoadSheet("--YOUR PUBLIC WEB SHEET LINK HERE--").then(sheet => {
    console.log(sheet);
});
```
Your sheet will load as a JSON object where sheet["--Tab Name--"]["--Row Number--"]["--Column Number--"].

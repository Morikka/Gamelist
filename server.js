const express = require('express');
const { Client } = require('@notionhq/client');
const {DatabaseID, TOKEN} = require('./secret');
const cors = require('cors');
const path = require('path');
const app = express();

// Initializing a client
const notion = new Client({
  auth: TOKEN
});

async function getPageData(){
    const myPage = await notion.databases.query({
        database_id: DatabaseID
      });
    let results = [];
    let tmpItem, tmp;
    for(item in myPage["results"]){
        tmpItem = {};
        tmp = myPage["results"][item]["properties"];
        console.log(tmp);
        tmpItem["Name"] = tmp["Name"]["title"][0]["plain_text"];
        tmpItem["TranslatedName"] = tmp["TranslatedName"]["rich_text"][0] ? tmp["TranslatedName"]["rich_text"][0]["plain_text"]: "";
        tmpItem["Platform"] = tmp["Platform"] ? tmp["Platform"]["select"]["name"]: "";
        tmpItem["Status"] =  tmp["Status"] ? tmp["Status"]["select"]["name"]:" ";
        tmpItem["Rank"] = tmp["Rank"] ? tmp["Rank"]["select"]["name"]:" ";
        tmpItem["Notes"] = tmp["Notes"]["rich_text"][0] ? tmp["Notes"]["rich_text"][0]["plain_text"] : "";
        results.push(tmpItem);
    }
    return results.reverse();
}

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/gameData', async function(req,res){
    const data = await getPageData();
    res.send({results: data});
});


app.listen(3001);
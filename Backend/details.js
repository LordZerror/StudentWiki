const mongoose = require("mongoose");

const db="mongodb+srv://StudentWiki:TSECMPR123@studentwiki.govwz.mongodb.net/StudentWiki?retryWrites=true&w=majority"
mongoose.connect(db).then(() =>{
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(`no connection`+ e);
})
    


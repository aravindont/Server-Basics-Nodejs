const express=require('express');

const app=express();
app.use((request, response) => {
    response.json({ message: "Response from server" });
});
module.exports=app;
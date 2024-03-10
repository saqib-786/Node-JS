const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send(`
    <h1>This is Contact Page</h1>
    `);
})

module.exports = router;
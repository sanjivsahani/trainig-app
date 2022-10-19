const express = require ("express")

const router = express.Router()

// api/v1/auth/getname

router.get('/getname',(req,res,next)=>{
    res.status(200).json({
        message:"hello api is working "
    })
})



module.exports = router;


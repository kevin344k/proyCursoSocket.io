module.exports=(req,res,next)=>{
  if (req.cookies.username) {
    next()
    console.log(req.cookies.username)
  }else{
    res.redirect("/register")
  }
} 
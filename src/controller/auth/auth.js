const jwt = require('jsonwebtoken');

const generateAccessToken=async(user)=>{
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '15m' });
    return token;

}
const generateRefreshToken=async(user)=>{
    const token = jwt.sign({ username: user.username }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
    return token;

}
const authenticateToken=async(req,res,next)=>{
    const token= req.headers["authorization"].split(" ")[1]
    if(!token){
        return res.status(401).json("Invalid token");
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });

}
module.exports = {
    generateAccessToken,
    generateRefreshToken,
    authenticateToken
};


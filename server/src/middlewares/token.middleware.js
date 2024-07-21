import jwt from "jsonwebtoken";
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token)
    return res.status(401).json({ success: false, message: err.message });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      return res.status(401).json({ success: false, message: err.message });

    req.user = decoded;
    console.log(decoded);
    next();
  });
};

export default verifyToken;

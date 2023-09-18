module.exports = function (req, res, next) {
  // Status code of 401 if Unauthorized
  if (!req.user) return res.status(401).json("Unauthorized");
  // if authorized
  next();
};

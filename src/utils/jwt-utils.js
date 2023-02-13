import jwt from "jsonwebtoken";
import environment from "../config/environment";

class JWTUtils {
  static generateAccessToken(payload, options = {}) {
    const { expiresIn = "1d" } = options;
    return jwt.sign(payload, environment.JwtAccessTokenSecret, { expiresIn });
  }
  static generateRefreshToken(payload) {
    return jwt.sign(payload, environment.jwtRefreshTokenSecret);
  }

  static verifyAccessToken(accessToken) {
    return jwt.verify(accessToken, environment.JwtAccessTokenSecret);
  }
  static verifyRefreshToken(refreshToken) {
    return jwt.verify(refreshToken, environment.jwtRefreshTokenSecret);
  }
}

export default JWTUtils;

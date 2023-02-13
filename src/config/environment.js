const environment = {
  port: parseInt(process.env.PORT) || 8080,
  nodeEnv: process.env.NODE_ENV || "production",
  saltRounds: parseInt(process.env.SALT_ROUNDS) || 10,
  JwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET ||
    "eaa4b15781f727b5062a8a640189e5cbd4cd513d489702f1d262cee2f497c221e87fe6c4f4329ef52a58a34ccdf20ae4ed2c6905d7399be7038798e02a15a0f8",
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET ||
    "4089f002e7f40c78bb4ab9a29a1f4a01d490adc77e7845bda138782e96c14f639922f80591d7f829dd9ab51b34ce09eba02618ec3f4d4011f9d64acb12282caf",
};

export default environment;

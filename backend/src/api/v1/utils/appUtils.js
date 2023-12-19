"use strict";

const getUserHome = () => {
  return process.env.HOME || process.env.HOMEPATH;
};

const getNodeEnv = () => {
  return process.env.NODE_ENV;
};

module.exports = {
  getUserHome,
  getNodeEnv,
};

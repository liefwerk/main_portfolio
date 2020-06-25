module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Full Stack Web Developer in Montevideo";
      return args;
    });
  }
};

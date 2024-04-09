module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel", { mode: "native" }], // Add this line
    ],
  };
};

module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        "paths": [{
          "name": "moment",
          "message": "Use date-fns instead."
        }]
      }
    ]
  }
};
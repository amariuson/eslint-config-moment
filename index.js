module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        "paths": [{
          "name": "moment",
          "message": "The date library moment is not allowed."
        }]
      }
    ]
  }
};
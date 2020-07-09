module.exports = [
  {
    method: 'GET',
    path: '/example',
    callback(req, res) {
      res
        .status(200)
        .send({
          example: 'OK'
        })
        .end();
    }
  }
];

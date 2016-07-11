module.exports.submit = ajaxify;

function ajaxify(URL, cbf) {
  var c = new XMLHttpRequest;
  c.open('GET', URL);
  c.onload = cbf;
  c.send()
};

function caller() {
  console.log(this.response);
};

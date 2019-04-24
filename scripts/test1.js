var svgContainer = document.getElementById('svgContainer');
var animItem = bodymovin.loadAnimation({
  wrapper: svgContainer,
  // renderer: 'svg',
  animType: 'svg',
  loop: true,
//   path:'datas/data.json'
  path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
});
var loremIpsum = require('lorem-ipsum');
var Posts = require('./posts');

for (var i = 0; i < 10; i++) {

  var testPost = new Posts({
    title: loremIpsum({
      count: Math.floor(Math.random() * 10 + 3),
      units: 'words'
    }),
    lede: loremIpsum({
      count: 3,
      units: 'sentences'
    }),
    image: "http://loremflickr.com/800/200",
    body: '<html><head></head><body><h1>' +
          loremIpsum({ count: Math.floor(Math.random() * 10) + 1, units: 'words'}) +
          '</h1>' +
          loremIpsum({ count: Math.floor(Math.random() * 10) + 1, units: 'sentences'}) +
          '{{additionalData}}</body></html>'
  });

  testPost.save(function (err, data) {
    console.log("saving!!!")
    if (err) {
      console.log(err);
    }
    else console.log('Saved ', data);
  });
}

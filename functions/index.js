const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const nuxt = new Nuxt({
   buildDir: 'ssr',
   dev: false
});

exports.ssr = functions.https.onRequest(async (req, res) => {
   await nuxt.ready()
   res.set('Cache-Control', 'public, max-age=600, s-maxage=600');
   return nuxt.render(req, res)
})
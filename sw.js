<<<<<<< HEAD
const CACHE ='JS_Class'
const FILES = ['/JS', '/CW#1 -- Browser tools/a.html', '/JS/classwork_part2.html', '/JS', '/JS/cw4.html','/JS/CW5-CAL%C4%B0SMA/work/EloquentJS.html','/JS/CW6-File.html','/JS/cw7/CW7.html','/JS/cw8.html','/JS/CW9.html']

function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)

function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  })
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  console.log('JS_Class', req.url);
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req).then(r1 => r1) })
  )
}
=======
const CACHE ='JS_Class'
const FILES = ['/JS', '/CW#1 -- Browser tools/a.html', '/JS/classwork_part2.html', '/JS', '/JS/cw4.html','/JS/CW5-CAL%C4%B0SMA/work/EloquentJS.html','/JS/CW6-File.html','/JS/cw7/CW7.html','/JS/cw8.html','/JS/CW9.html']

function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)

function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  })
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  console.log('JS_Class', req.url);
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req).then(r1 => r1) })
  )
}
>>>>>>> 6ee5ca1ca57818881dac239634af269e97776300
self.addEventListener('fetch', fetchCB)
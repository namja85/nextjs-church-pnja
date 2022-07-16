const _2221 = require('../posts/bulletins/_2221');
const _2222 = require('../posts/bulletins/_2222');
const _2223 = require('../posts/bulletins/_2223');
const _2224 = require('../posts/bulletins/_2224');
const _2225 = require('../posts/bulletins/_2225');
const _2226 = require('../posts/bulletins/_2226');
const _2227 = require('../posts/bulletins/_2227');
const _2228 = require('../posts/bulletins/_2228');
const _2229 = require('../posts/bulletins/_2229');

const bulletins = [
  { id: '2221', content: _2221 },
  { id: '2222', content: _2222 },
  { id: '2223', content: _2223 },
  { id: '2224', content: _2224 },
  { id: '2225', content: _2225 },
  { id: '2226', content: _2226 },
  { id: '2227', content: _2227 },
  { id: '2228', content: _2228 },
  { id: '2229', content: _2229 },
];

export function getBulletins() {
  const serializedBulletins = bulletins.map(({ id, content }) => ({
    id,
    content: JSON.stringify(content),
  }));

  serializedBulletins.sort(({ id: a }, { id: b }) => b - a);
  return serializedBulletins;
}

export function getBulletinIds() {
  const bulletinIds = bulletins.map(({ id }) => id);

  return bulletinIds;
}

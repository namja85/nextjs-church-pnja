const _2221 = require('../posts/bulletins/_2221');
const _2222 = require('../posts/bulletins/_2222');
const _2223 = require('../posts/bulletins/_2223');
const _2224 = require('../posts/bulletins/_2224');
const _2225 = require('../posts/bulletins/_2225');
const _2226 = require('../posts/bulletins/_2226');
const _2227 = require('../posts/bulletins/_2227');
const _2228 = require('../posts/bulletins/_2228');
const _2229 = require('../posts/bulletins/_2229');
const _2230 = require('../posts/bulletins/_2230');
const _2231 = require('../posts/bulletins/_2231');
const _2232 = require('../posts/bulletins/_2232');
const _2233 = require('../posts/bulletins/_2233');
const _2234 = require('../posts/bulletins/_2234');

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
  { id: '2230', content: _2230 },
  { id: '2231', content: _2231 },
  { id: '2232', content: _2232 },
  { id: '2233', content: _2233 },
  { id: '2234', content: _2234 },
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

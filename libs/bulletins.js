import bulletins from '../posts/bulletins';

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

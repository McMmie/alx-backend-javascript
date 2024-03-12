export default function getListStudentIds(array) {
  const ids = [];
  const map = new Map();

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      map.set(i, array[i].id);
      ids.push(map.get(i));
    }
  }
  return ids;
}

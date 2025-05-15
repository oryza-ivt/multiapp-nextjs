// Simple in-memory key-value store
export type Transaction = { key: string; value: string };

let store: Transaction[] = [
  { key: 'trf-001', value: 'Transfer to A' },
  { key: 'gen-001', value: 'General payment A' },
  { key: 'trf-002', value: 'Transfer to B' },
  { key: 'gen-002', value: 'General payment B' },
  { key: 'gen-003', value: 'General payment C' },
];

export function getAll(prefix?: string) {
  return prefix ? store.filter(item => item.key.startsWith(prefix)) : store;
}

export function getOne(id: string) {
  return store.find(item => item.key === id);
}

export function create(item: Transaction) {
  store.push(item);
}

export function update(id: string, value: string) {
  const item = store.find(i => i.key === id);
  if (item) item.value = value;
}

export function remove(id: string) {
  store = store.filter(i => i.key !== id);
}

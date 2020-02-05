import LRU, { Options } from 'lru-cache'

export default function cache<K, V>(options?: Options<K, V>) {
  return new LRU(options)
}

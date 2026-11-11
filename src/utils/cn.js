/**
 * Une clases condicionales ignorando valores falsy.
 * cn('a', cond && 'b', undefined) -> 'a b'
 */
export default function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

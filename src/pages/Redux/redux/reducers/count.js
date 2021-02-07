const initValue = 0
export default function count(preValue = initValue, action) {
  const { type, value } = action
  switch (type) {
    case 'increment':
      return preValue + value
    case 'decrement':
      return preValue - value
    default:
      return preValue
  }
}
const normalizeName = (str: string) => {
  const separateWords = str.split('-')
  const capitalLetter = separateWords.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
  return capitalLetter.join(' ')
}

export default normalizeName

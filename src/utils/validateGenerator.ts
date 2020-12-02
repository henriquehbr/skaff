import fs from 'fs'

const validateGenerator = (generatorName: string) => {
  const generatorExists = fs.existsSync(generatorName)
  if (generatorExists) return true
  throw new Error('The specified generator could not be found')
}

export { validateGenerator }

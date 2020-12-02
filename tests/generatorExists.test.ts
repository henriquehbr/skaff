import path from 'path'
import { validateGenerator } from '@type-node/utils'

test('generator exists', async () => {
  const generatorPath = path.resolve(process.cwd(), 'generator-prototype')
  const generatorExists = validateGenerator(generatorPath)
  expect(generatorExists).toBeTruthy()
})

test('generator do not exist', async () => {
  const generatorPath = path.resolve(process.cwd(), 'generator-proto')
  const generatorExists = () => validateGenerator(generatorPath)
  expect(generatorExists).toThrowError('The specified generator could not be found')
})

import path from 'path'
import { validateGenerator } from '@type-node/utils'

describe('Generator', () => {
  const fixtures = (...fixturesPath: string[]) =>
    path.resolve(__dirname, 'fixtures', ...fixturesPath)
  test('generator directory exists', () => {
    const generatorPath = fixtures('generator-module')
    const generatorExists = validateGenerator(generatorPath)
    expect(generatorExists).toBeTruthy()
  })

  test('generator directory do not exist', () => {
    const generatorPath = fixtures('generator-dir')
    const generatorExists = () => validateGenerator(generatorPath)
    expect(generatorExists).toThrowError('The specified generator could not be found')
  })

  test('generator.js config exists', () => {
    const generatorConfigPath = fixtures('generator-module', 'generator.js')
    const generatorExists = validateGenerator(generatorConfigPath)
    expect(generatorExists).toBeTruthy()
  })

  test('generator.js config do not exist', () => {
    const generatorConfigPath = fixtures('empty-generator-module', 'generator.js')
    const generatorExists = () => validateGenerator(generatorConfigPath)
    expect(generatorExists).toThrowError('The specified generator could not be found')
  })
})

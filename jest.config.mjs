import tsJestUtils from 'ts-jest/utils/index.js'
import tsconfig from './tsconfig.json'

const { pathsToModuleNameMapper } = tsJestUtils
const { compilerOptions } = tsconfig

const config = {
  preset: 'ts-jest',
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
}

export default config

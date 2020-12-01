import tsJestUtils from 'ts-jest/utils/index.js'
import tsconfig from './tsconfig.json'

const { pathsToModuleNameMapper } = tsJestUtils
const { compilerOptions } = tsconfig

export default {
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
}

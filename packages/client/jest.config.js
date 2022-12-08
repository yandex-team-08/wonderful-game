import dotenv from 'dotenv'

dotenv.config()

export default {
  moduleNameMapper: {
    '.*\\.scss$': '<rootDir>/scssStub.js',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  globals: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
}

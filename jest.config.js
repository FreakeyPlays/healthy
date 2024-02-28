module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/'
  ],
  collectCoverageFrom: ['src/app/**/*.component.{ts,js}', '!src/**/*.d.ts'],
  coverageReporters: ['lcov', 'text'],
  coveragePathIgnorePatterns: ['/jest-config/', '/node_modules/'],
  coverageDirectory: '<rootDir>/coverage/unit/',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};

// jest.config.js
module.exports = {
  // The test environment that will be used for testing
  testEnvironment: 'node',
  
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/tests/**/*.test.js'],
  
  // Indica a Jest que ignore ciertos directorios
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  
  // Un mapeo de expresiones regulares a transformadores
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  
  // Indica a Jest que trate estos archivos como módulos ES
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  
  // Módulos a cargar automáticamente antes de los tests
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],
  
  // Archivos a ignorar para la cobertura de código
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/tests/',
  ],
  
  // Indica a Jest que considere estos directorios para la resolución de módulos
  moduleDirectories: ['node_modules', '<rootDir>'],
  
  // Mapeos de rutas para importar módulos
  moduleNameMapper: {
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '^@/tests/(.*)$': '<rootDir>/tests/$1',
  },
};

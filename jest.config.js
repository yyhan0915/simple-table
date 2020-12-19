// jest.config.js
module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
    },
    watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
};
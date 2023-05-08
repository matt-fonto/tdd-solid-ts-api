Sure! Here are the steps to set up Jest with Node.js and TypeScript:

1. Install Jest and TypeScript:

```bash
npm install --save-dev jest ts-jest @types/jest typescript
```

2. Create a Jest configuration file:
   Create a jest.config.js file at the root of your project, with the following contents:

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```

This configuration file tells Jest to use the ts-jest preset for handling TypeScript files, and to use the Node.js test environment.

3. Create a TypeScript configuration file:
   Create a tsconfig.json file at the root of your project, with the following contents:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true,
    "moduleResolution": "node",
    "sourceMap": true
  }
}
```

This TypeScript configuration file sets the target to ES6, the module system to CommonJS, and enables strict mode.

4. Create a sample test file:
   Create a sample.test.ts file in a **tests** directory, with the following contents:

```typescript
describe("sample test", () => {
  it("should pass", () => {
    expect(1 + 2).toBe(3);
  });
});
```

This is a basic test that checks that 1 + 2 equals 3.

5. Update the package.json file:
   Update the test script in your package.json file to run Jest:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Run the tests:
Run the tests with the following command:

```bash
npm test
```

This should run your test and output the results in the console.

That's it! You should now have a basic Jest setup with Node.js and TypeScript. You can add more tests to the **tests** directory and run them with npm test.

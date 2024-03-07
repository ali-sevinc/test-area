import Hello from "./components/Hello";
import Posts from "./components/Posts";

export default function Testing() {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-stone-700 text-center text-stone-50">
      <h1 className="py-4 text-2xl">Testing React Components.</h1>

      <Hello />
      <Posts />
    </div>
  );
}

/*
npm install --save-dev jest @types/jest ts-jest
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev identity-obj-proxy



// jest.config.ts
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  moduleNameMapper: {
  '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
},
};



// package.json
 "test": "jest"

*/

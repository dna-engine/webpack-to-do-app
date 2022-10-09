// Mocha Specification Suite

// Imports
import { assertDeepStrictEqual } from 'assert-deep-strict-equal';
import fs from 'fs';

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('The "dist" folder', () => {

   it('contains the correct files', () => {
      const actual =   fs.readdirSync('dist').sort();
      const expected = ['bundle.js', 'index.html'];
      assertDeepStrictEqual(actual, expected);
      });

   });

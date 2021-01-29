import React from 'react';
import {describe, it, jest} from '@jest/globals';
import {isAbsolutePath} from "../../../src/hooks/dependencies/URL";


describe("URL dependency test", () => {
    it('detects is an url is absolute', () => {
        expect(isAbsolutePath("http://test.com")).toBe(true);
        expect(isAbsolutePath("https://test.com")).toBe(true);
        expect(isAbsolutePath("test.com/aa")).toBe(false);
        expect(isAbsolutePath("/")).toBe(false);
        expect(isAbsolutePath("")).toBe(false);
    })
})
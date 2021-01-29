import React from 'react';
import {describe, it, jest} from '@jest/globals';
import useIsCurrentPage from "../../src/hooks/use-is-current-page";
import {URLFactory as URL, isAbsolutePath} from "../../src/hooks/dependencies/URL";

jest.mock('../../src/hooks/dependencies/URL');

const gatsbyLocationStub = {
    pathname: "",
    hostname: "test.local"
}

describe("isCurrentPage test", () => {
    it('detects the home page as active', () => {
        const testingPaths = ["", "/"];
        testingPaths.forEach((pathInContext) => {
            testingPaths.forEach( path => {
                gatsbyLocationStub.pathname = path;
                expect(useIsCurrentPage("", gatsbyLocationStub)).toBe(true);
                expect(useIsCurrentPage("/", gatsbyLocationStub)).toBe(true);
            })
        })
    })
    it('detects a page as active', () => {
        const testingPaths = ["test", "test/"];
        testingPaths.forEach((pathInContext) => {
            testingPaths.forEach( path => {
                gatsbyLocationStub.pathname = path;
                expect(useIsCurrentPage("test", gatsbyLocationStub)).toBe(true);
                expect(useIsCurrentPage("test/", gatsbyLocationStub)).toBe(true);
            })
        })
    })
    it('absolute urls never are active', () => {
        const testingPaths = ["test", "test/"];
        testingPaths.forEach((pathInContext) => {
            testingPaths.forEach( path => {
                gatsbyLocationStub.pathname = "http://test.com" + path;
                expect(useIsCurrentPage("test", gatsbyLocationStub)).toBe(false);
                expect(useIsCurrentPage("test/", gatsbyLocationStub)).toBe(false);
            })
        })
    })
})
export function isAbsolutePath (path) {
    const pattern = /^[a-zA-Z][a-zA-Z\d+\-.]*:/gi;
    return (pattern.test(path));
}

export function URLFactory(path, base) {
    return new URL(path, base)
}
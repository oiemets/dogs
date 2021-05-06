export const ensureLeadingSlash = (path: string) => 
    path[path.length - 1] === '/' ? path : `${path}/`;
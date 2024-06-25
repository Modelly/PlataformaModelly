export const getBasePath = (pathname) => {
    if (pathname.startsWith('/consumidor')) {
        return '/consumidor';
    } else if (pathname.startsWith('/artesao')) {
        return '/artesao';
    } else {
        return '';
    }
};

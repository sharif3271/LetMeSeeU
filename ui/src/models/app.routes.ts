const CONVERSATION_PATH_NAME = 'connection';

export const AppRoutes = {
    root: '/',
    userEntry: '/user-entry',
    greeting: '/greeting',
    connection: `/${CONVERSATION_PATH_NAME}/:id`,
};


// Helpers
export const getPathConnection = (connectionId: string) => `/${CONVERSATION_PATH_NAME}/${connectionId}`;
export const isInConnectionPath = (pathName: string) => pathName.startsWith(`/${CONVERSATION_PATH_NAME}`);
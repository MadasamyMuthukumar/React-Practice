import React from 'react';
const ContextComp = React.createContext()
export const sharedContext =React.createContext()
const UserProvider = ContextComp.Provider
const UserConsumer = ContextComp.Consumer

export { UserProvider , UserConsumer }
export default ContextComp
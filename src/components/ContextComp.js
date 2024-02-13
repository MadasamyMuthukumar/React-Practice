import React from 'react';
const ContextComp = React.createContext()

const UserProvider = ContextComp.Provider
const UserConsumer = ContextComp.Consumer

export { UserProvider , UserConsumer }
export default ContextComp
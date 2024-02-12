import React from 'react';
const ContextComp = React.createContext()

const userProvider = ContextComp.Provider
const userConsumer = ContextComp.Consumer

export { userProvider , userConsumer }
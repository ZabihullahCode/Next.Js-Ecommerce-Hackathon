'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

const Providers = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    let persister = persistStore(store)
  return (
    <div>
      <Provider store={store}>
       <PersistGate persistor={persister}>{children}</PersistGate> 
        </Provider>
    </div>
  )
}

export default Providers

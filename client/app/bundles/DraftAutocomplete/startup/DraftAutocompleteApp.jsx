import React from 'react'
import { Provider } from 'react-redux'

import DraftAutocompletePage from '../components/DraftAutocompletePage'
import applicationStore from '../store/applicationStore'


export default function DraftAutocompleteApp(props, railsContext) {
  const store = applicationStore()

  return (
    <Provider store={store}>
      <DraftAutocompletePage />
    </Provider>
  )
}

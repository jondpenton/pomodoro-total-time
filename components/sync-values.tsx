import { useFormikContext } from 'formik'
import React from 'react'
import { Values } from '../pages'
import * as R from 'ramda'

function SyncValues({ name = 'values' }) {
  const { values } = useFormikContext<Values>()

  React.useEffect(() => {
    try {
      const entry = localStorage.getItem(name)

      if (!entry) {
        throw new Error(`No entry for '${name}' exists`)
      }

      const localValues = JSON.parse(entry)
      const valuesAreEqual = R.equals(localValues, values)

      if (!valuesAreEqual) {
        throw new Error('Values have changed')
      }

      return
    } catch (err) {
      console.debug(err.message)

      localStorage.setItem(name, JSON.stringify(values))
      console.debug('Saved values to localStorage', values)
    }
  }, [values, name])

  return null
}

export { SyncValues }

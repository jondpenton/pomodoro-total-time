import { Field, FieldAttributes } from 'formik'

export function Input({ label, description, name, type, ...rest }: any) {
  const fieldProps: FieldAttributes<any> = {
    className:
      'focus:outline-none focus:border-indigo-500 focus:border-4 focus:shadow-focus appearance-none block w-full bg-cool-gray-700 border-cool-gray-500 border rounded-md px-3 py-2 text-lg leading-normal sm:text-sm sm:leading-5 text-cool-gray-300',
    name,
    type,
  }

  if (type === 'number') {
    fieldProps['inputMode'] = 'decimal'
    fieldProps.type = undefined
  }

  return (
    <>
      <div className="flex justify-between">
        <label
          className="block text-sm font-medium leading-5 text-cool-gray-300"
          htmlFor={name}
        >
          {label}
        </label>
        {description && (
          <span className="text-sm leading-5 text-cool-gray-400">
            {description}
          </span>
        )}
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <Field {...fieldProps} {...rest} />
      </div>
    </>
  )
}

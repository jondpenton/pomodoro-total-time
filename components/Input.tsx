import { Field } from 'formik'

export function Input({ label, description, name, ...rest }: any) {
  return (
    <>
      <div className="flex justify-between">
        <label
          className="block text-sm font-medium leading-5 text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
        {description && (
          <span className="text-sm leading-5 text-gray-500">{description}</span>
        )}
      </div>
      <div className="mt-1 relative rounded-md shadow-sm">
        <Field
          className="form-input block w-full sm:text-sm sm:leading-5"
          name={name}
          {...rest}
        />
      </div>
    </>
  )
}

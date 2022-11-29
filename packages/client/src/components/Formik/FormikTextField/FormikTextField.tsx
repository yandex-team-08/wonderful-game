import { TextField } from '@mui/material'
import { useFormikContext } from 'formik'
import { BaseSyntheticEvent, FC, useCallback } from 'react'
import { TextFieldProps } from '@mui/material/TextField/TextField'

type TFormikTextFieldRequiredProps = { name: string; label: string }

type TFormikTextFieldProps = TextFieldProps & TFormikTextFieldRequiredProps

const FormikTextField: FC<TFormikTextFieldProps> = ({
  name,
  label,
  helperText,
  ...props
}) => {
  const { values, setFieldValue, errors } = useFormikContext()

  const inputValue = (values as Record<string, never>)[name]
  const error = (errors as Record<string, never>)[name]

  const handleChange = useCallback((event: BaseSyntheticEvent) => {
    setFieldValue(name, event.target.value)
  }, [])

  return (
    <TextField
      error={!!error}
      {...props}
      sx={{ mb: 1 }}
      id={name}
      label={label}
      value={inputValue}
      variant="outlined"
      helperText={error ?? helperText}
      onChange={handleChange}
    />
  )
}

export default FormikTextField

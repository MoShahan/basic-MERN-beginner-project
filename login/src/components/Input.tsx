type InputProps = {
  value: string
  setValue: any
  type: string
  label: string
  id: string
}

const Input = ({ id, value, setValue, type, label }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default Input

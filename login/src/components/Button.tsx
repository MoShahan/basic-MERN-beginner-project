type ButtonProps = { name: string; onClick: any }

const Button = ({ name, onClick }: ButtonProps) => {
  return <button className="btn" onClick={onClick}>{name}</button>
}

export default Button

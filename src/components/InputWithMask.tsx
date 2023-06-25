import ReactInputMask, { Props } from "react-input-mask";

export default function InputWithMask(props: Props) {
  const { mask, disabled, value, onChange, placeholder, ...rest } = props;

  return (
    <ReactInputMask mask={mask} disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} {...rest}>
    </ReactInputMask>
  );
}


import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { CSSProperties } from 'react';
import { InputLabelProps } from "@material-ui/core/InputLabel";
import { SelectProps } from "@material-ui/core/Select";

interface Props {
	name: string;
	label?: string;
	onChange: (field: string, value: string) => void;
	value?: string;
	disabled?: boolean;
	error?: string;
	select?: boolean;
	type?: string;
	autoFocus?: boolean;
	fullWidth?: boolean;
	defaultValue?: string;
	onBlur?: (field: string, value) => void;
	className?: string | undefined;
	style?: CSSProperties;
	placeholder?: string;
	InputLabelProps?: InputLabelProps;
	InputProps?: any;
	SelectProps?: Partial<SelectProps>;
	variant?: any
	required?: boolean;
}

const handleBlur = (field: string, onBlur) => e => {
	if (onBlur) {
		onBlur(field, e.target.value);
	}
};
const TextFieldMuiInner: React.FC<Props> = (props) => {
	const {
		name, select, InputLabelProps, InputProps, SelectProps, variant, style,
		fullWidth, disabled, label, onChange, defaultValue, value, required,
		error, type, onBlur, className, placeholder
	} = props;

	const handleOnChange = (event) => {
		onChange(name, event.target.value)
	}

	return (
		<TextField
			label={label}
			InputProps={InputProps}
			SelectProps={SelectProps}
			inputProps={
				{
					// eslint-disable-next-line
					['data-testid']: 'mui-textfield'
				}
			}
			margin="normal"
			style={style}
			value={value}
			select={select}
			required={required}
			fullWidth={fullWidth}
			autoFocus={props.autoFocus}
			name={name}
			disabled={disabled}
			placeholder={placeholder}
			type={type}
			defaultValue={defaultValue}
			className={className}
			onChange={handleOnChange}
			onBlur={handleBlur(name, onBlur)}
			error={Boolean(error)}
			helperText={error}
			variant={variant ? variant : "standard"}
			InputLabelProps={InputLabelProps}
		>
		</TextField>
	)
}

TextFieldMuiInner.defaultProps = {
	type: 'text',
}

export const TextFieldMui = React.memo(TextFieldMuiInner, propsAreEqual);

function propsAreEqual(prevProps: Props, nextProps: Props) {
	return (
		prevProps.value === nextProps.value &&
		prevProps.error === nextProps.error &&
		prevProps.required === nextProps.required &&
		prevProps.disabled === nextProps.disabled);
}

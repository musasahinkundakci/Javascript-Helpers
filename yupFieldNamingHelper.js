import * as yup from 'yup';

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required()
});

const convertCamelCaseToSnakeCase = (string) => {
	return string.replace(/[A-Z]/g, (letter) => `_${letter.toUpperCase()}`);
};
const convertArrayToEnum = (array) => {
	return array.reduce((acc, item) => {
		acc[convertCamelCaseToSnakeCase(item)] = item;
		return acc;
	}, {});
};

const FORM_FIELD_TYPES = convertArrayToEnum(schema._nodes);

const App = () => {
	return (
		<form>
			<input name={FORM_FIELD_TYPES.name} />;
			<input name={FORM_FIELD_TYPES.email} />;
		</form>
	);
};
export default App;

import * as yup from "yup";

export const config = yup.object().shape({
	name: yup.string().required(),
	dateOfBirth: yup.string().required(),
	eyescolor: yup.string().required(),
	headcolor: yup.string().required(),
	house: yup.string().required(),
	photography: yup.mixed().test("type", "Work work...", (value) => {
		return value.length === 1;
	}),
	gender: yup.string().required(),
	position: yup.string().required(),
	favorite: yup.bool(),
});

export const defaultValues = {
	name: "",
	gender: "",
	favorite: false,
};
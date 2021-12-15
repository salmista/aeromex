import { API_URL } from "../../config";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { config, defaultValues } from "./config";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import LinearProgress from "@mui/material/LinearProgress";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

function getBase64Image(file) {
	// Always return a Promise
	return new Promise((resolve, reject) => {
		let content = "";
		const reader = new FileReader();
		// Wait till complete
		reader.onloadend = function (e) {
			content = e.target.result;
			const result = content;
			resolve(result);
		};
		// Make sure to handle error states
		reader.onerror = function (e) {
			reject(e);
		};
		reader.readAsDataURL(file);
	});
}

const Form = ({ setCatalog, open, onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isSubmitSuccessful, isSubmitError },
		control,
		reset,
	} = useForm({
		resolver: yupResolver(config),
		defaultValues,
	});

	const onSubmit = async (data) => {
		let { photography, ...rest } = data;
		let newPhotography = await getBase64Image(photography[0]);

		await setCatalog(
			`${API_URL}/personajes`,
			{ photography: newPhotography, ...rest },
			onClose
		);
	};

	return (
		<div className="modal">
			<h3>Agrega un personaje</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<InputLabel htmlFor="name">
					<small>NOMBRE</small>
				</InputLabel>
				<TextField
					id="name"
					name="name"
					variant="filled"
					size="small"
					fullWidth
					{...register("name")}
				/>
				<p />
				<InputLabel htmlFor="dateOfBirth">
					<small>CUMPLEAÑOS</small>
				</InputLabel>
				<TextField
					type="date"
					id="dateOfBirth"
					name="dateOfBirth"
					variant="filled"
					size="small"
					{...register("dateOfBirth")}
					fullWidth
				/>
				<p />
				<InputLabel htmlFor="eyescolor">
					<small>COLOR DE OJOS</small>
				</InputLabel>
				<TextField
					type="color"
					id="eyescolor"
					name="eyescolor"
					// variant="filled"
					size="small"
					{...register("eyescolor")}
					fullWidth
				/>
				<p />
				<InputLabel htmlFor="headcolor">
					<small>COLOR DE PELO</small>
				</InputLabel>
				<TextField
					type="color"
					id="headcolor"
					name="headcolor"
					// variant="filled"
					size="small"
					{...register("headcolor")}
					fullWidth
				/>
				<p />
				<InputLabel htmlFor="photography">
					<small>FOTOGRAFÍA</small>
				</InputLabel>
				<TextField
					type="file"
					id="photography"
					name="photography"
					{...register("photography")}
					fullWidth
				/>
				<p />

				<InputLabel htmlFor="house">
					<small>CASA</small>
				</InputLabel>
				{/*<TextField
					type="color"
					id="house"
					name="house"
					// variant="filled"
					size="small"
					{...register("house")}
					fullWidth
				/>*/}

				<Controller
					rules={{ required: true }}
					control={control}
					name="house"
					render={({ field }) => (
						<Select {...field} fullWidth>
							<MenuItem value="1"> {/*135deg, #FF0000 0%, #FED482 100%*/}
								Gryffindor
							</MenuItem>
							<MenuItem value="2">
								Hufflepuff
							</MenuItem>
							<MenuItem value="3">
								Ravenclaw
							</MenuItem>
							<MenuItem value="4">
								Slytherin
							</MenuItem>
						</Select>
					)}
				/>

				<p />
				<FormControl component="fieldset">
					<FormLabel component="legend">
						<small>GÉNERO</small>
					</FormLabel>
					<Controller
						rules={{ required: true }}
						control={control}
						name="gender"
						render={({ field }) => (
							<RadioGroup {...field}>
								<FormControlLabel
									value="female"
									control={<Radio />}
									label="Female"
								/>
								<FormControlLabel
									value="male"
									control={<Radio />}
									label="Male"
								/>
							</RadioGroup>
						)}
					/>
				</FormControl>
				<FormControl component="fieldset">
					<FormLabel component="legend">
						<small>POSICIÓN</small>
					</FormLabel>
					<Controller
						rules={{ required: true }}
						control={control}
						name="position"
						render={({ field }) => (
							<RadioGroup {...field}>
								<FormControlLabel
									value="student"
									control={<Radio />}
									label="Estudiante"
								/>
								<FormControlLabel
									value="teacher"
									control={<Radio />}
									label="Profesor"
								/>
							</RadioGroup>
						)}
					/>
				</FormControl>
				<p />
				<Button type="submit" variant="contained" color="inherit">
					Crear
				</Button>
				{isSubmitting && (
					<>
						<p />
						<LinearProgress />
					</>
				)}
			</form>
			<br />
			<br />
		</div>
	);
};

export default Form;

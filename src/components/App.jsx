import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { getCatalog, setCatalog, setFavorite } from "../store/actions";
import Button from "@mui/material/Button";
import Modal from "./Modal";
import Form from "./Form";
import Favorites from "./Favorites";
import Card from "./Card";
import "../styles/index.scss";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</div>
	);
}

const Home = ({ personajes, getCatalog, setCatalog, setFavorite }) => {
	const [open, setOpen] = useState(false);
	const [openFavorites, setOpenFavorites] = useState(false);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const getInintialData = async () => {
			await getCatalog(`${API_URL}/personajes`, "personajes");
		};
		getInintialData();
	}, [getCatalog]);

	let teachers = personajes.filter((row) => row.position === "teacher");
	let students = personajes.filter((row) => row.position === "student");

	let favorites = personajes.filter((row) => row.favorite === true);

	return (
		<>
			<div className="Float-button">
				<Button
					onClick={() => setOpenFavorites(!openFavorites)}
					variant="contained"
					color="secondary"
					endIcon={<img width="13px" src="/img/favorite.png" />}
				>
					Favoritos
				</Button>
				<Button
					onClick={() => setOpen(true)}
					variant="contained"
					color="secondary"
					endIcon={<img width="22px" src="/img/user_fill_add.png" />}
				>
					Agregar
				</Button>
				{openFavorites && <Favorites data={favorites} setFavorite={setFavorite} />}
			</div>
			<div className="Page">
				<div className="Page-logo">
					<center>
						<br />
						<img
							alt="Logo principal"
							width="200px"
							src="/img/logo.png"
						/>
						<h3>Selleciona un filtro</h3>
						<div className="Page-btns">
							<Button
								onClick={() => setValue(0)}
								variant="outlined"
								color="secondary"
							>
								Estudiantes
							</Button>
							&nbsp;&nbsp;
							<Button
								onClick={() => setValue(1)}
								variant="outlined"
								color="secondary"
							>
								Staff
							</Button>
						</div>
					</center>
				</div>
				<br />

				<TabPanel value={value} index={0}>
					{students.length === 0 && <p>No hay Estudiantes</p>}
					<div className="List">
						{students.map((item) => (
							<Card
								key={item.id}
								item={item}
								setFavorite={setFavorite}
							/>
						))}
					</div>
				</TabPanel>

				<br />
				<TabPanel value={value} index={1}>
					<div className="List">
						{teachers.length === 0 && <p>No hay Profesores</p>}
						{teachers.map((item) => (
							<Card
								key={item.id}
								item={item}
								setFavorite={setFavorite}
							/>
						))}
					</div>
				</TabPanel>
			</div>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Form setCatalog={setCatalog} onClose={() => setOpen(false)} />
			</Modal>
		</>
	);
};

const mapStateToProps = (state) => ({
	personajes: state.personajes,
});

const mapDispatchToProps = {
	getCatalog,
	setCatalog,
	setFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

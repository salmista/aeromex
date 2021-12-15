import { API_URL } from "../../config";
import IconButton from "@mui/material/IconButton";

const capture = (type) => {
	switch (type) {
		case "1":
			return {
				color: "135deg, #FF0000 0%, #FED482 100%",
				houseTitle: "Gryffindor",
			};
		case "2":
			return {
				color: "135deg, #FFC700 0%, #FFF388 100%",
				houseTitle: "Hufflepuff",
			};
		case "3":
			return {
				color: "135deg, #0597B7 0%, #66D1FF 100%",
				houseTitle: "Ravenclaw",
			};
		case "4":
			return {
				color: "135deg, #1C792B 0%, #82E95E 100%",
				houseTitle: "Slytherin",
			};
	}
};

const Card = ({
	item: {
		id,
		name,
		gender,
		position,
		photography,
		favorite,
		dateOfBirth,
		eyescolor,
		headcolor,
		bgcolor,
		house,
	},
	setFavorite,
}) => {

	let { color, houseTitle } = capture(house);

	return (
		<div className="Card">
			<div
				className="Card-img"
				style={{ background: `linear-gradient(${color})` }}
			>
				<img width="130px" src={photography} />
			</div>
			<div className="Card-body">
				<div className="Card-body-head">
					<div>
						<h4>{position === "student" ? "Estudiante" : "Profesor"}</h4>
					</div>
					<div>
						{!favorite ? (
							<IconButton
								onClick={() =>
									setFavorite(`${API_URL}/personajes/${id}`, {
										id,
										name,
										gender,
										position,
										photography,
										favorite: true,
										dateOfBirth,
										eyescolor,
										headcolor,
										bgcolor,
										house,
									})
								}
							>
								<img src="/img/favorite.png" />
							</IconButton>
						) : (
							<IconButton
								onClick={() =>
									setFavorite(`${API_URL}/personajes/${id}`, {
										id,
										name,
										gender,
										position,
										photography,
										favorite: false,
										dateOfBirth,
										eyescolor,
										headcolor,
										bgcolor,
										house,
									})
								}
							>
								<img src="/img/favorite_bg.svg" />
							</IconButton>
						)}
					</div>
				</div>
				<h3>{name}</h3>
				<p>
					<b>Cumpleaños:</b> {dateOfBirth}
				</p>
				<p>
					<b>Género:</b> {gender}
				</p>
				<p>
					<b>Color de ojos:</b> {eyescolor}
				</p>
				<p>
					<b>Color de pelo:</b> {headcolor}
				</p>
				<p>
					<b>Casa:</b> {houseTitle}
				</p>
			</div>
		</div>
	);
};

export default Card;

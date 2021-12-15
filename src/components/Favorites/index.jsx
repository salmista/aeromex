import { API_URL } from "../../config";
import IconButton from "@mui/material/IconButton";

const Favorites = ({ data, setFavorite }) => {
	return (
		<div className="Menu">
			{data.length === 0 && <p>No hay ítems</p>}
			{data.map((row) => {
				let { favorite, ...rest } = row;
				return (
					<div className="Menu-item" key={row.id}>
						<div>
							<img src={row.photography} width="35px" />
						</div>
						<div>{row.name}</div>
						<div>
							<IconButton
								onClick={() =>
									setFavorite(
										`${API_URL}/personajes/${row.id}`,
										{
											favorite: false,
											...rest,
										}
									)
								}
							>
								<img src="/img/trash.png" />
							</IconButton>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Favorites;

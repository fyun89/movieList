var MovieList = (props) => {
	return(
		<table className='movie-list'>
			<tbody>
			{props.movies.map(
				function(movie) {
					return (<tr><td>{movie}</td></tr>)
				}
			)}
			</tbody>
		</table>
	);
};

window.MovieList = MovieList;
var Search = (props) => {
	//console.log(props.search, "this is prop")
	return(
		<form>
			<input id="searchBox" type="text" placeholder="Search" onChange={props.search} />
			<input type="submit" value="Submit" />
		</form>
	)
}

window.Search = Search;
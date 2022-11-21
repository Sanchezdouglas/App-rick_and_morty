import SearchBar from "./SearchBar.jsx"

export default function Nav(props) {
    return (
        <div>Barra de navegacion
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}
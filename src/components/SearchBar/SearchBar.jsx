import { IoIosSearch } from "react-icons/io";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { getSearchMovie } from "../../tmdb";
import { IconContext } from "react-icons";

const SearchBar = ({ handSearch }) => {

    const onSub = (e) => {
        e.preventDefault();
        const form = e.target;
        const inpSearch = form.elements.search.value.toLowerCase().trim();
        if (inpSearch === "") {
            toast.error("Input field is empty!");
            return;
        }
        handSearch(inpSearch);
        form.reset();
    }

    return (
        
            <form onSubmit={onSub} className={css.headerForm}>
                <input
                    className={css.formInp}
                    type="text"
                    name="search"
                    autoComplete="off"
                    placeholder="Search movie"
                />
                <button type="submit" className={css.formBtn}>
                    <IconContext.Provider value={{size: "20px", color: "rgb(20, 20, 20)"}}>
                        <IoIosSearch />
                    </IconContext.Provider>
                </button>
            </form>
       
    )
}

export default SearchBar;
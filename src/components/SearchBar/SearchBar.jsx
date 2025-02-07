import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { getSearchMovie } from "../../tmdb";

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
                    placeholder="Search images and photos"
                />
                <button type="submit" className={css.formBtn}>
                    {/* <IconContext.Provider value={{size: "20px", color: "dimgray"}}>
                        <IoIosSearch />
                    </IconContext.Provider> */}text
                </button>
            </form>
       
    )
}

export default SearchBar;
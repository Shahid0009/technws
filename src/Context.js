// context creation
// provider
// consumer was lengthy they remove
// useContext hook

import React, {useContext, useReducer, useEffect} from "react";
import reducer from "./reducer";

let API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
    isloading: true,
    query: "HTML",
    nbpages: 0,
    page: 0,
    hits: []
};
const AppContext = React.createContext();

// to create a provider

const AppProvider = ({ children }) => {

    // const [state, setstate] = useState(initialState);
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async (url) => {

        dispatch({type: "SET_LOADING"});
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            dispatch({
                type:"GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbpages: data.nbpages,
                },
            })
            
        }
        catch (error) {
            console.log(error);
        }
    }

    const removepost = (post_ID) => {
        dispatch({type: "REMOVE_POST", payload: post_ID});
    };
    const searchpost = (searchQuery) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: searchQuery,
        })
    }
    const getNextPage = () => {
        dispatch({
            type: "NEXT_PAGE"
        })
    }
    const getPrevPage = () => {
        dispatch({
            type: "PREV_PAGE"
        })
    }

    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}` );
    }, [state.query, state.page]);
    return (
        <AppContext.Provider
         value={{...state, removepost, searchpost, getNextPage, getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}
// custom hook creation
const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider, useGlobalContext};

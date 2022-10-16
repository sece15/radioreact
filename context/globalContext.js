import { createContext, useReducer, useContext } from "react";

//define the context

const globalStateContext = createContext()
const globalDispatchContext = createContext()

//reducer

const globalReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_THEME": {
            return {
                ...state,
                currentTheme: action.theme,
            }
        }

        case "CURSOR_TYPE": {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, {
        currentTheme: "dark",
        cursorType: false,
        cursorStyles: ["pointer", "hover"]
    })


    return (
        <globalDispatchContext.Provider value={dispatch}>
            <globalStateContext.Provider value={state}>
                {children}
            </globalStateContext.Provider>
        </globalDispatchContext.Provider>
    )
}

//custom hooksto use dispatch and state
export const useGlobalStateContext = () => useContext(globalStateContext)
export const useGlobalDispatchContext = () => useContext(globalDispatchContext)
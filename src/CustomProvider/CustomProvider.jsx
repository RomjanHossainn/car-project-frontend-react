import { createContext } from "react";

export const CustomContext = createContext(null)
const CustomProvider = ({children}) => {
    
    return (
        <CustomContext.Provider>
            {children}
        </CustomContext.Provider>
    );
};

export default CustomProvider;
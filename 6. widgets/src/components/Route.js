import { useState, useEffect } from "react";

const Route = ({ path, children }) => {

    // The reason this state exists is for 
    // re-rendering this component anytime the path updates
    const [currentPath, setCurrentPath] = useState(window.location.pathname);


    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        // The first time this component renders
        // add an event listener
        window.addEventListener("popstate", onLocationChange);



        // Cleanup function to remove event listener when this 
        // component is removed/re-rerenders
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    // return window.location.pathname === path ? children : null;
    return currentPath === path ? children : null;
};

{
    /* <Route path="/">
    < ChildComponent />
</Route>

    Whenever we provide one JSX inside of another JSX tag,
    the inner element is provided to the outer one in a prop
    called "children".

    In the case above, we show the children if the path that's passed
    is equal to the path we pass through the JSX


 */
}

export default Route;

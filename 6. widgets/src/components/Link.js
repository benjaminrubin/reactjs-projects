import React from "react";



const Link = ({ href, className, children }) => {
    
    const onClick = (event) => {

        // If either the Command key (metaKey)
        // or the ctrlKey (Windows) were clicked 
        // while pressing on the link
        if(event.metaKey || event.ctrlKey) {

            // Don't execute all of the custom
            // code below which prevents the default
            // behavior. Let the browser do its thing
            // and open a new tab
            return;
        }



        event.preventDefault();
        window.history.pushState({}, '', href);
        
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }; 
    
    
    return (
        <a
            href={href}
            className={className}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

export default Link;

# foodDeliveryApp

# Layout
- Header Component 
    - Logo
    - Nav bar
- Body
    - Search box with icon
    - Res Card
        - img
        - Rating
        - Time
- Footer
    - copyright
    - links

# Conflict Driven UI: It means personilize the UI according to the locations, By allowing data and layout rules to clash and resolve dynamically, the app guarantees that the user always gets a clean, usable interface, no matter how many chaotic backend updates happen simultaneously.

# The syntax ?. which is known as optional chanining operator Eliminates Cannot read properties of undefined errors.

# UseEffect is a important hook which takes two arguments:
        1. call back function
        2. dependency array

    if dependency array [] is not there => useEffect ll call in each and every render
    if dependency array [] is there => useEffect is called once in the initial render
    if dependency array [takes any state variable]  => useEffect is called when the variable changes. 

# useState restrictions: 1. never use in conditional statements (ex: if else)
                        2. never use inside functions or for level 
                        3. keep useState at the top. 
                        4. always use useState / useEffect inside component. 

# using ReactRouterDom: 
                        1. to install : npm i react-router
                        2. import createBrowserRouter, RouterProvider in App.js and structure the path element errorElement children accordingly. 

# uses of custom hook: 
                        1. custom hook is a concept of react where user can create own custom hook function to satisfy some specific requirement. Its a reusable JS function that carries stateful logics and its side effects so that it can be shared over multiple components. 
                        2. Custom hook name always starts with lowercase 'use' key word. Ex: useOnlineStatus.js
                        3. Benefits: a. Reusablity of code
                                     b. Components roles will be clean, component will carry single single responsibility
                                     c. Easier Testing. 

# Lazy Loading : AKA - Dynamic Import, Code splitting, chunking 
                1. Lazy loading comes into picture when we have diff components of app which is not required at the same time. technically to split the bundler.js and make the app faster by spliting bundler. 
                2. for Lazy loading we need to import {lazy and Suspense} named component from React.
                3. lazy(() => import("the component path")) syntax for lazy Loading
                4. <Suspense fallaback = {<h1>Shimmer can be used here</h1>}><Compoent></Suspense>

# Higher order Component: It is a function which takes the component as argument, enhance it and return a component. 

# Controlled Component : an input element whose value is completely driven by React state, rather than the DOM. Here state is uplifted from RestaurantCategory to RestaurantMenu and now carrds can be controlled from parent components. 

# reactContext- It avoids props drilling. global state can be used anywhere in the application to avoid unwanted passing of props through children components. 
                1. created UserContext which holds createContext
                2. wrapped App.js with UserContext and set a default value using useState
                3. in body.js useContext used to manipulate and use state.

# redux-toolkit - Redux is used as a library to keep tracking of state changes. It is outside of react. 
            1. to install- npm i @reduxjs/toolkit react-redux (both need to be installed)
            2. WF : 

            add to cart clicked ➡️ Action Dispatch ➡️ reducer function ➡️ redux library Slices
                                                                                               
                           ⤴️  selector used to subscribing to the store       ↩️

            steps to be followed -
            1. installation of react redux and tool kit
            2. create store in utils by importing {configureStore} from @reduxjs/toolkit
            3. import {Provider} from react-redux and wrap store the whole app in app.js
            4. Action dispatch
            5. reducer function
            6. selector
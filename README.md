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
                        1. to install : npm i react-router-dom
                        2. import 
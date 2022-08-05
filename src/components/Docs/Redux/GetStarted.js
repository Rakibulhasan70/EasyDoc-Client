import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const GetStarted = () => {
    const onChange = React.useCallback((value, viewUpdate) => {
        console.log("value:", value);
    }, []);
    return (
        <div className='my-10 max-w-7xl mx-auto'>
            <div className='lg:mx-0 md:mx-5 mx-5'>
                <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold mb-5 mt-20'>Getting Started with Redux</h1>
                <p className='mb-5'>Redux is a predictable state container for JavaScript apps.</p>
                <p className='mb-5'>It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.</p>
                <p className='mb-5'>You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.</p>
            </div>
            <div className='lg:mx-0 md:mx-5 mx-5'>
                <h1 className='lg:text-3xl md:text-2xl text-xl font-bold mb-5'>Installation</h1>
                <h1 className='lg:text-xl md:text-lg text-base font-bold mb-5'>Redux Toolkit</h1>
                <p className='mb-5'>Redux Toolkit is our official recommended approach for writing Redux logic. It wraps around the Redux core, and contains packages and functions that we think are essential for building a Redux app. Redux Toolkit builds in our suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.</p>
                <p className='mb-5'>RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once.</p>
                <p className='mb-5'>Whether you're a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better.</p>
                <p className='mb-5'>Redux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:</p>
                <div className='text-lg'>
                    <CodeMirror

                        value="
                        // NPM
                        npm install @reduxjs/toolkit
                        
                        // Yarn
                        yarn add @reduxjs/toolkit
                        "

                        theme="dark"
                        extensions={[javascript({ jsx: true })]}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Create a React Redux App</h1>
                    <p className="mb-5">The recommended way to start new apps with React and Redux is by using the official Redux+JS template or Redux+TS template for Create React App, which takes advantage of Redux Toolkit and React Redux's integration with React components.</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                            // Redux + Plain JS template
                        npx create-react-app my-app --template redux
                        // Redux + TypeScript template
                        npx create-react-app my-app --template redux-typescript
                        "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Redux Core</h1>
                    <p className="mb-5">The Redux core library is available as a package on NPM for use with a module bundler or in a Node application:</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                            // NPM
                            npm install redux
                            
                            // Yarn
                            yarn add redux
                            "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                    <p className="my-5">It is also available as a precompiled UMD package that defines a window.Redux global variable. The UMD package can be used as a script tag directly.</p>
                    <p className="mb-5">For more details, see the Installation page.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Basic Example</h1>
                    <p className="mb-5">The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store. To specify how state gets updated in response to an action, you write pure reducer functions that calculate a new state based on the old state and the action.</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                            import { createStore } from 'redux'
                            
                            //  This is a reducer - a function that takes a current state value and an
                            //  action object describing 'what happened', and returns a new state value.
                            //  A reducer's function signature is: (state, action) => newState
 
                            //  The Redux state should contain only plain JS objects, arrays, and primitives.
                            //  The root state value is usually an object. It's important that you should
                            //  not mutate the state object, but return a new object if the state changes.
                            //  You can use any conditional logic you want in a reducer. In this example,
                            //  we use a switch statement, but it's not required.

                            function counterReducer(state = { value: 0 }, action) {
                                switch (action.type) {
                                  case 'counter/incremented':
                                    return { value: state.value + 1 }
                                  case 'counter/decremented':
                                    return { value: state.value - 1 }
                                  default:
                                    return state
                                }
                              }

                              // Create a Redux store holding the state of your app.
                              // Its API is { subscribe, dispatch, getState }.

                              let store = createStore(counterReducer)

                              // You can use subscribe() to update the UI in response to state changes.
                              // Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
                              // There may be additional use cases where it's helpful to subscribe as well.

                              store.subscribe(() => console.log(store.getState()))

                              // The only way to mutate the internal state is to dispatch an action.
                              // The actions can be serialized, logged or stored and later replayed.

                              store.dispatch({ type: 'counter/incremented' })
                              // {value: 1}
                              store.dispatch({ type: 'counter/incremented' })
                              // {value: 2}
                              store.dispatch({ type: 'counter/decremented' })
                              // {value: 1}
                            
"

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                    <p className="my-5">Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions. Then you write a special function called a reducer to decide how every action transforms the entire application's state.</p>
                    <p className="mb-5">In a typical Redux app, there is just a single store with a single root reducing function. As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree. This is exactly like how there is just one root component in a React app, but it is composed out of many small components.</p>
                    <p className="mb-5">This architecture might seem like a lot for a counter app, but the beauty of this pattern is how well it scales to large and complex apps. It also enables very powerful developer tools, because it is possible to trace every mutation to the action that caused it. You can record user sessions and reproduce them just by replaying every action.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Redux Toolkit Example</h1>
                    <p className="mb-5">Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:</p>
                    <div className='text-lg'>
                        <CodeMirror

                            value="
                            import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write 'mutating' logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a 'draft state' and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
                            "

                            theme="dark"
                            extensions={[javascript({ jsx: true })]}
                            onChange={onChange}
                        />
                    </div>
                    <p className="my-5">Redux Toolkit allows us to write shorter logic that's easier to read, while still following the same Redux behavior and data flow.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Learn Redux</h1>
                    <p className="mb-5">Redux Toolkit simplifies the process of writing Redux logic and setting up the store. With Redux Toolkit, that same logic looks like:We have a variety of resources available to help you learn Redux.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Redux Essentials Tutorial</h1>
                    <p className="mb-5">The Redux Essentials tutorial is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Redux Fundamentals Tutorial</h1>
                    <p className="mb-5">The Redux Essentials tutorial is a "top-down" tutorial that teaches "how to use Redux the right way", using our latest recommended APIs and best practices. We recommend starting there.The Redux Fundamentals tutorial is a "bottom-up" tutorial that teaches "how Redux works" from first principles and without any abstractions, and why standard Redux usage patterns exist.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Learn Modern Redux Livestream</h1>
                    <p className="mb-5">Redux maintainer Mark Erikson appeared on the "Learn with Jason" show to explain how we recommend using Redux today. The show includes a live-coded example app that shows how to use Redux Toolkit and React-Redux hooks with Typescript, as well as the new RTK Query data fetching APIs.</p>
                    <p className="mb-5">See the "Learn Modern Redux" show notes page for a transcript and links to the example app source.</p>
                    <div>
                        <iframe className='w-full h-screen' src="https://www.youtube.com/embed/9zySeP5vH9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Additional Tutorials</h1>
                    <p>* The Redux repository contains several example projects demonstrating various aspects of how to use Redux. Almost all examples have a corresponding CodeSandbox sandbox. This is an interactive version of the code that you can play with online. See the complete list of examples in the Examples page.</p>
                    <p>* Redux creator Dan Abramov's free "Getting Started with Redux" video series and Building React Applications with Idiomatic Redux video courses on Egghead.io</p>
                    <p>* Redux maintainer Mark Erikson's "Redux Fundamentals" conference talk and "Redux Fundamentals" workshop slides</p>
                    <p>* Dave Ceddia's post A Complete React Redux Tutorial for Beginners</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Other Resources</h1>
                    <p>* The Redux FAQ answers many common questions about how to use Redux, and the "Using Redux" docs section has information on handling derived data, testing, structuring reducer logic, and reducing boilerplate.</p>
                    <p>* Redux maintainer Mark Erikson's "Practical Redux" tutorial series demonstrates real-world intermediate and advanced techniques for working with React and Redux (also available as an interactive course on Educative.io).</p>
                    <p>* The React/Redux links list has categorized articles on working with reducers and selectors, managing side effects, Redux architecture and best practices, and more.</p>
                    <p>* Our community has created thousands of Redux-related libraries, addons, and tools. The "Ecosystem" docs page lists our recommendations, and there's a complete listing available in the Redux addons catalog.</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Help and Discussion</h1>
                    <p>The #redux channel of the Reactiflux Discord community is our official resource for all questions related to learning and using Redux. Reactiflux is a great place to hang out, ask questions, and learn - come join us!</p>
                    <p>You can also ask questions on Stack Overflow using the #redux tag.</p>
                    <p>If you have a bug report or need to leave other feedback, please file an issue on the Github repo</p>
                </div>
                <div>
                    <h1 className='lg:text-xl md:text-lg text-base font-bold my-5'>Should You Use Redux?</h1>
                    <p>Redux is a valuable tool for organizing your state, but you should also consider whether it's appropriate for your situation. Don't use Redux just because someone said you should - take some time to understand the potential benefits and tradeoffs of using it.</p>
                    <p className='my-5'>Here are some suggestions on when it makes sense to use Redux:</p>
                    <p>* You have reasonable amounts of data changing over time</p>
                    <p>* You need a single source of truth for your state</p>
                    <p>* You find that keeping all your state in a top-level component is no longer sufficient</p>
                </div>
            </div>

        </div>
    );
};

export default GetStarted;
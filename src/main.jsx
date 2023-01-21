import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { MainApp } from './09-useContext/MainApp';

// import { TodoApp } from './08-useReducer/TodoApp'

// import { Parent } from './07-memo-homework/Parent'

// import './08-useReducer/intro-reducer'

// import { CallbackHook } from './06-memos/CallbackHook'

// import { MemoHook } from './06-memos/MemoHook'

// import { Memorize } from './06-memos/Memorize'

// import { Layout } from './05-useLayoutEffect/Layout'

// import { FocusScreen } from './04-useRef/FocusScreen'

// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'

// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

// import { SimpleForm } from './02-useEffect/SimpleForm'

// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'

// import { CounterApp } from './01-useState/CounterApp'

// import { HooksApp } from './HooksApp'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Parent /> */}
    {/* <TodoApp /> */}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>,
)

// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>
//            DEMO
//         </h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import { Provider } from 'react-redux';
import React, { Component } from 'react'
import { store } from './redux/store';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome'
import Hello from './components/Hello';
import Message from './components/Message';
import Count from './components/Count'
import ClickEvents from './components/ClickEvents'
import ClassClik from './components/ClassClik'
import ParentComp from './components/ParentComp'
import Logging from './components/Logging'
import MapList from './components/MapList';
import StyleCom from './components/StyleComp'
import Inline from './components/Inline'
import Form from './components/Form'
import './normalCSS.css' //IMPORTING NORMAL .CSS FILE
import styles from './ModuleCSS.module.css' //IMPORTING .MODULE.CSS FILE
import LifeCycleA from './components/LifeCycleA'
import Table from './components/Table'
import CompCheck from './components/CompCheck'
import FocusInput from './components/FocusInput'
import FWDParent from './components/FWDParent'
import PortalEx from './components/PortalEx'
import ErrorEx from './components/ErrorEx'
import ErrorBoundary from './components/ErrorBoundary'
import HoverCount from './components/HoverCount'
import RenderProps from './components/RenderProps';
import ClickCount from './components/ClickCount';
import CompA from './components/CompA'
import { UserProvider } from './components/ContextComp'
import Getreq from './http_hooks/Getreq'
import PostReq from './http_hooks/PostReq'
import UScomp from './http_hooks/UScomp';
import DocTitleChange from './components/DocTitleChange'
import UEComp from './http_hooks/UEComp'
import UEComp1 from './http_hooks/UEComp1';
import MouseContainer from './http_hooks/MouseContainer';
import ClassTimer from './http_hooks/ClassTimer';
import UE_Timer from './http_hooks/UE_Timer';
import GET_hook from './http_hooks/GET_hook';
import Comp_A from './http_hooks/CompA'
import ReducerCounter from './http_hooks/ReducerCounter';
import ReducerCounter2 from './http_hooks/ReducerCounter2';
import ReducerCounter3 from './http_hooks/ReducerCounter3';
import ClickCount2 from './components/ClickCount2';
import ReducerUseContex from './http_hooks/ReducerUseContex';
import ReducerFetch from './http_hooks/ReducerFetch';
import FormReducer from './http_hooks/FormReducer';
import CallBack from './http_hooks/CallBack';
import MemoHook from './http_hooks/MemoHook';
import FocusInputs from './http_hooks/FocusInput';
import RefTimer from './http_hooks/RefTimer';
import ChangeTitle1 from './customHooks/ChangeTitle1';
// import ChangeTitle2 from './customHooks/ChangeTitle2';
import Counter1 from './customHooks/Counter1';
import Counter2 from './customHooks/Counter2';
import Form1 from './customHooks/Form1';
import Form2 from './customHooks/Form2';
import CakeContainer from './redux_components/CakeContainer';
import HookCakeContainer from './redux_components/HookCakeContainer';
import IceContainer from './redux_components/IceContainer';
import Payload from './redux_components/Payload';
import ItemContainer from './redux_components/ItemContainer';
export const UserContex = React.createContext()  //ALSO CREATE USING SEPERATE FILES
export const channelName = React.createContext()
class App extends Component {
  render() {

    return (

      <Provider store={store}>
      <div className="App">
        {/* <header className="App-header"> */}
          <HookCakeContainer></HookCakeContainer>
          <CakeContainer />
          <IceContainer></IceContainer>
          <Payload></Payload>

          <ItemContainer cake></ItemContainer>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1> */}
          {/* DEMO WEBSITE */}
          {/* <Form2></Form2> */}
          {/* <Form1></Form1> */}
{/* <Counter1></Counter1>
<Counter2></Counter2> */}

         {/* <ChangeTitle1></ChangeTitle1>
         <ChangeTitle2></ChangeTitle2> */}
          {/* <RefTimer></RefTimer> */}
          {/* <FocusInputs></FocusInputs> */}
          {/* <MemoHook></MemoHook> */}
          {/* <CallBack></CallBack> */}
          {/* <FormReducer></FormReducer> */}
          {/* <ReducerFetch></ReducerFetch> */}
          {/* <ReducerUseContex></ReducerUseContex> */}
          {/* <ReducerCounter3></ReducerCounter3> */}
          {/* <ReducerCounter2></ReducerCounter2> */}
          {/* <ReducerCounter></ReducerCounter> */}

{/* CONTEXT FOR FUNCTIONAL COMPONENT */}
{/* 
          <UserContex.Provider value="vijay">
            <channelName.Provider value="TVK">
              <Comp_A />
            </channelName.Provider>

          </UserContex.Provider> */}

          {/* <ClassTimer></ClassTimer>
            <UE_Timer></UE_Timer> */}
          {/* <GET_hook></GET_hook> */}
          {/* <MouseContainer></MouseContainer> */}
          {/* <UEComp1></UEComp1> */}
          {/* <UEComp></UEComp> */}
          {/* <DocTitleChange></DocTitleChange> */}
          {/* <UScomp></UScomp> */}
          {/* <PostReq></PostReq> */}
          {/* <Getreq></Getreq> */}
          {/* <UserProvider value="Ajith">
            <CompA />
            </UserProvider> */}
{/* 
          <RenderProps render={(count,increment) =>(       //WITH RENDER
              <ClickCount count={count} increment={increment}/>
             
            ) }/> */}

          {/* OR */}

          {/* <RenderProps>
              {
                (count,increment) =>(
                  <div>
                  <ClickCount count={count} increment={increment}/>  //WITHOUT RENDER
                  <ClickCount2 count={count} increment={increment} />
                  </div>
                )
              }
            </RenderProps> */}


          {/* <HoverCount name="saaket"/> */}
          {/* <ErrorBoundary>
            <ErrorEx name='ajay'/>
            </ErrorBoundary>
            <ErrorBoundary>
            <ErrorEx name='vimal'/>
            </ErrorBoundary>
            <ErrorBoundary>
            <ErrorEx name='guna'/>
            </ErrorBoundary> */}

          {/* <PortalEx /> */}
          {/* <FWDParent /> */}
          {/* <FocusInput /> */}
          {/* <CompCheck /> */}
          {/* <Table></Table> */}
          {/* <LifeCycleA /> */}
          {/* <Form /> */}
          {/* <br/> */}
          {/* <span className='error'>Different CSS files</span>
           <br/>
           <span className={styles.success}>DIfferent CSS files</span> */}
          {/* <Inline />
           <StyleCom primary={false} />
           <ParentComp />
           <Logging />
           <MapList class={styles.success}/>   */}
          {/* <ClassClik />
           <ClickEvents />
           <Count /> */}
          {/* <div clas="wlc"> */}
          {/* <Message></Message>
            <h3><Greet name="dani" prof="coder" /></h3>
            <Greet name="ram" prof="actor">
              <p>Children of Greet</p>
            </Greet>
            <h4><Welcome /></h4>
           <h5><Hello name="Gowtham" /></h5> 
           <Welcome name="kavi"></Welcome>
           <Welcome name="Manoj">
            {/* <p>this is for manoj</p> */}
          {/* <button>Click</button> */}
          {/* </Welcome> */}
          {/* </div> */}
          {/* </h1> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        {/* </header> */}
      </div>
      </Provider>
    );
  }
}

export default App;


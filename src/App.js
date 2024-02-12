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
import React, { Component } from 'react'
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
import { userProvider } from './components/ContextComp'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1> */}
            DEMO WEBSITE
            <userProvider value="vishwas">
            <CompA />
            </userProvider>
           
            {/* <RenderProps render={(count,increment) =>(       WITH RENDER
              <ClickCount count={count} increment={increment}/>
            ) }/> */}
            {/* OR */}
            <RenderProps>
              {
                (count,increment) =>(
                  <ClickCount count={count} increment={increment}/>  //WITHOUT RENDER
                )
              }
            </RenderProps>


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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


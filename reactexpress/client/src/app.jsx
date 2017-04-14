import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NameForm from './components/LoginForm.jsx';
import Main from './components/starwars.jsx';



// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();
 
ReactDom.render(
 // <NameForm />,
 <Main />,
   document.getElementById('react-app'));

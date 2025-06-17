import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';


const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = "yooo"
  
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},'click me to visit google',anotherUser
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//    <App />
   reactElement
);



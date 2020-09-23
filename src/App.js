import React from 'react';
import Contact from "./components/Contact";

function App() {
    const online = "Online";
    const offline = "Offline";
  return (
    <div className="App">
      <Contact avatar={"https://randomuser.me/api/portraits/men/43.jpg"} name={"Rafael Watson"} isOnline={true} online={online} offline={offline}/>
      <Contact avatar={"https://randomuser.me/api/portraits/men/45.jpg"} name={"Benjamin Holt"} isOnline={false} online={online} offline={offline}/>
      <Contact avatar={"https://randomuser.me/api/portraits/women/13.jpg"} name={"Gwendolyn Wade"} isOnline={true} online={online} offline={offline}/>
    </div>
  );
}

export default App;

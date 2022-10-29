import Navbar from "./Navbar";
import Registration from "./registration";
import Login from "./login";
import AllLists from "./AllLists";
import SingleList from "./SingleList";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentView, setCurrentView] = useState("login");
  const [loginView, setLoginView] = useState("login");
  const [lists, setLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  const [itemsInList, setItemsInList] = useState([]);

  const getList = async () => {
    let data = await axios.get("/api/lists");
    setLists(data.data);
  };
  useEffect(() => {
    getList();
  }, [lists]);

  return (
    <div className="bodyDiv">
      <Navbar setCurrentView={setCurrentView} />
      {/* {currentView ===
        "login" (
          <Login
            loginView={loginView}
            setLoginView={setLoginView}
            setCurrentView={setCurrentView}
          />
        ) } */}
      {currentView === "login" && (
        <Login
          loginView={loginView}
					currentView={currentView}
          setLoginView={setLoginView}
          setCurrentView={setCurrentView}
        />
      )}

      {/* {loginView === "login" ? (
			) : (
				<Registration loginView={loginView} setLoginView={setLoginView} />
			)} */}

      {currentView === "allLists" && (
        <AllLists
          setLists={setLists}
          lists={lists}
          setCurrentView={setCurrentView}
          currentView={currentView}
          setSelectedList={setSelectedList}
          selectedList={selectedList}
          itemsInList={itemsInList}
        />
      )}

      {currentView === "singleList" && (
        <SingleList
          selectedList={selectedList}
          lists={lists}
          itemsInList={itemsInList}
        />
      )}
      <br />
    </div>
  );
}

export default App;

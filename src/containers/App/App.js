import React, { Component } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default App;

// 1. Landing
// 2. Login/Sign up: Modal
// 3. Quizzes: Modal
// 4. Packages: 1, 2, 3, 4
// 5. Shop Catalog
// 6. Cart Page, modal
// 7. Blog
// 8. Generic Info Pages from Footer: Disclaimer, About, Jobs
// 9. Support FAQ
// 10. Contact Modal
// 11. Connect sidebar

import React, { Component } from "react";
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
// import Adbar from "../../components/components/Adbar.jsx";
import "../../assets/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { path: '/',
          exact: true,
          name: 'HOME'
        },
        { path: '/about',
          exact: true,
          name: 'ABOUT'
        },
        { path: '/portfolio',
          name: 'PORTFOLIO'
        },
        { path: '/contact',
          name: 'CONTACT'
        }
      ]
    };
  }
  render() {
    return (
      <main>
        <Header/>
        {this.props.children}
        <Footer/>
      </main>
    );
  }
}

export default App;

//SITE MAP

/*
1. Landing
  Hero(subscribe, features), Packages, Shop, Blog, Pre-footer Hero, Footer 
2. Login/Sign up: Modal
3. Quizzes: Modal
4. Packages: 1, 2, 3, 4
5. Shop Catalog
6. Cart Page, modal
7. Blog
8. Generic Info Pages from Footer: Disclaimer, About, Jobs
9. Support FAQ
10. Contact Modal
11. Connect sidebar
return (
      <main>
        <Header/>
        <Sidebar/>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </main>
    );
  }
*/

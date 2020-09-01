import React from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {

    render() {
      return (
      <Fragment>
        <div className="demo-big-content">
          <Layout>
            <HeaderLanding/>
            <Content>
                <div className="page-content" />
            </Content>     
          </Layout>
        </div>
      </Fragment>
      );
    }
  }
  
  export default App;
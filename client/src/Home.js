import React, {Component} from 'react';
import logo from './352-3523235_setas-personalizadas-png.png';
import './App.css';
import { Jumbotron, Button, Dropdown, DropdownButton, Navbar, Container} from "react-bootstrap";
import Routes from './Routes';


class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

  }

  callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      
      <div className="App">
      <header>
      

          <Navbar fixed="top" expand="lg" variant="light" bg="light">
  <Container>
  <br></br>
    <Navbar.Brand href="#">AGÊNCIA PARANHOS</Navbar.Brand>
    <Button>REGISTRAR-SE</Button>
    <DropdownButton
            menuAlign="right"
            title="MENU"
            id="dropdown-menu-align-right"
          >
            <Dropdown.Item eventKey="1">Registrar-se</Dropdown.Item>
            <br></br>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <br></br>
            <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            <br></br>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
  </Container>
</Navbar>

      </header>
      
     
      <Jumbotron>
      <br></br><br></br><br></br>
        <h1>É simples. É fácil. É PARANHOS.</h1>
        <p>
        Você ganha a bonificação que pode ser convertida em prêmios ou dinheiro quando uma indicação sua for convertida em venda pela PARANHOS
      </p>
      <img src={logo} alt={logo} />
        <p>
          <Button className="saibamais" bsStyle="primary">SAIBA MAIS!</Button>
        </p>
      </Jumbotron>
  
   
    
        <p className="App-intro">{this.state.response}</p>
      </div>

      
    );
  }
}

export default Home;
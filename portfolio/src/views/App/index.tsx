import React from  'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '../About';
import Header from '../Header';
import Projects from '../Projects';
import SideInfo from '../SideInfo';
import { StyledRoot, Wrapper } from './styles';
import 'minireset.css';
import 'animate.css';

const App: React.FC = () => (
  <BrowserRouter>
    <StyledRoot>
      <Header />
      <Wrapper>
        <SideInfo />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Wrapper>
    </StyledRoot>
  </BrowserRouter>
);

export default App;

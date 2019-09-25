import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { DataTable } from '../datatable/DataTable';
import FirebaseService from '../../services/FirebaseService';
import {urls} from "../../utils/urlUtils";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Route from "react-router-dom/es/Route";


const theme = createMuiTheme({
  palette: {
    primary: red,
  }
});

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    FirebaseService.getDataList('leituras', (dr)=> this.setState({data:dr}))
  }

  render() {
    return(
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                My Awesome React
              </Typography>
            </Toolbar>
          </AppBar>
          <Card style={{ margin: '50px'}}>
            <CardContent>
              <Route exact path ={urls.home.path} render={(props)=> <Welcome {...props}/> } />
              <Route exact path ={urls.data.path} render={(props)=> <DataTable {...props} data={this.state.data} />} />
              <Route exact path ={urls.add.path} render={(props)=> <Add {...props}/> } />
            </CardContent>
          </Card>
          <DataTable data={this.state.data}/>
        </React.Fragment>
      </ThemeProvider>
    ) 
  }
}

export default App;

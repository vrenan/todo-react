import React, {Component} from "react";
import FirebaseService from "../../services/FirebaseService";
import {urls} from "../../utils/urlUtils";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {withRouter} from "react-router-dom";
import TextField from "@material-ui/core/TextField";

class Add extends Component {
    submit = (e) => {
        e.preventDefault()
        const { temperatura } = this;
        const { umidade } = this;
        const { data } = this;
        const { cliente } = this;

        const newId = FirebaseService.pushData('leituras', {
           temperatura, umidade, data, cliente
        });

        this.props.history.push(urls.data.path);
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="headline" component="h2">
                    Add New
                </Typography>
                <form onSubmit={this.submit}>
                    <TextField className="input-field"
                               type="text"
                               defaultValue={''}
                               label="Temperature"
                               required
                               onChange={e => this.temperatura = e.target.value }
                    />
                    <TextField className="input-field"
                               type="text"
                               defaultValue={''}
                               label="Humidity"
                               required
                               onChange={e => this.umidade = e.target.value }
                    />
                    <TextField className="input-field"
                               type="text"
                               defaultValue={''}
                               label="Date"
                               required
                               onChange={e => this.data = e.target.value }
                    />
                    <TextField className="input-field"
                               type="text"
                               defaultValue={''}
                               label="Client"
                               required
                               onChange={e => this.cliente = e.target.value }
                    />
                    <Button type="submit" style={{marginTop: '20px', display: 'inline-block'}}> Add</Button>
                </form>
            </React.Fragment>
        )
    }
}

export default withRouter(Add);
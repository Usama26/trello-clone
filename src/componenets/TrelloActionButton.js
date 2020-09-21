import React from 'react';
import Icon from '@material-ui/core/Icon';
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';

import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import { addList, addCard , addLabel} from "../actions";
class TrelloActionButton extends React.Component {

    state = {
        formOpen: false,
        text: "",
        x:""
    }

    

    openForm = () => {
        this.setState({ formOpen: true })
    }

    closeForm = () => {
        this.setState({ formOpen: false })
    }

    handleInputChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            })
            dispatch(addList(text));
        }
        return;
    }

    handleChange = (event) => {
        this.setState({x:event.target.value});
      };

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            })
            dispatch(addCard(listID, text));
        }
        return;
    }
    renderAddButton = () => {
        const { list } = this.props;
       

        console.log(list);

        const buttonText = list ? "Add Another List" : "Add Another Card"
        const buttonTextOpacity = list ? 1 : 0.5
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgb(0,0,0,.15)" : "inherit"
        return (
            <div
                onClick={this.openForm}
                style={{
                    ...styles.openFormButtonGroup,
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>);
    }

    renderForm = () => {

        const { list } = this.props;
        const { labels } = this.props;
        

        const placeholder = list ? "Enter list title..." : "Enter a title for this card..."

        const buttonTitle = list ? "Add List" : "Add Card";


        return (<div>
            <Card style={{
                overflow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    style={{
                        resize: "none",
                        width: "100%",
                        outline: "none",
                        border: "none",
                        overflow: "hidden"
                    }}
                />
            </Card>
            <div style={styles.formButtonGroup}>
                <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    varient="contained" style={{ color: "white", backgroundColor: "#5aac44" }} >
                    {buttonTitle}{" "}
                </Button>
                {!list ?
                (    <div>

                    {/* <FormControl className={classes.formControl}>
                      <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>
                      <Select
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value="aaa"
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(labels) => (
                          <div className={classes.chips}>
                            {labels.map((value) => (
                              <Chip key={value} label={value} className={classes.chip} />
                            ))}
                          </div>
                        )}
                        MenuProps={MenuProps}
                      >
                        {labels.map((name) => (
                          <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                            {name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl> */}
                    {/* <Button>Check me!</Button> */}
                  </div>
                ) : null}
                <Icon
                    onClick={this.closeForm}
                    style={{ marginLeft: 8, cursor: "pointer" }}>close</Icon>
            </div>
        </div>)
    }
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//       maxWidth: 300,
//     },
//     chips: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     chip: {
//       margin: 2,
//     },
//     noLabel: {
//       marginTop: theme.spacing(3),
//     },
//   }));

//   const classes = useStyles();
//   const theme = useTheme();

const mapStateToProps = state => ({
    labels: state.labels
})

export default connect(mapStateToProps)(TrelloActionButton);
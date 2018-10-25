import React from 'react';

class AddPlayerForm extends React.Component {



    playerInput = React.createRef();


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        this.playerInput.current.value = "";        
    };

    render() {
        return (
            <form onSubmit={ this.handleSubmit } >
                <input 
                    type="text" 
                    ref={this.playerInput} 
                    placeholder="Enter a player's name"
                />

                <input 
                    type="submit" 
                    value="Add Player"
                />
            </form>
        );
    }

}

export default AddPlayerForm;
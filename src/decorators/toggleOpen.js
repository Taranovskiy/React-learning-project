import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Toggle extends ReactComponent {
    state = {
        isOpen: false
    }
    
    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (evt) => {
        evt && evt.preventDefault && evt.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


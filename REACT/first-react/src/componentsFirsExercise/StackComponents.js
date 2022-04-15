import React from "react";

export default class StackComponent extends React.Component{

    render() {
        return (
            <div>
                <p>Ciao sono un paragrafo nello stack</p>
                <p>Il valore passato è { this.props.value}</p>
            </div>
        )
    }
}
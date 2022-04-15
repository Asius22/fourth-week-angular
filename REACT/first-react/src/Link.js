import React from "react";

export default class Link extends React.Component {

        render() {
            return (
                < div >
                    <p>{this.props.obj.lastName} {' '} { this.props.obj.name}</p>
                </div>);
            }
}
        
export function Div() {
    return (
        <div>Ciao</div>
    );
}
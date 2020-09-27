import React, { Component } from "react";
import genericimage from "../hospital.svg";
import downloadimage from "../download.svg";
export default class Card extends Component {
  constructor() {
    super();
  }

  state = {
    text: "Supply",
  };

  changeText = (text) => {
    this.setState({ text });
  };

  componentDidMount() {}
  //hospital name,number ,type,
  render() {
    const file = this.props.hasFile ? (
      <img
        alt=""
        src={downloadimage}
        width="15"
        height="20"
        style={{ marginLeft: "90%" }}
      />
    ) : (
      <> </>
    );
    const { text } = this.state;
    return (
      <div className="Card">
        <div style={{ borderBottomWidth: "10px" }}>
          <img
            alt=""
            src={this.props.image ? this.props.image : genericimage}
            width="100"
            height="40"
            style={{ marginBottom: "2vh", marginTop: "2vh" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: "bold" }}>{this.props.hospitalName}</span>
          <span style={{ fontStyle: "italic" }}>{this.props.address}</span>
          <span>{this.props.quantityAsked + " " + this.props.itemType}</span>
        </div>
        <button
          onClick={() => {
            this.changeText("Fulfilled");
          }}
          style={{
            width: "max-content",
            margin: "auto",
            marginTop: "2vh",
            backgroundColor: "rgb(255, 128, 128)",
            borderColor: "rgb(255, 128, 128)",
            borderRadius: "0.25rem",
            whiteSpace: "nowrap",
            border: "1px solid transparent",
            padding: ".375rem .75rem",
            lineHeight: "1.5",
            textAlign: "center",
          }}
        >
          {text}
        </button>
        {file}
      </div>
    );
  }
}

import React, { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import "./Check.css";
import {
  Br,
  Cut,
  Line,
  Printer,
  Text,
  Row,
  render,
} from "react-thermal-printer";
const Check = () => {
  const receipt = [
    <Printer type="epson" width={42} characterSet="pc850_multilingual">
      <Text size={{ width: 2, height: 2 }}>10000</Text>
      <Br />
    </Printer>,
  ];
  return <></>;
};

export default Check;

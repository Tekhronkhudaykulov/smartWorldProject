import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<any>;
}

const SecondKeyboard: FunctionComponent<IProps> = ({
  onChange,
  keyboardRef,
}) => {
  const [layoutName, setLayoutName] = useState("default");

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") {
      setLayoutName(layoutName === "default" ? "shift" : "default");
    }
  };

  return (
    <Keyboard
      //   onChange={(input) =>
      //     onInputChanged(Object.keys(input)[0], Object.values(input)[0])
      //   }
      //   inputName={Object.keys(inputValues)[0]}
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered")}
      layout={{ default: ["1 2 3", "4 5 6", "7 8 9", "0 {bksp}"] }}
      display={{
        "{bksp}": "⌫", // Backspace tugmasi matni
        "{default}": "default", // Klaviatura matni
        "{a}": "1", // a tugmasi uchun raqam 1
        "{b}": "2", // b tugmasi uchun raqam 2
        "{c}": "3", // c tugmasi uchun raqam 3
        "{d}": "4", // d tugmasi uchun raqam 4
        "{e}": "5", // e tugmasi uchun raqam 5
        "{f}": "6", // f tugmasi uchun raqam 6
        "{g}": "7", // g tugmasi uchun raqam 7
        "{h}": "8", // h tugmasi uchun raqam 8
        "{i}": "9", // i tugmasi uchun raqam 9
        "{j}": "0", // j tugmasi uchun raqam 0
      }}
    />
  );
};

export default SecondKeyboard;

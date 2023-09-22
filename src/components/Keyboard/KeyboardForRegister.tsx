import React, { FunctionComponent, useState, MutableRefObject } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Keyboard.css";

interface IProps {
  onChange: (input: string) => void;
  keyboardRef: MutableRefObject<any>;
}

const KeyboardForRegister: FunctionComponent<IProps> = ({
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
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onRender={() => console.log("Rendered")}
      layout={{
        default: [
          "1 2 3 4 5 6 7 8 9 0",
          "й ц у к е н г ш щ з ь",
          "х ъ ф ы в а п р о л б",
          "д ж э ё я ч с м и т ю",
          ".",
          "{space}",
        ],
      }}
    />
  );
};

export default KeyboardForRegister;

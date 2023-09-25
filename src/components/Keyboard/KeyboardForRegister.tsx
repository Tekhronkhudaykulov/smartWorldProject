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

  const customLayout = {
    default: [
      "й ц у к е н г ш щ з х",
      "ф ы в а п р о л д ж э",
      "ё я ч с м и т ь б ю",
      "{shift} {backspace} {space}",
    ],
    shift: [
      "Й Ц У К Е Н Г Ш Щ З Х",
      "Ф Ы В А П Р О Л Д Ж Э",
      "Ё Я Ч С М И Т Ь Б Ю",
      "{shift} {backspace} {space}",
    ],
  };

  const customDisplay = {
    "{shift}": "⇧",
    "{space}": "space",
    "{backspace}": "⌫",
    "{lock}": "lan",
  };

  return (
    <Keyboard
      keyboardRef={(r) => (keyboardRef.current = r)}
      layoutName={layoutName}
      onChange={onChange}
      onKeyPress={onKeyPress}
      onRender={() => console.log("Rendered")}
      // layout={{
      //   default: [
      //     "й ц у к е н г ш щ з ь",
      //     "х ъ ф ы в а п р о л б",
      //     "д ж э ё я ч с м и т ю",
      //     ". {backspace}",
      //     "{space}",
      //   ],
      // }}
      layout={customLayout}
      display={customDisplay}
    />
  );
};

export default KeyboardForRegister;

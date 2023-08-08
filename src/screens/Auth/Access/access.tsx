import React from "react";
import LogoName from "../../../components/LogoName/logoName";
import Text from "../../../components/Text/text";

const Access = () => {
  return (
    <div>
      <LogoName style={{ marginTop: "50px" }} />
      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <Text
          style={{ fontSize: "30px" }}
          text="Ройтман Рафаэль Евгеньевич, вы успешно вошли в систему!"
        />
      </div>
    </div>
  );
};

export default Access;

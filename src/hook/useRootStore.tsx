import { useContext } from "react";
import RootStrore from "../store/RootStrore";

const useRootStore = () => useContext(RootStrore)

export default useRootStore;
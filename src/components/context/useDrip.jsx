import { useContext } from "react";
import { DripContext } from "./DripContext";

export const useDrip = () => useContext(DripContext);
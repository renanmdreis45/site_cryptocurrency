import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import {BackDrop} from "./BackDrop";
import {CoinDescription} from "./CoinDescription";
import { propTypesSelected } from "@material-tailwind/react/types/components/select";

interface Props {
    onsetModal(): void;
    themeStatus: boolean;
    onCoinId: string;
}

export const Modal: React.FC<Props> = ({onsetModal,themeStatus, onCoinId}) => {
    return(
        <>
          {ReactDOM.createPortal(
            <CoinDescription theme={themeStatus} coinName={onCoinId} />
            <BackDrop
              onClick={() => {
                onsetModal();
              }}
            />,
            document.getElementById("modal")
          )} {" "}
          {ReactDOM.createPortal(
            <CoinDescription theme={themeStatus} coinName={onCoinId} />,
            document.getElementById("modal")
          )}
        
        </>
    )
}
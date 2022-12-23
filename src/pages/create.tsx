import classNames from "classnames";
import CreationForm, { CreationValues } from "modules/CreationPage/CreationForm";
import type { NextPage } from "next";
import useNFTMarket from "state/nft-market";
import useSigner from "state/nft-market/signer";
import CreationPage from "../modules/CreationPage";

const Create: NextPage = () => {

 const{signer} = useSigner();
 const { createNFT} = useNFTMarket();
 

  
  return (
    <div 
    className={classNames("flex h-full w-full flex-col" , {
      "items-center justify-center": signer,
    })}>
 {signer ? < CreationForm onSubmit={createNFT}/> : "Connect your Wallet"}
    </div>
  );
};

export default Create;

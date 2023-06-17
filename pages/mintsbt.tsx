// @ts-nocheck
import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
} from "@chakra-ui/react";
import { Masa } from "@masa-finance/masa-sdk";
import { ethers } from "ethers";


const ASBTForm = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [baseTokenUri, setBaseTokenUri] = useState("");
  const [adminAddress, setAdminAddress] = useState("");
const [masa, setMasa] = useState(null);
  // with metamask
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined" && window.ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        
        const masa = new Masa({
            signer,
            networkName: "goerli",
        });
        setMasa(masa);
    }
  }
, []);
// by default Masa SDK will assume the provider points to ethereum mainnet and
// will load contracts accordingly. If you plan to connect to a different network
// the networkName must be specified i.e. like this: networkName: "goerli"

  console.log(masa,"masa init");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform your logic here with the form data
    console.log("Deploying ASBT contract");
    console.log(`Name: ${name}`);
    console.log(`Symbol: ${symbol}`);
    console.log(`Base Token URI: ${baseTokenUri}`);
    console.log(`Admin Address: ${adminAddress}`);

    async function deployASBT() {

        const address = await masa.sbt.deployASBT(
            name,
            symbol,
            baseTokenUri,
            adminAddress
        );
        
        if (!address) {
            console.error("Deployment failed!");
        }
    };
    deployASBT();
    // Reset the form fields
    setName("");
    setSymbol("");
    setBaseTokenUri("");
    setAdminAddress("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Name of the SBT</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Ticker of the SBT</FormLabel>
          <Input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>URL for the metadata image</FormLabel>
          <Input
            type="text"
            value={baseTokenUri}
            onChange={(e) => setBaseTokenUri(e.target.value)}
            required
          />
        </FormControl>

        <FormControl>
          <FormLabel>Admin Address</FormLabel>
          <Input
            type="text"
            value={adminAddress}
            onChange={(e) => setAdminAddress(e.target.value)}
          />
        </FormControl>

        <Button type="submit" colorScheme="blue">
          Deploy ASBT Contract
        </Button>
      </VStack>
    </form>
  );
};

export default ASBTForm;

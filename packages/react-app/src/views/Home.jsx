import { useContractReader } from "eth-hooks";
import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import { ethers } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Address, Balance, Events } from "../components";
import TextArea from "antd/lib/input/TextArea";

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({
  purpose,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const [daoAddress, setDaoAddress] = useState("0x...");
  const [delegateAddress, setDelegateAddress] = useState("0x... or .eth or .lens");
  const [message, setMessage] = useState("I want to signal that I am stepping down from participating in this DAO governance. blahblahblah");
  const { TextArea } = Input;

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 600, margin: "auto", marginTop: 64 }}>
        <h2>Stepping out and delegate:</h2>
        <h4> DAO Address I want to stepping out and delegate: </h4>
        <div style={{ margin: 8 }}>
          <Input
            placeholder={daoAddress}
            onChange={e => {
              setDaoAddress(e.target.value);
            }}
          />
          <h4> Recommended delegate address for my delegators : </h4>
          <Input
            placeholder={delegateAddress}
            onChange={e => {
              setDelegateAddress(e.target.value);
            }}
          />
          <h4> Put a message with you stepping out act : </h4>
          <TextArea
            placeholder={message}
            onChange={e => {
              setMessage(e.target.value);
            }}
          />
          <Button
            style={{ marginTop: 8 }}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              console.log(daoAddress);
            }}
          >
            Stepping out
          </Button>
        </div>
      </div>

    </div>
  );
}

export default Home;

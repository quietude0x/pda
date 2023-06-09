import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";
import { SyncOutlined } from "@ant-design/icons";

import { Address, Balance, Events } from "../components";

export default function Report({
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
  const [reportedAddress, setDelegateAddress] = useState("0x or .eth or .lens");
  const [message, setMessage] = useState("I want to report that a delegate has stepped down from participating in this DAO governance. blahblahblah");
  const { TextArea } = Input;

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 600, margin: "auto", marginTop: 64 }}>
        <h2>Report:</h2>
        <h4> Reported Address:</h4>
        <Input
          placeholder={reportedAddress}
          onChange={e => {
            setDelegateAddress(e.target.value);
          }}
        />
        <h4> Dao address of the reported address</h4>
        <div style={{ margin: 8 }}>
          <Input
            placeholder={daoAddress}
            onChange={e => {
              setDaoAddress(e.target.value);
            }}
          />

          <h4> Put a message with your report : </h4>
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
            Report
          </Button>
        </div>
      </div>

    </div>
  );
}

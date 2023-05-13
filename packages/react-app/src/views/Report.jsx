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
  const [daoAddress, setDaoAddress] = useState("...");
  const [delegateAddress, setDelegateAddress] = useState("...");
  const [message, setMessage] = useState("...");

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 400, margin: "auto", marginTop: 64 }}>
        <h2>Report:</h2>
        <h4> DAO Address: {daoAddress}</h4>
        <div style={{ margin: 8 }}>
          <Input
            onChange={e => {
              setDaoAddress(e.target.value);
            }}
          />
          <h4> Delegate Address: {delegateAddress}</h4>
          <Input
            onChange={e => {
              setDelegateAddress(e.target.value);
            }}
          />
          <h4> Put a message with your report : </h4>
          <Input
            onChange={e => {
              setDelegateAddress(e.target.value);
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

      <Events />
    </div>
  );
}

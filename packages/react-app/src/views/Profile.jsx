import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";
import { SyncOutlined } from "@ant-design/icons";

import { Address, Balance, Events } from "../components";

export default function Profile({
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
  const [delegateAddress, setDelegateAddress] = useState("0x...");
  const [message, setMessage] = useState("I want to report that a delegate has stepped down from participating in this DAO governance. blahblahblah");
  const { TextArea } = Input;

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 600, margin: "auto", marginTop: 64 }}>
        <h2>Check your delegates gouvernance health:</h2>
        <div style={{ margin: 8 }}>
          <Input
            placeholder={delegateAddress}
            onChange={e => {
              setDelegateAddress(e.target.value);
            }}
          />
          <Button
            style={{ marginTop: 8 }}
            onClick={async () => {
              /* look how you call setPurpose on your contract: */
              /* notice how you pass a call back for tx updates too */
              console.log(delegateAddress);
            }}
          >
            Check 
          </Button>
        </div>
      </div>

    </div>
  );
}

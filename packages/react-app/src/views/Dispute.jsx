import { Button, Card, DatePicker, Divider, Input, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { utils } from "ethers";
import { SyncOutlined } from "@ant-design/icons";

import { Address, Balance, Events } from "../components";

export default function Dispute({
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
  const [reporterAddress, setReportedAddress] = useState("0x...");
  const [message, setMessage] = useState("I want to dispute that report. blahblahblah");
  const { TextArea } = Input;

  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 600, margin: "auto", marginTop: 64 }}>
        <h2>Dispute:</h2>
        <h4> Reporter tx address:</h4>
        <Input
          placeholder={reporterAddress}
          onChange={e => {
            setReportedAddress(e.target.value);
          }}
        />
        <h4> Dao address of the reporter address</h4>
        <div style={{ margin: 8 }}>
          <Input
            placeholder={reporterAddress}
            onChange={e => {
              setReportedAddress(e.target.value);
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
              console.log(reporterAddress);
            }}
          >
            Dispute
          </Button>
        </div>
      </div>
    </div>
  );
}

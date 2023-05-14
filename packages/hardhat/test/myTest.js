const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Dispute", function () {
  const addresses = [];
  let dispute;

  const wallet = ethers.Wallet.createRandom();
  const wallet1 = ethers.Wallet.createRandom();
  const wallet2 = ethers.Wallet.createRandom();
  addresses.push(wallet.address);
  addresses.push(wallet1.address);
  addresses.push(wallet2.address);

  beforeEach(async function () {
    const Dispute = await ethers.getContractFactory("pda_contract");
    dispute = await Dispute.deploy();
    await dispute.deployed();
  });

  it("should add disputes and get them correctly", async function () {
    await dispute.addDispute(addresses[1], addresses[2], "msg1");
    await dispute.addDispute(addresses[1], addresses[3], "msg2");

    const disputes = await dispute.disputes(addresses[1]);

    expect(disputes.length).to.equal(2);
    expect(disputes[0].disputer).to.equal(addresses[1]);
    expect(disputes[0].disputed).to.equal(addresses[2]);
    expect(disputes[0].msg).to.equal("msg1");
    expect(disputes[0].resolved).to.equal(false);
    expect(disputes[1].disputer).to.equal(addresses[1]);
    expect(disputes[1].disputed).to.equal(addresses[3]);
    expect(disputes[1].msg).to.equal("msg2");
    expect(disputes[1].resolved).to.equal(false);
  });

  it("should get the correct report", async function () {
    await dispute.addDispute(addresses[1], addresses[2], "msg1");
    await dispute.addDispute(addresses[1], addresses[3], "msg2");
    await dispute.addDispute(addresses[2], addresses[3], "msg3");

    const report = await dispute.getReport(addresses[1]);

    expect(report.totalDisputes).to.equal(2);
    expect(report.totalResolved).to.equal(0);

    const report2 = await dispute.getReport(addresses[2]);

    expect(report2.totalDisputes).to.equal(1);
    expect(report2.totalResolved).to.equal(0);

    const report3 = await dispute.getReport(addresses[3]);

    expect(report3.totalDisputes).to.equal(2);
    expect(report3.totalResolved).to.equal(0);
  });
});

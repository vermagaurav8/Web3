import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";
describe("Hello World", () => {
    it("should get the message", async () => {
        const HW = await ethers.getContractFactory("HelloWorld");
        const hello = await HW.deploy();
        await hello.deployed();

        expect(await hello.hello()).to.equal("Hello, World!!");
    });
});
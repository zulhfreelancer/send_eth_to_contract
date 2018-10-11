const tc = artifacts.require("TestContract");

contract('TestContract', async (accounts) => {

    let instance;

    // Runs before all tests in this block.
    // Read about .new() VS .deployed() here:
    // https://twitter.com/zulhhandyplast/status/1026181801239171072
    before(async () => {
        instance = await tc.new();
    })

    it('TestContract balance should starts with 0 ETH', async () => {
        let balance = await web3.eth.getBalance(instance.address);
        assert.equal(balance, 0);
    })

    it('TestContract balance should has 1 ETH after deposit', async () => {
        let one_eth = web3.toWei(1, "ether");
        await web3.eth.sendTransaction({from: accounts[1], to: instance.address, value: one_eth});
        let balance_wei = await web3.eth.getBalance(instance.address);
        let balance_ether = web3.fromWei(balance_wei.toNumber(), "ether");
        assert.equal(balance_ether, 1);
    })

})

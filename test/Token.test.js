const Token = artifacts.require("Token")

contract("Token", (accounts) =>(
before(async () =>{
 token = await Token.deployed()
 console.log("Token Address: ", token.address)
}),

it("gives the owner of the token 1M tokens", async () => {
    let balance = await token.balanceOf(accounts[0])
    balance = web3.utils.fromWei(balance,'ether')
    assert.equal(balance, '1000000', "Balance should be equal to 1M tokens for contract creator") 
}),
it("can transfer tokens between accounts", async () =>{
    let amount = web3.utils.toWei('1000','ether')
    await token.transfer(accounts[1], amount, { from: accounts[0]})

    let balance = await token.balanceOf(accounts[1])
    balance = web3.utils.fromWei(balance,'ether')
    assert.equal(balance, '1000', "Balance should be equal to 1K tokens for contract creator") 
})
)) 
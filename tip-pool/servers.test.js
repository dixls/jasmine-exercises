describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update the server table', function () {
    submitServerInfo();
    sumPaymentTotal('tipAmt');
    updateServerTable();
    
    expect(document.getElementById('server1').lastElementChild.innerText).toEqual('$0.00')
  });

  afterEach(function() {
    // teardown logic
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = ''; 
  });
});

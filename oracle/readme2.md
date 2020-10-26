

## Logs

/var/log/docker/

tail -f senderhome_1/docker.log

## ERROR

### mod file

/var/oracle/
/var/oracle/tmp

sudo docker cp  631824a346bd:/mono/oracle/src/confirmRelay.js /var/oracle/
sudo docker cp  631824a346bd:/mono/oracle/src/confirmRelay.js /var/oracle/tmp

sudo docker cp  /var/oracle/confirmRelay.js  631824a346bd:/mono/oracle/src/

sudo docker cp  631824a346bd:/mono/oracle/src/sender.js /var/oracle/
sudo docker cp  631824a346bd:/mono/oracle/src/sender.js /var/oracle/tmp

sudo docker cp  /var/oracle/sender.js  631824a346bd:/mono/oracle/src/

sudo docker cp  631824a346bd:/mono/oracle/src/tx/sendTx.js /var/oracle/
sudo docker cp  631824a346bd:/mono/oracle/src/tx/sendTx.js /var/oracle/tmp

sudo docker cp  /var/oracle/sendTx.js  631824a346bd:/mono/oracle/src/tx/

docker restart 631824a346bd

### Previously sent transaction is stuck

Oct 12 19:44:35 POABridge oracle_bridge_senderhome_1/9cc60edfaa84[26163]: {"level":30,"time":1602503075654,"msg":"Previously sent transaction is stuck, updating gasPrice: 1000000000 -> 1000000000","name":"sender-home","v":1}
Oct 12 19:44:35 POABridge oracle_bridge_senderhome_1/9cc60edfaa84[26163]: {"level":30,"time":1602503075654,"msg":"Gas price returned from the oracle didn't increase, will reinspect this transaction later","name":"sender-home","v":1}

### Gas Price API is not available

{"level":50,"time":1602509157114,"msg":"Gas Price API is not available. Only absolute URLs are supported","name":"sender-home","module":"gasPrice","v":1}


## docker oracle

docker pull poanetwork/tokenbridge-oracle:2.6.0-rc1

env ORACLE_VALIDATOR_ADDRESS= '0x4456D699Fb0b98350A910B912c6fA035148b1b6F'
  env ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY='4fd0d772b80becd5e801b421c9a7ae02dc0a775d507499c7498464238d782e48' docker-compose up --d


  env ORACLE_VALIDATOR_ADDRESS='0x4456D699Fb0b98350A910B912c6fA035148b1b6F'
  env ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY='4fd0d772b80becd5e801b421c9a7ae02dc0a775d507499c7498464238d782e48'

  docker-compose up -d --build


### estimateGas

  curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"to":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","data":"0xa9059cbb0000000000000000000000007cb57b5a97eabe94205c07890be4c1ad31e486a80000000000000000000000000000000000000000000000000000000000000001"}],"id":34}' https://rpc.elaeth.io

  curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"to":"0xB987bc9528967d6F8e8103F409ABF9Fb96FBb254"}],"id":8976545783871}' https://rpc.elaeth.io


"[ethjs-rpc] rpc error with payload {"id":8976545783671,"jsonrpc":"2.0","params":[{"from":"0x8d8d8de95df82455c887661ada3f3fa07e93fbbd","value":"0xff","to":"0xc1140d92641587478b0d5d5fd2c82a5a47b4fb6b","gas":"0x73f780"}],"method":"eth_estimateGas"} [object Object]"


  curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"from":"0x8d8d8de95df82455c887661ada3f3fa07e93fbbd","value":"0xff","to":"0xc1140d92641587478b0d5d5fd2c82a5a47b4fb6b"}],"id":8976545783871}' https://rpc.elaeth.io


  curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"from":"0x8d8d8de95df82455c887661ada3f3fa07e93fbbd","value":"0xff","to":"0xc1140d92641587478b0d5d5fd2c82a5a47b4fb6b","gas":"0x73f780"}],"id":8976545783871}' https://kovan.infura.io/v3/945c07d86744491cb15c4547227b2dfa


  curl -H "Content-Type: application/json" --request POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{"from":"0x8d8d8de95df82455c887661ada3f3fa07e93fbbd","value":"0xff","to":"0xc1140d92641587478b0d5d5fd2c82a5a47b4fb6b"}],"id":8976545784871}'  http://node-testnet-017.elastos.org:20636


  env ORACLE_VALIDATOR_ADDRESS=<validator address> \
  env ORACLE_VALIDATOR_ADDRESS_PRIVATE_KEY=667ef1f252d1cfc372784acc08152612c913b01b5c490c52064d6b26435f3285 \
  docker-compose up --d
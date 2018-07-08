# node-bigfile-example

## Como rodar

1. Execute `chmod +x ./generate-big-file.sh` para poder dar permissão de execução para o script
2. Execute `./generate-big-file.sh` para criar um arquivo de 400mb

Agora você pode rodar `node big-file-slow.js` para o teste com o arquivo sendo servido da memória e `node big-file-fast.js` para o modelo de streams.

> Abra o gerenciador de tarefas do seu computador e monitore o uso de memória do Node durante o tempo de execução

# Exemplos de Streams com a API vanilla do Javascript

## Uso

Execute um servidor local HTTP (podendo ser com qualquer servidor) acesse a raiz `index.html`

- [Usando PHP](https://secure.php.net/manual/pt_BR/features.commandline.webserver.php)
- [Usando lite-server](https://github.com/johnpapa/lite-server)
- [Usando http-server](https://www.npmjs.com/package/http-server)
- [Usando Python](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server)

Exemplos:
* [Simple stream pump](http://mdn.github.io/dom-examples/streams/simple-pump/): This example shows how to consume a ReadableStream and pass its data to another.
* [Grayscale a PNG](http://mdn.github.io/dom-examples/streams/grayscale-png/): This example shows how a ReadableStream of a PNG can be turned into grayscale.
* [Simple random stream](http://mdn.github.io/dom-examples/streams/simple-random-stream/): This example shows how to use a custom stream to generate random strings, enqueue them as chunks, and then read them back out again.
* [Simple tee example](http://mdn.github.io/dom-examples/streams/simple-tee-example/): This example extends the Simple random stream example, showing how a stream can be teed and both resulting streams can be read independently.
* [Simple writer](http://mdn.github.io/dom-examples/streams/simple-writer/): This example shows how to to write to a writable stream, then decode the stream and write the contents to the UI.
* [Transform binary chunks to strings](http://mdn.github.io/dom-examples/streams/strings-transform-stream/): In this example, binary data chunks of a text file are converted to string lines by a [```TransformStream```](https://developer.mozilla.org/en-US/docs/Web/API/TransformStream).
* [Unpack chunks of a PNG](http://mdn.github.io/dom-examples/streams/png-transform-stream/): This example shows how [```pipeThrough()```](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough) can be used to transform a ReadableStream into a stream of other data types by transforming a data of a PNG file into a stream of PNG chunks.

> Todos estes exemplos foram retirados do [repositório oficial da Mozilla](https://github.com/mdn/dom-examples/tree/master/streams)

# Setting up the visual vm for the remote

* Download jvisualVM.
* In java app add the following paramas
> Add the jmxremote params
```
DEFAULT_JVM_OPTS='"-Xms1g" "-Xmx25g" "-XX:MaxMetaspaceSize=13g" "-Dcom.sun.management.jmxremote.port=7091" "-Dcom.sun.management.jmxremote.rmi.port=7091" "-Dcom.sun.management.jmxremote.authenticate=false" "-Dcom.sun.management.jmxremote.ssl=false" "-Djava.rmi.server.hostname=127.0.0.1"'
```
* Local Farward the tunnel request
```
ssh -L 127.0.0.1:7091:127.0.0.1:7091 sapan@remotemachine
// if remote machine is in ssh config
ssh -L 127.0.0.1:7091:127.0.0.1:7091 remotemachine
// syntax
ssh -L <Localhost>:<localPort>:<remotehost>:<remateport> <remotemachine>
```
* now open visualvm and add the jmx with `localhost:7091`

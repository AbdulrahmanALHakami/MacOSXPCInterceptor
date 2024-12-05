var xpc = Module.findExportByName("libxpc.dylib", "xpc_connection_create_mach_service");

Interceptor.attach(xpc, {
    onEnter: function (args) {
        var serviceName = args[0].readUtf8String();
        console.log("[Intercepted XPC Service]: " + serviceName);
    },
    onLeave: function (retval) {
        console.log("[XPC Service Returned]: " + retval);
    }
});

var xpc_send = Module.findExportByName("libxpc.dylib", "xpc_connection_send_message");

Interceptor.attach(xpc_send, {
    onEnter: function (args) {
        console.log("[XPC Message Sent]: " + args[1].toString());
    }
});


var xpcCreateService = Module.findExportByName("libxpc.dylib", "xpc_connection_create_mach_service");

Interceptor.attach(xpcCreateService, {
    onEnter: function (args) {
        var serviceName = args[0].readUtf8String();
        console.log("[XPC Service Intercepted]: " + serviceName);

        if (serviceName === "<Enter.Your.XPC.Root.Sevice.Here>") {
            console.log("[Targeting Root Service]: " + serviceName);
        }
    }
});


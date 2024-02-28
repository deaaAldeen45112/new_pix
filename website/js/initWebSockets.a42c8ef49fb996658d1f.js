(self.webpackChunk = self.webpackChunk || []).push([
    [7442], {
        81456: (o, e, n) => {
            "use strict";
            n.r(e), n.d(e, {
                default: () => a
            });
            var i = n(84554),
                s = n(86809),
                t = n.n(s);
            const a = () => {
                window.io = t(), window.Echo = new i.Z({
                    broadcaster: "socket.io",
                    host: window.location.hostname,
                    app_id: "ae00c35d345e5f7e",
                    options: {
                        pingTimeout: 6e4
                    }
                })
            }
        },
        77020: () => {}
    }
]);
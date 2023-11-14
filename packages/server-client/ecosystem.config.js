module.exports = {
    apps: [
        {
            "name": "pubfree-server-client",
            "script": "./dist/index.js",
            "exec_mode": "fork",
            "log_date_format": "YYYY-MM-DD HH:mm:ss.SSS"
        }
    ],
};

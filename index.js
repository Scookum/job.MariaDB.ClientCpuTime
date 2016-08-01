module.exports = {
  query: "select * information_schema.CLIENT_STATISTICS",
  filter: { client: "client", CPU_TIME: "CPU_TIME" },
  target: "MARIADB",
  initializer: function() {},
  finalizer: function() {}
};

let Environment = (function() {
  const platformBackend = 'http://180.168.96.174:38888/platform';
  return {
    getPlatformBackend() {
      return platformBackend;
    },
  };
})();

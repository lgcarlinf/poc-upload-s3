import ServerBootstrap from "./bootstrap/server.bootstrap";

const serverBootstrap = new ServerBootstrap();

(async () => {
  try {
    await serverBootstrap.initialize().then();
  } catch (error) {
    console.log(error);
  }
})();

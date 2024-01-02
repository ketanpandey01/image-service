import {Router} from 'express'

export const rootRouter = (authentication) => {
  const router = Router();
//   router.use(authentication);
  
  router.get("/", (req, res) => {
    return res.json({ message: "Welcome to the application" });
  });

  return router
};
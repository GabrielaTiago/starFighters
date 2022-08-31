import { Router } from "express";
import battleRouters from "./battleRouters";
import rankingRouters from "./rankingRouters";

const router = Router();

router.use(battleRouters);
router.use(rankingRouters);

export {router};
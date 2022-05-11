import { Router } from "express";
import * as controllerPage from "../controllers/pageController";
import * as controllerSearch from "../controllers/searchController";


const router = Router();

router.get('/', controllerPage.home);
router.get('/dogs', controllerPage.dogs);
router.get('/dogs', controllerPage.fishes);
router.get('/dogs', controllerPage.cats);

router.get('/search', controllerSearch.search);

export default router;

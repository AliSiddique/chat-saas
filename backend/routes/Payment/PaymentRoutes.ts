import express from 'express';
import { protect } from '../../middleware/authMiddleware';
import { CreateCheckout, Webhooks } from '../../controllers/Payment/PaymentController';

const router = express.Router();

router.post("/subscribe", CreateCheckout);
// router
//   .route('/subscribe')
//   .post(protect, CreateCheckout);
  router
  .route('/webhooks')
  .post(protect, Webhooks);
export default router;

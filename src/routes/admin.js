import express from 'express';
import { checkToken } from '../config/safeRoutes';
import adminController from '../controller/adminController';

const router = express.Router();

router.post('/register', adminController.adminRegister);
router.post('/login', adminController.adminLogin);
router.post('/logout', checkToken, adminController.adminLogout);
router.get('/getAllAdmins', adminController.getAllAdmin);
router.get('/getAllUsers', adminController.getAllUsers);
router.post('/checkSession', checkToken, (_req, res) => {
  res.json({ success: true });
});
router.delete('/delete/:id', adminController.deleteUser);
router.post('/editUser/:id', adminController.editUserDetails);
export default router;

import { Router } from 'express';
import ReimbursementService, { docid } from '../services/reimbursement/reimbursement.service';
import log from '../utils/log';

const reimbursementRouter = Router();

/**
 * This route will:
 * retrieve logged in user's bin
 */
// reimbursementRouter.get('/', async (req, res) => {
//   const { user } = req.session;

//   try {
//     if(user) {
//       const didPopulateBin = await ReimbursementService.populateUserBin(user);
//       if(didPopulateBin) {
//         log.debug(didPopulateBin);
//         res.send(didPopulateBin);
//       }
//     }
//   } catch(err) {
//     log.error(err);
//     res.sendStatus(400);
//   }
// });

reimbursementRouter.get('/all', async (req, res) => {
  try {
    const didPopulateBin = await ReimbursementService.getAll();
    if(didPopulateBin) {
      log.debug(didPopulateBin);
      res.send(didPopulateBin);
    }
  } catch(err) {
    log.error(err);
    res.sendStatus(400);
  }
});

/**
 * This route will:
 * create logged in user's reimburement request
 */
reimbursementRouter.post('/reimbursements', async (req, res) => {
  let currentUserRole: string = '';
  let currentUsername: string = '';

  if(req.session.user) {
    currentUserRole = req.session.user.role;
    currentUsername = req.session.user.username;
  }

  const {
    tuition,

  } = req.body;

  try {
    if(currentUserRole === 'Employee') {
      const isSubmissionSuccessful = await ReimbursementService.constructNewReimbursementRequest(
        currentUsername,
        'Pending Approval',
        tuition,
        docid,
      );

      if(isSubmissionSuccessful) {
        res.json(201);
      } else {
        res.sendStatus(400);
      }
    }
  } catch(err) {
    log.error(err);
    res.sendStatus(500);
  }
});

export default reimbursementRouter;
/**
 * This route will:
 * update logged a user's reimburement request's grade
 */
// reimbursementRouter.put('/:docid', async (req, res) => {
//   const { docid } = req.body;
//   const { grade } = req.body;
//   console.log(docid, grade, req.body);
//   res.json(await ReimbursementService.updateFinalGrade(docid, grade));
// });

// reimbursementRouter.put('/:docid/status', async (req, res) => {
//   const { docid } = req.body;
//   const { status } = req.body;
//   const { comments } = req.body;
//   res.json(await ReimbursementService.updateStatus(docid, status, comments));
// });

// reimbursementRouter.put('/:docid/amount', async (req, res) => {
//   const { docid } = req.body;
//   const { amount } = req.body;
//   const { comment } = req.body;
//   const { isExceedingFunds } = req.body;
//   res.json(await ReimbursementService.updateAmount(docid, amount, comment, isExceedingFunds));
// });

// reimbursementRouter.get('/pending', async (req, res) => {
//   res.json(await ReimbursementService.getPendingReimbursements());
// });

// reimbursementRouter.delete('/:docid', async (req, res) => {
//   const { docid } = req.params;
//   res.json(await ReimbursementService.deleteRequest(docid));
// });

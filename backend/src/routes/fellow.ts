import { Router, Request, Response } from 'express';
import Fellow from '../models/fellow.model';

const router = Router();

router.route('/').get(async (req: Request, res: Response) => {
  try {
    const fellows = await Fellow.find({
      fellowname: { $ne: null },
      emailladdress: { $ne: null },
      fellowmessage: { $ne: null },
    });
    res.json(fellows);
  } catch (err: any) {
    res.status(400).json({ error: `Error fetching fellows: ${err.message}` });
  }
});

router.route('/add').post(async (req: Request, res: Response) => {
  const { fellowname, companyname, websitename, emailladdress, fellowmessage } = req.body;

  if (!fellowname || !emailladdress || !fellowmessage) {
    return res.status(400).json({
      error: 'Fellowname, Email Address, and Fellow Message are required',
    });
  }

  const newFellow = new Fellow({
    fellowname,
    companyname,
    websitename,
    emailladdress,
    fellowmessage,
  });

  try {
    await newFellow.save();
    // res.json('Fellow added!');
    console.log(`${fellowname}, fellow added successfully`);
    res.status(200).json({message: 'fellow added successfully!'});
  } catch (err: any) {
    if (err.code === 11000) {
      return res.status(400).json({
        error: 'Duplicate key error: Fellowname or Email Address must be unique',
      });
    }
    res.status(400).json({ error: `Error adding fellow: ${err.message}` });
  }
});

export default router;

export default class Reimbursement {
  constructor(
      public tuitionType: Tuition,
      public requestBy: string = '',
      public state: Status,
      public id: any,
  ) {}
}

export type Status = 'Accepted' | 'Pending Approval' | 'Rejected';

export type Tuition = 'University Course' | 'Seminar' | 'Certification Prep Class' | 'Certification' | 'Technical Training' | 'Other';

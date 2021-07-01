export default class User {
    constructor(
      public username: string = '',
      public password: string = '',
      public role: Role,
      public id: string = '',
    ) {}
  }

export type Role = 'Employee' | 'Direct Supervisor' | 'Department Head' | 'Benefits Coordinator';
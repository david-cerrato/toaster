export interface Toast {
    msg: string;
    type: 'default' | 'warning' | 'error' | 'info';
    id: string;
  }
import type {ToastOptions} from '@ionic/core';

export {};

declare global {
  interface AlwatrSignals {
    // readonly 'job-list': Array<Job>;
    readonly toast: Partial<ToastOptions> & {message: string};
  }
  // interface AlwatrRequestSignals {
  //   readonly 'job-list': Record<string, never>;
  // }
}

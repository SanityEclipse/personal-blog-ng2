import { Injectable } from '@angular/core';

import { Entry } from './entry';
import { ENTRIES } from './blog-entries';

@Injectable()
  export class EntryService {
    getEntries(): Promise<Entry[]> {
      return Promise.resolve(ENTRIES);
    }
  }

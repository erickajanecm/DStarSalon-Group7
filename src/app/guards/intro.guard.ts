import { Injectable } from '@angular/core';
import { CanLoad,Router } from '@angular/router';
import { Observable } from 'rxjs';

export const INTRO_KEY = 'intro-seen';

import { Plugins } from '@capacitor/core';
const { storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  constructor(private router: Router) { }

  async canLoad(): Promise<boolean> {
    const hasSeenIntro = await storage.get({key: INTRO_KEY});

    if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/intro', { replaceUrl: true });
      return true;
    }
  }
}

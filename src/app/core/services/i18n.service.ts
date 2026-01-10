// src/app/core/services/i18n.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class I18nService {

  private lang = 'es';
  private translations: any = {};

  constructor(private http: HttpClient) {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.lang = savedLang;
      this.load(savedLang);
    }
  }

  async load(lang: string) {
    this.lang = lang;
    localStorage.setItem('lang', lang);

    this.translations = await this.http
      .get(`./assets/i18n/${lang}.json`)
      .toPromise();
  }

  t(path: string): string {
    return path
      .split('.')
      .reduce((o, k) => o?.[k], this.translations) ?? path;
  }

  // 👇 alias para el template
  translate(path: string): string {
    return this.t(path);
  }

  get currentLang() {
    return this.lang;
  }
}

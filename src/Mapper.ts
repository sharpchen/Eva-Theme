import { Palette } from './Palette';
import JSONC from 'jsonc-parser';

const themeNames: string[] = ['Light', 'Dark']
  .reduce(
    (sum, current) => {
      const style = ['Italic', 'Bold'];
      style.forEach(x => sum.push([current, x].join('-')));
      sum.push([current, ...style].join('-'));
      return sum;
    },
    ['Dark', 'Light'],
  )
  .map(x => `Eva-${x}`);

console.log(themeNames);

export type TextmateScopeGroup = {
  name?: string;
  scope: string;
  settings: { fontStyle?: '' | 'bold' | 'italic' | 'italic bold'; foreground?: string };
};

export type TextmateTheme = {
  name: string;
  tokenColors: TextmateScopeGroup[];
};

export type HighlightAs =
  | 'none' // none for setting the style as null
  | keyof {
      [K in keyof Palette as Palette[K] extends object ? never : K]: any;
    };

import * as fs from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
function readLegacyThemeJson(filename: string): TextmateTheme {
  const thisFile = fileURLToPath(import.meta.url);
  const thisDir = dirname(thisFile);
  const path = resolve(thisDir, `../legacy//${filename}.json`);
  const content = fs.readFileSync(path, 'utf-8');
  return JSONC.parse(content) as TextmateTheme;
}

import styleHandler from './StyleHandler';

export interface HighlightMapping {
  map(
    as: HighlightAs,
    scope: string | string[],
    fn?: (p: Palette, as: HighlightAs) => TextmateScopeGroup['settings'],
  ): HighlightMapping;

  build(): void;
}

import palette from './Palette';
class HighlightMapper implements HighlightMapping {
  store: { scope: string; fn?: Function; as: HighlightAs }[] = [];
  map(
    as: HighlightAs,
    scope: string | string[],
    fn?: (p: Palette, as: HighlightAs) => TextmateScopeGroup['settings'],
  ): this {
    scope = typeof scope === 'string' ? scope : (scope as string[]).join(',');
    this.store.push({ scope, fn, as });
    return this;
  }
  build(): void {
    themeNames.forEach(name => {
      const p = name.includes('Light') ? palette.light : palette.dark;
      const legacy = readLegacyThemeJson(name);

      for (const i of this.store) {
        const { fn, as, scope } = i;
        const custom = fn ? fn(p, as) : {};
        const required = styleHandler.handle(name)(p, as);
        legacy.tokenColors.push({ scope: scope, settings: { ...required, ...custom } });
      }

      const thisFile = fileURLToPath(import.meta.url);
      const thisDir = dirname(thisFile);
      const path = resolve(thisDir, `../themes/${name}.json`);
      fs.writeFileSync(path, JSON.stringify(legacy, null, 2), 'utf8');

      console.log(`${name} generated`);
    });
  }
}

export default new HighlightMapper();

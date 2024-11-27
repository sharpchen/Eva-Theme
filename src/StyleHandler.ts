import { Palette } from './Palette';
import { HighlightAs, TextmateScopeGroup } from './Mapper';

export type HandlerFunc = (p: Palette, as: HighlightAs) => Partial<TextmateScopeGroup['settings']>;

abstract class StyleHandler {
  next: StyleHandler;
  abstract capable(themeName: string): boolean;
  abstract handler: HandlerFunc;
  chain(next: StyleHandler): StyleHandler {
    this.next = next;
    return next;
  }
  handle(themeName: string): HandlerFunc {
    return this.capable(themeName) ? this.handler : this.next.handle(themeName);
  }
}

class NormalHanlder extends StyleHandler {
  handler: HandlerFunc = (p, as) => ({
    foreground: p[as],
  });
  capable(_: string): boolean {
    return true;
  }
}

class BoldHandler extends StyleHandler {
  handler: HandlerFunc = (p, as) => ({
    fontStyle: 'bold',
    foreground: p[as],
  });
  capable(themeName: string): boolean {
    return themeName.includes('Bold') && !themeName.includes('Italic');
  }
}

class ItalicHandler extends StyleHandler {
  handler: HandlerFunc = (p, as) => ({
    fontStyle: 'italic',
    foreground: p[as],
  });
  capable(themeName: string): boolean {
    return themeName.includes('Italic') && !themeName.includes('Bold');
  }
}

class ItalicBoldHandler extends StyleHandler {
  handler: HandlerFunc = (p, as) => ({
    fontStyle: 'italic bold',
    foreground: p[as],
  });
  capable(themeName: string): boolean {
    return themeName.includes('Bold') && themeName.includes('Italic');
  }
}

const chain = new BoldHandler()
  .chain(new ItalicHandler())
  .chain(new ItalicBoldHandler())
  .chain(new NormalHanlder());

export default chain;

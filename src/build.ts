import fg from 'fast-glob';
import highlight from './Mapper';

// execute modules for all languages
await Promise.all(
  fg.globSync('./languages/**/*.ts').map(mod => {
    return import(mod.substring(0, mod.lastIndexOf('.')));
  }),
);

highlight.build();

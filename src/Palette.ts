const light = {
  declarative: '#7C4DFF',
  function: '#437AED',
  type: '#00BEC4',
  self: '#FA278E',
  primitive: '#EF8ED8',
  number: '#FF6D12',
  parameter: '#F0AA0B',
  typeparam: '#F0AA0B',
  string: '#53A053',
  logical: '#C838C6',
  operator: '#00BEC4',
  property: '#CD6069',
  comment: '#A9A9AA',
  variable: '#5D5D5F',
  background: '#EBEEF5',
  panelBackground: '#e1e4eb',
  warning: '#FB942F',
  error: '#E45454',
  info: '#4480F4',
  git: {
    diffAdded: '#40AD41',
    diffDeleted: '#F14C4C',
    diffModified: '#9277E6',
    stagedAdded: '#83C654',
    ignored: '#A9A9AA',
    renamed: '#F3AD01',
    stagedDeleted: '#CD6069',
    stagedModified: '#D73BD5',
    untracked: '#3EC141',
  },
  inlayHint: {
    fg: '#888888',
    bg: '#e5e8ee',
  },
  escape: '#888888',
  punctuation: '#727376',
} as const;

type LooseInfer<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends number
      ? number
      : T[K] extends boolean
        ? boolean
        : T[K] extends []
          ? any[]
          : T[K] extends object
            ? LooseInfer<T[K]>
            : T[K];
};

export type Palette = LooseInfer<typeof light>;

const dark = {
  inlayHint: {
    fg: '#8A97C3',
    bg: '#343744',
  },
  git: {
    stagedAdded: '#98C379',
    ignored: '#676E95',
    renamed: '#E4BF7F',
    stagedDeleted: '#E06C75',
    stagedModified: '#D365E5',
    untracked: '#3EC141',
    diffAdded: '#40AD41',
    diffDeleted: '#F14C4C',
    diffModified: '#A78CFA',
  },
  warning: '#EF973A',
  error: '#F36464',
  info: '#598DEF',
  panelBackground: '#21252b',
  declarative: '#A78CFA',
  function: '#6495EE',
  type: '#56B7C3',
  self: '#F02B77',
  primitive: '#FF6AB3',
  number: '#FF9070',
  parameter: '#E4BF7F',
  typeparam: '#E4BF7F',
  string: '#98C379',
  property: '#E06C75',
  logical: '#CF68E1',
  comment: '#676E95',
  operator: '#56B7C3',
  variable: '#B0B7C3',
  background: '#282C34',
  escape: '#8A97C3',
  punctuation: '#838FA7',
} satisfies Palette;

export default { dark, light };

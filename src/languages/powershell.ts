import highlight from '../Mapper';
highlight
  .map('function', ['storage.type.powershell'])
  .map('property', ['variable.other.member.powershell'])
  .map('type', 'storage.type.powershell', (p, _) => {
    return { fontStyle: 'bold', foreground: p.typeparam };
  });

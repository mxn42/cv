export default async url => {
  const response = await fetch(url);
  const css = (await response.text()).replace(/\/\*[^*]*\*\//g, '');
  let elems = css.match(/[^\{]+\{[^}]+\}/gi)
    .map(x => x.split`{`[0] || '')
    .reduce((a, x) => [...a, ...x.split`,`], [])
    .map(x => x.trim())
    .filter(x => x);
  console.groupCollapsed(`CSS: ${elems.length} custom elements in "${url}"`);
  console.log(elems.join(', '));
  console.groupEnd();
  return elems;
};

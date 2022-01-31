import tocMenu from './toc-menu.js';

const app = {
  title: 'CV Maxim Zorin -- Lead JavaScript Developer',
  template: `
    <header><nav></nav></header>
    <main></main>
    <footer>
      <figure>
        <a href="https://github.com/mxn42/cv" target="_blank">
          <img src="assets/github.png" alt="https://github.com/mxn42/cv">
        </a>
      </figure>
      <figure class="codewars">
        <a href="https://www.codewars.com/users/mxn42" target="_blank"></a>
      </figure>
    </footer>
  `
};

export default {
  async render() {
    document.title = app.title;
    const box = document.body.appendChild(document.createElement('div'));
    box.classList.add('box', 'loading');
    box.insertAdjacentHTML('beforeend', app.template);
    const cv = await fetch`../cv.md`;
    const md = markdownit({html: true, linkify: true, typographer: true});
    box.querySelector('main').innerHTML = md.render(await cv.text());
    box.querySelector('nav').appendChild(await tocMenu());
    hljs.highlightAll();
    box.classList.remove('loading');

    console.log('Test samples');
    let count = 0, issues = 0;
    for (let el of [...box.querySelectorAll('code')]) {
      count += 1;
      const samplejs = document.createElement('script');
      try {
        samplejs.textContent = el.textContent;
      } catch (e) {
        issues += 1;
      }
      document.body.appendChild(samplejs).remove();
    }
    console.log(`Samples ${count}:`, issues === 0 ? 'OK' : `issues ${issues}`);
  }
};

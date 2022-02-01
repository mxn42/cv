# Maxim Zorin — **JavaScript Developer**

<figure class="photo"><img src="mxn42-photo.jpg" alt="Maxim Zorin in winter" width="30%" align="right"></figure>

<aside data-toc-label="Contacts" data-toc-icon="bxs-user-detail">
<ul class="contacts">
<li><i class="bx bx-envelope"></i> <a href="mailto:maxim.zorin@gmail.com">maxim.zorin@gmail.com</a></li>
<li><i class="bx bxl-linkedin"></i> <a href="https://www.linkedin.com/in/maximzorin/">maximzorin</a></li>
<li><i class="bx bxs-map"></i> <a href="https://www.google.com/maps/place/St+Petersburg/">Saint Petersburg, Russia</a></li>
</ul>
</aside>

<a data-toc-label="About" data-toc-icon="bx-message-square-detail"></a>
\
My overall experience of more than 20 years, I have worked at Zodiac Systems (now part of Orion Innovation), Quest Software (Dell), and JetBrains. My current expertise is in the JavaScript stack. I hold a master’s degree in Math and CS from Moscow Pedagogical State University.

I'm deeply into JavaScript, and more I'm a JS fan. I have experience with other languages, including Python, and I'm sure JavaScript is the best.  

I love spending time with my family, also I enjoy traveling, hiking, canoeing, and playing board games.

<a data-toc-label="Experience" data-toc-icon="bx-history"></a>

## Experience

### IT: Programming, Management, Testing

- 2018-2021 **[Zodiac Systems](//zodiacsystems.com)** Lead JS Developer
- 2013-2018 **[Zodiac Systems](//zodiacsystems.com)** Head JS Technologies
- 2012-2013 **[JetBrains](//jetbrains.com)** Senior UI Developer
- 2010-2012 **[Zodiac Systems](//zodiacsystems.com)** Senior JS Developer
- 2006-2010 **[Quest Software](//quest.com)** Senior Software Developer
- 2004-2006 **[Quest Software](//quest.com)** C# Developer
- 2002-2004 **[Quest Software](//quest.com)** Head Quality Assurance
- 2000-2001 **Novalumen** Lead Quality Assurance
- 1999-2000 **[Goodwin](//goodwin-gmc.com)** Webmaster

<a data-toc-label="Projects" data-toc-icon="bx-code-alt"></a>

### Web and JavaScript projects

#### Last decade

- Embedded JS dev, web dev, and lead for solutions in Interactive TV, customer demos, internal web portals.
- Web dev a new version control system.
- Teach EcmaScript and Node courses in Polytech.

#### The 2000s

- Custom dev [Active Roles](https://www.oneidentity.com/products/active-roles/), JavaScripting ActiveDirectory and Windows.
- ASP<span>.</span>NET web dev (developer, QA head) user provisioning, [self-service management and security](https://www.oneidentity.com/products/password-manager/), [management ActiveDirectory](https://www.quest.com/products/recovery-manager-for-active-directory/), [recovery Exchange](https://www.quest.com/products/recovery-manager-for-exchange/), customize SharePoint.
- Web dev [tatastudio.ru](//www.tatastudio.ru/) _Tatasutdio film production company_
- <abbr title="Quality Assurance">QA</abbr> the 2nd version of [beeline.ru](//beeline.ru), one of the first interactive websites on the Internet.

#### Past millennium

- Web dev 1st version [goodwin-gmc.com](//goodwin-gmc.com/) _registration and comprehensive legal services_

<a data-toc-label="Education" data-toc-icon="bxs-graduation"></a>

## Education

### Contribution

- 2013-2021 **Anichkov Lyceum (school)** Computer Science Teacher
- 2014-2018 **SPB Polytechnic University** JavaScript Teacher
- 1995-1999 **Moscow City University** Computer Science Teacher

### Graduated

- 1992-1997 **Moscow Pedagogical State University** \
_**Master of Science**_, Mathematics and Computer Science
- Ancient artifacts: Specialist [Internet User](../assets/images/specialist-internet-user.jpg), Brainbench [HTML Programmer](../assets/images/brainbench-html-programmer.jpg)

<a data-toc-label="Skills" data-toc-icon="bx-cog"></a>

## Skills

### IT

- JavaScript full stack: **FE, BE, Embedded, Testing, Automation**, Vanilla dialect
- In active: Python, HTML, CSS, SQL, UML, and Markdown
- In background: Pascal, Delphi, C#, Perl, SSI, PHP, ASP<span>.</span>NET, VBScript, and PowerShell
- Draw and read: UML, SADT, and other diagrams
- OS: **Windows (from 3.1), Linux (Ubuntu, Mint)**
- Management: **up to 20 people team**
- Teach CS experience: **Upper primary schools, College, University**

### Soft

- Problem solving, Open mind, most of 4K

### Languages

- English **B1**
- Russian **fluent**

### Interests

- Mainly: Fatherhood
- Outdoors: Hiking, Canoeing, Active games
- Indoors: Board games (especially tafl, chess, go), Сard games (primarily poker)

<a data-toc-label="Sample" data-toc-icon="bxl-javascript"></a>

## Sample JavaScript

### Data Reverse

It's a solve of codewars kata [Data Reverse](https://www.codewars.com/kata/569d488d61b812a0f7000015). Time complexity O(n) because it swaps only <sup>n</sup>/<sub>2</sub> items and doesn't another. Space complexity O(1), so it uses only one space for the swap. It reverses in place, there isn't a hidden time or space complexity.

```javascript
const dataReverse = data => {
  let left, right, i, t;
  for (left = 0, right = data.length - 8; left < right; left += 8, right -= 8)
    for (i = 0; i < 8; ++i) {
      t = data[left + i];
      data[left + i] = data[right + i];
      data[right + i] = t;
    }
  return data;
};

// tests
const testcase = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
const control  = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
const result = dataReverse(testcase);
console.assert(result.length === control.length && result.every((x, i) => x === control[i]));
```

### All Elements in Two Binary Search Trees

It's a solve of leetcode problem [All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees).
Time: recursive walk of binary search tree is O(n + m), merge sorted arrays is O(n + m). Space: O(n + m) as result.

```js
const walk = root => root ? [...walk(root.left), root.val, ...walk(root.right)] : [];

// merge sorted arrays in place
const merge = (a, b) => {
  let m = a.length, n = b.length, i = m + n;
  while (n && i--> 0)
    a[i] = b[n - 1] <= a[m - 1] ? a[--m] : b[--n];
  return a;
};

const getAllElements = (root1, root2) => merge(...[root1, root2].map(walk));
```

It is a simpler version.

```js
const getAllElementsAlt = (root1, root2) => [...walk(root1), ...walk(root2)].sort((a, b) => a - b);
```

### Vigenere Cipher

OOP and ES6 features: there is a solve of [Vigenere Cipher Helper](https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3) problem from CodeWars.

```javascript
class VigenereCipher {
  static #keygen(abc) {
    return [...Array(abc.length)].map(x => abc[Math.floor(Math.random() * abc.length)]).join('')
  }
  #abc = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  #key
  constructor(key, abc = this.#abc) {
    this.#abc = abc
    this.#key = key || VigenereCipher.#keygen(this.#abc)
  }
  #char(x, i, step) {
    const [key, abc] = [this.#key, this.#abc]
    if (!key || !abc.includes(x)) return x
    const shift = step * abc.indexOf(key[i % key.length])
    return abc[(abc.indexOf(x) + shift + abc.length) % abc.length]
  }
  #line(str, step) {
    return [...str].map((x, i) => this.#char(x, i, step)).join('')
  }
  get key() { return this.#key }
  encode(str) { return this.#line(str, 1) }
  decode(str) { return this.#line(str, -1) }
}

// tests
let code, text = 'I’d far rather be happy than right any day.';

const c1 = new VigenereCipher('douglasadams', 'abcdefghijklmnopqrstuvwxyz')
code = 'I’x qaj uafzhf hp zaspk wvut ragkt sqm jly.'
console.assert(c1.encode(text) === code)
console.assert(c1.decode(code) === text)

const c2 = new VigenereCipher()
code = c2.encode(text)
console.assert(text !== code)
console.assert(c2.decode(code) === text)

const c3 = new VigenereCipher();
console.assert(c1.key !== c2.key)
console.assert(c2.key !== c3.key)
code = c3.encode('Hello, World!')
console.assert(c3.decode(code) === 'Hello, World!')

const c4 = new VigenereCipher(c2.key)
code = c4.encode(text)
console.assert(text !== code)
console.assert(c2.decode(code) === text)
```

<aside class="last-update">
  Last CV update: <time datetime="2022-01-31">31st January 2022</time>
</aside>

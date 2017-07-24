import {Selector} from 'testcafe'

/* eslint-disable no-undef */
fixture `Getting Started`
  .page `http://localhost:8080`
/* eslint-enable */

const title = Selector('h1')

/* eslint-disable no-undef */

test('Title', async test => {
  await test
    .expect(title.innerText).eql(' Node Authentication')
})

/* eslint-enable */

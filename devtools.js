if (document.querySelectorAll('.imageList .image-item-inner img').length) {
  let titletext = document.querySelector('.gallery .info-box .title').innerHTML.trim().replace(/[<!>-]*/g, '')
  let newdiv = document.createElement('div')
  newdiv.style = 'position:absolute;z-index:999;background:white;padding-bottom:90px'
  let title = document.createElement('h2')
  title.innerHTML = titletext
  newdiv.appendChild(title)
  Array.from(document.querySelectorAll('.imageList .image-item-inner img')).map(x => {
    x.src = x.dataset.src
    x.style = 'margin:0 auto; width:10%;display:block'
    newdiv.appendChild(x)
  })
  document.body.prepend(newdiv)
  console.log(newdiv)
}



if (location.href.includes('https://mp.toutiao.com/')) {

  let timer = () => {
    console.log('ready')
    document.querySelector('.garr-header .shead_wrap').addEventListener('click', () => {

      document.querySelector('.article-cover-add').click()
      setTimeout(() => {
        Array.from(document.querySelectorAll('.pgc-text-img .img-item img')).map((x, i) => {
          if (i < 3) {
            x.click()
          }
        })
        setTimeout(() => {
          document.querySelector('.pgc-text-img .img-footer button:nth-child(2)').click()
          setTimeout(() => {
            document.querySelector('.publish-footer .publish-footer-content .publish-btn-last').click()
          }, 150);
        }, 150);
      }, 150);

    })
  }

  let timerindex = setTimeout(() => {
    if (document.querySelector('.garr-header .shead_wrap')) {
      timer()
      clearTimeout(timerindex)
    }
  }, 500);



}
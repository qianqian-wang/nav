
const x = localStorage.getItem('x')
const url=JSON.parse(x)
let localHash=url||[
    {logo:'B',url:'www.baidu.com'}
]
const simplifyUrl = (url) => {
    return url.replace('https://','').replace('http://','').replace('www.','').replace(/\/.*/,'')
}
const render = () => {
    $('.content').find('.little:not(.add)').remove()
    localHash.forEach((node, index) => {
        const $li = $(`
        <div class="little">
            <div class='logo'>${node.logo}</div>
            <div class='url'>${simplifyUrl(node.url)}</div>
            <div class='close'>x</div>
        </div>`).insertBefore('.black>.add')
        $li.on('click', () => {
            window.open(node.url)
        })
        $li.on('click', '.close', (e) => {
            e.stopPropagation()
            localHash.splice(index, 1)
            localStorage.setItem('x', JSON.stringify(localHash))
            render()
        })
    })
 }
render()
$('.add').on('click', () => {
    let url = window.prompt('请输入网址')
    if (url) {
        if (url.indexOf('http') !== 0) {
            url='https://'+url
        }
        localHash.push({
            logo: simplifyUrl(url)[0].toUpperCase(),
            url:url
        })
        localStorage.setItem('x', JSON.stringify(localHash))
    }
    render()
})

const stone=[
    { title: 'MDN Web文档', url: 'https://developer.mozilla.org/zh-CN/docs/Learn', intro: '' },
    { title: 'JS Bin', url: 'https://jsbin.com/', intro: '' },
    { title: '掘金', url: 'https://juejin.cn/', intro: '' }, 
    { title: 'Element', url: 'https://element.eleme.cn/#/zh-CN', intro: '' },
    { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' },
    { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' },
    { title: 'MDN Web文档', url: 'https://developer.mozilla.org/zh-CN/docs/Learn', intro: '' },
    { title: 'JS Bin', url: 'https://jsbin.com/', intro: '' },
    { title: '掘金', url: 'https://juejin.cn/', intro: '' }, 
    { title: 'Element', url: 'https://element.eleme.cn/#/zh-CN', intro: '' },
    { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' },
    { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' },
    { title: 'Element', url: 'https://element.eleme.cn/#/zh-CN', intro: '' },
    { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' },
    { title: 'jQuery中文文档', url: ' https://www.jquery123.com/', intro: '' }
]

const mStone = () => {
    stone.forEach((node, index) => {
        const $li = $(`
        <div class="col-little">
          <div class='title'>${node.title}</div>
        </div>`).appendTo('.col-black')
        $li.on('click', () => {
            window.open(node.url)
        })
    })
 }
 mStone()


// // 目录固定？
// $(window).scroll(function(){
//     if($("#date").offset().top - $(document).scrollTop() < 0){
//          let pos = $(document).scrollTop()
//          $("#date").stop().animate({top: pos+"px"}, "fast");
//     }else if($(window).height()-[$("#date").offset().top - $(document).scrollTop()]-$("#date").height() < 0){
//          let pos = $(document).scrollTop()
//          $("#date").stop().animate({top: pos+"px"}, "fast");
//      }
// })
module.exports = {
    index: 'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108296&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',
    banner: 'http://api.bilibili.com/x/web-show/res/loc?pf=0&id=23',
    author: 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
    broadcast: 'https://m.douban.com/rexxar/api/v2/status/anonymous_timeline?max_id=&ck=&for_mobile=1',
    group: 'https://m.douban.com/rexxar/api/v2/group/rec_groups_for_newbies?ck=&for_mobile=1',
    theatre: {
        hot: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&start=0&count=8&loc_id=108288&_=0',
        FreeNew: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&start=0&count=8&loc_id=108288&_=0',
        new: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&start=0&count=8&loc_id=108288&_=1508724169843' 
    },
    books: {
        virtualHot: 'https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?os=ios&start=0&count=8&loc_id=0&_=0',
        notVirtualHot: 'https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items?os=ios&start=0&count=8&loc_id=0&_=0',
        library: 'https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items?os=ios&callback=jsonp3&start=0&count=8&loc_id=0&_=1508724580956'
    }
}
/*
    posts state contains:
    id,
    title,
    author {
        id,
        name
    },
    category,
    date,
    excerpt,
    likes
 */
const initialState = [{
    id: 0,
    title: "我们是能够自由地在知识的大海中遨游的一代人",
    author: {
        id: 0,
        username: "lambert",
        nickname: "鲍凌波Lambert",
    },
    category: "杂记",
    date: "2016-08-03",
    excerpt: "老实说,我也不知道要在这里写点什么,这就是个用来测试的语句。。。 以及" +
    "blablablablablablabla。。。 而且TMD不够长还不能满足显示的要求这尼玛。。。我" +
    "只好再打两句废话 好吧,这行写完应该是够了吧。。。",
    likes: "29"
}, {
    id: 1,
    title: "我们是能够自由地在知识的大海中遨游的一代人",
    author: {
        id: 0,
        username: "lambert",
        nickname: "鲍凌波Lambert",
    },
    category: "杂记",
    date: "2016-08-03",
    excerpt: "老实说,我也不知道要在这里写点什么,这就是个用来测试的语句。。。 以及" +
    "blablablablablablabla。。。 而且TMD不够长还不能满足显示的要求这尼玛。。。我" +
    "只好再打两句废话 好吧,这行写完应该是够了吧。。。",
    likes: "29"
}, {
    id: 2,
    title: "我们是能够自由地在知识的大海中遨游的一代人",
    author: {
        id: 0,
        username: "lambert",
        nickname: "鲍凌波Lambert",
    },
    category: "杂记",
    date: "2016-08-03",
    excerpt: "老实说,我也不知道要在这里写点什么,这就是个用来测试的语句。。。 以及" +
    "blablablablablablabla。。。 而且TMD不够长还不能满足显示的要求这尼玛。。。我" +
    "只好再打两句废话 好吧,这行写完应该是够了吧。。。",
    likes: "29"
}, {
    id: 3,
    title: "我们是能够自由地在知识的大海中遨游的一代人",
    author: {
        id: 0,
        username: "lambert",
        nickname: "鲍凌波Lambert",
    },
    category: "杂记",
    date: "2016-08-03",
    excerpt: "老实说,我也不知道要在这里写点什么,这就是个用来测试的语句。。。 以及" +
    "blablablablablablabla。。。 而且TMD不够长还不能满足显示的要求这尼玛。。。我" +
    "只好再打两句废话 好吧,这行写完应该是够了吧。。。",
    likes: "29"
}];

export default function reducer(state = initialState, action={}) {
    const { type } = action;

    switch(type) {
        default:
            return state;
    }
}
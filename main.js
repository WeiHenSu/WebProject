var app = new Vue({
    el:'#app',
    data:{
        itemList:[
            {
                id:'1',
                itemName:'「 我叫柏瑞德 」',
                imgUrl:'./picture/brad.jpeg',
                price:'180',
                count:'1'
            },
            {
                id:'2',
                itemName:'「 一碗小貓 」',
                imgUrl:'./picture/cat.jpg',
                price:'180',
                count:'1'
            },
            {
                id:'3',
                itemName:'「 手繪貼紙 」',
                imgUrl:'./picture/sticker.jpg',
                price:'50',
                count:'1'
            },
        ]
    },
    methods:{
        handlePlus(item){
            item.count++
        },
        handleSub(item){
            if(item.count>1){
                item.count--;
            }
        },
        handledelete(index){
            console.log(this);
            this.itemList.splice(index,1)
        }
    }
})
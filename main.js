
var app = new Vue({
    el:'#app',
    data:{
        countbadge:1,
        itemList:[      
            {
                id:'1',
                itemName:'「 我叫柏瑞德 」',
                itemintro: '圍圍巾的小鳥 - 飲料提袋',
                imgUrl:'./picture/brad.jpeg',
                price:180,
                count:0
            },
            {
                id:'2',
                itemName:'「 一碗小貓 」',
                itemintro: '手繪明信片',
                imgUrl:'./picture/cat.jpg',
                price:180,
                count:0
            },
            {
                id:'3',
                itemName:'「 手繪貼紙 」',
                itemintro: '防水手繪貼紙組',
                imgUrl:'./picture/sticker.jpg',
                price:50,
                count:0
            },
        ],
        cartlist:[],
    },
    methods:{
        handlecart(item){
            for(let i = 0; i < this.cartlist.length; i++){
                if(this.cartlist[i].pname == item.itemName){
                    console.log(this.cartlist[i].pname)
                    this.cartlist[i].pcount++
                    console.log(this.cartlist[i].pcount)
                    return false
                }
            }
            this.cartlist.push({id:item.id, pname:item.itemName, pintro:item.itemintro, pimgurl:item.imgUrl, pprice:item.price, pcount:item.count})
            
        },
        handlePlus(cart){
            cart.pcount++
            this.countbadge++
        },
        handleSub(cart){
            if(cart.pcount>1){
                cart.pcount--
                this.countbadge--
            }
        },
        handledelete(cart, index){
            this.cartlist.splice(index,1)
            cart.pcount = 0
            this.countbadge = 0
        },
        badge(){
            this.countbadge++
        }
    }
})
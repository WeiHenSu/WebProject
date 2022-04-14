
var app = new Vue({
    el:'#app',
    data:{
        countbadge:1,
        itemList:[],
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
    },
    mounted(){
        axios.get('http://localhost:3000/items').then((res) => {
            this.itemList = res.data
        })

    }
})
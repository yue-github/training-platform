export default {
    data(){
    	return{
    		items:[
	    		{
	    		   src:"1",
	    	       name:"Python语言程序设计",
	    		},
	    		{
	    		   src:"2",
	    	       name:"Python语言程序设计",
	    		},
	    		{
	    		   src:"3",
	    	       name:"Python语言程序设计",
	    		},
	    	 
	    	  
    	   ],
    	    
    	}
    	
 
    },
    methods:{
        // modify:function(){

        	 
        // },
        delete1:function(index){
	        // for(let i in arr){

	        	this.items.splice(index,1);
	        // }
        	
        },

    },
    mounted(){
    	 
    	 UIkit.upload('.js-upload', {
    	 	url:'',
    	 	beforeSend: function (res) {
               console.log(res);
            },
    	 	complete(agr) {
                console.log('complete');
            }
    	 })
    }
}
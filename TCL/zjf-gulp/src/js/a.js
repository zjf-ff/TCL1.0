;(function(){
    function fnA(){
        console.log("a");    
    }
    fnA();

    class Tab{
        constructor(){
            this.name ="admin"
        }
        show(){
            let h = "hello";
            console.log(`${h}${this.name}`);
            
        }
    }
    const t = new Tab();
    t.show();
})();
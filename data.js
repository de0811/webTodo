function Memo(){
    this.title = '';
    this.context = '';
    this.createTime = new Date();
    this.parent = undefined;
    this.childs = [];
    this.hashTag = [];
    this.connections = []; //연관성 Parent는 아닌것이... #같은건가 해시태그?
}
Memo.prototype = {
    setMemo : function(memo){
        this.title = memo.title;
        this.context = memo.context;
        this.createTime = new Date(memo.createTime);
        this.parent = memo.parent;
        this.childs = memo.childs;
        this.hashTag = memo.hashTag;
        this.connections = memo.connections;
    }
}

function Todo(){
    this.importance = 0; //중요도
    this.startTime = new Date();
    this.endTime = new Date();
    this.progress = false;
    Memo.call(this);
}
Todo.prototype = new Memo();
Todo.prototype.setTodo = function(todo){
    this.setMemo(todo);
    this.importance = todo.importance;
    this.endTime = todo.endTime;
    this.progress = todo.progress;
}


function Mind(){
    Todo.call(this);
}
Mind.prototype = new Todo();
function wasLoggedIn(){
    const toDoFormClassList = document.querySelector("#todo-form").classList;
    const loginFormClassList = document.querySelector("#login-form").classList;
    const wasLoggedIn = localStorage.getItem("userName")?true:false;
    if(wasLoggedIn){
        toDoFormClassList.remove(HIDDEN_CLASSNAME);
        toDoFormClassList.add(FLEX_CLASSNAME);
    }else{
        toDoFormClassList.add(HIDDEN_CLASSNAME);
        toDoFormClassList.remove(FLEX_CLASSNAME);
        loginFormClassList.remove(HIDDEN_CLASSNAME);
        toDoList.querySelectorAll("li").forEach(val => val.remove());
        localStorage.removeItem(TODOS_KEY);
    }
}


import React from "react"
import { StyleSheet, View, FlatList } from "react-native"

import Header from "./components/Header"
import InputBar from "./components/InputBar"
import TodoItem from "./components/TodoItem"

export default class App extends React.Component{

    constructor(){
      super()
      this.state = {
        todoInput:"",
        todos:[
          //{id:0,title:"Take out the trash", completed:false},
          // {id:1,title:"Clean the house",completed:true}
        ]
      }

    }

    addNewTodo(){
      let todos = this.state.todos

      todos.push({
        id:todos.length,
        title:this.state.todoInput,
        completed:false
      })
      this.setState({
        todos,
        todoInput:""
      })
      
    }
    
    toggleDone(item){
      let todos = this.state.todos

      todos = todos.map((todo)=>{
        if(todo.id===item.id){
          todo.completed = !todo.completed
        }
        return todo
      })
      this.setState({todos})
    }

    removeTodo(item){
      let todos = this.state.todos

      todos = todos.filter((todo)=> todo.id!==item.id)

      this.setState({todos})    
     
    }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.statusbar}></View>
          {/* <Text>Hello</Text> */}
          <Header title="To Do App"/>
          <InputBar 
            textChange={to=>this.setState({todoInput:to})}
            addNewTodo={() =>this.addNewTodo() }
            todoInput={this.state.todoInput}
          />
         <FlatList 
            data={this.state.todos}
            extraData={this.state}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={({item,index})=>{
              return(
                <TodoItem 
                  todoItem={item}
                  toggleDone={()=>this.toggleDone(item)}
                  removeTodo={()=>this.removeTodo(item)}
                />
              )
            }}
         />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center"
  },
  statusbar: {
    backgroundColor: "#0415ff",
    height: 24
  }
})
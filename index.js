const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index_num) => {
      all[index_num].completed = true
    }
  
    const overdue = () => {
      var odd;
      var over_due_date=[];
      for (odd=0;odd<all.length;odd++){
        if (all[odd]['dueDate']<today){
          over_due_date.push(all[odd]);
        }
      }
      return over_due_date
    }
  
    const dueToday = () => {
      var dtoday;
      var due_date_today=[];
      for (dtoday=0;dtoday<all.length;dtoday++){
        if(all[dtoday]['dueDate']===today){
          due_date_today.push(all[dtoday]);
        }
      }
      return due_date_today;
    }
  
    const dueLater = () => {
      var dlater;
      var due_date_later=[];
      for (dlater=0;dlater<all.length;dlater++){
        if (all[dlater]['dueDate']>today){
          due_date_later.push(all[dlater]);
        }
      }
      return due_date_later;
    }
  
    const toDisplayableList = (list) => {
      var ans = ""
      for (let index_num = 0; index_num < list.length; index_num++) {
        
        
        if(list[index_num]['dueDate']!=today){
          if(list[index_num]['completed']==true){
            ans += '[x] '+list[index_num]['title']+" "+list[index_num]['dueDate']
          }
          else{
            ans+='[ ] '+list[index_num]['title']+" "+list[index_num]['dueDate']
          }
        }
        else{
          if(list[index_num]['completed']==true){
            ans += '[x] '+list[index_num]['title']
          }
          else{
            ans+='[ ] '+list[index_num]['title']
          }
        }
        if(index_num<list.length-1 && list.length>1){
          ans+="\n"
        }
      }
      return ans
    }
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  }
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")